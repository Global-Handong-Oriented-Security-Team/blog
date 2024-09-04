# coding=utf-8
import glob

import yaml
from treelib import Tree

try:
    from yaml import CLoader as Loader
except ImportError:
    from yaml import Loader

def create_tree_from_dict(tree, data, parent=None):
    root = next(iter(data))
    for child_data in data[root]:
        child = next(iter(child_data))
        if isinstance(child_data[child], str):
            if child_data[child].startswith('http'):
                node = '<a href=' + child_data[child]+ '>'+str(child)+'</a>'
            else:
                node = '<a href=' + \
                       child_data[child].rsplit('.', maxsplit=1)[0] +\
                       '>'+str(child)+'</a>'
            tree.create_node(node, node, parent=parent)
            continue
        tree.create_node('<span>' + child + '</span>', child, parent=parent)
        create_tree_from_dict(tree, child_data, child)

def create_category(yml_path, index_path, root_name):
    with open(yml_path, encoding='utf-8') as f:
        index = f.read()

    nav = yaml.load(index, Loader=Loader)['nav']

    del nav[0]
    nav = {root_name: nav}

    tree = Tree()
    root = next(iter(nav))
    tree.create_node(root, root)
    create_tree_from_dict(tree, nav, root)

    index = tree.show(key=lambda x: x.predecessor(tree.identifier),
                      line_type='ascii-exr', stdout=False)

    index = index.replace(' ', '&nbsp;') \
                 .replace('<a&nbsp;', '<a ') \
                 .replace('\n', '</p><p><br />') \
                 .replace('/README', '')

    index = '<div class="index">' + index + '</p></div>'
    index += '''<footer class="index"> <img id="badge" onload="javascript:(function(){setTimeout(function(){document.getElementById('badge').src=document.getElementById('badge').src.split('?')[0]+'?time='+new Date().getTime();},1000);}())" src="https://api.netlify.com/api/v1/badges/ee15c580-c883-47bd-965d-a00321b64685/deploy-status" /> </footer>'''
    index = '''---
hide:
  - navigation
  - toc
---

''' + index


    with open(index_path, 'w', encoding='utf-8') as f:
        f.write(index)

def insert_toc(path):
    with open(path, 'r+', encoding='utf-8') as f:
        if f.readline().startswith('??? toc "Contents"'):
            return
        f.seek(0)
        md = '''??? toc "Contents"

    [TOC]

''' + f.read()
        f.seek(0)
        f.write(md)

def test():
    pass

if __name__ == '__main__':
    import sys
    try:
        if sys.argv[1] == '-c':
            create_category('mkdocs.yml', 'docs/index.md', '')
            md_pathes = glob.glob('docs/**/*.md', recursive=True)
            md_pathes = [_ for _ in md_pathes
                        if "index" not in _ if "old" not in _]
            for md_path in md_pathes:
                insert_toc(md_path)
    except IndexError:
        test()