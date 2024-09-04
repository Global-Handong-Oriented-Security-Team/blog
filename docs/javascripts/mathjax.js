window.MathJax = {
  tex: {
    inlineMath: [["xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx", "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"]],
    displayMath: [["yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy", "yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy"]],
    processEscapes: false,
    processEnvironments: false,
    processRefs: false,
    macros: {
      DOTSB: "\\relax",
      Dashv: "\\mathrel{\\style{display: inline-block; transform: scaleX(-1)}{\\vDash}}",
      // dotdiv: "\\mathbin{\\dot{\\smash{-}}}",
      dotdiv: "∸",
      rddots: "\\mathrel{\\style{display: inline-block; transform: scaleX(-1)}{\\ddots}}",
      degree: "^{\\circ}",
      R: "\\mathbb{R}",
      N: "\\mathbb{N}",
      Z: "\\mathbb{Z}",
      llbracket: "[\\![",
      rrbracket: "]\\!]",
      darr: "\\downarrow",
      bm: "\\boldsymbol",
      argmax: ["\\operatorname*{arg\\,max\\,}_{#1}", 1],
      argmin: ["\\operatorname*{arg\\,min\\,}_{#1}", 1],
      underbar: "\\underset{-}",
      proofpart: "\\scriptsize{\\ddots}{\\vdots}{\\rddots}",
    },
    packages: {'[+]': ['bussproofs'],
               '[+]': ['html'],
               '[+]': ['mathtools'],
               '[+]': ['boldsymbol']}
  },
  options: {
    ignoreHtmlClass: ".*|",
    processHtmlClass: "arithmatex",
    renderActions: {
      /* add a new named action not to override the original 'find' action */
      find_script_mathtex: [10, function (doc) {
        for (const node of document.querySelectorAll('script[type^="math/tex"]')) {
          const display = !!node.type.match(/; *mode=display/);
          const math = new doc.options.MathItem(node.textContent, doc.inputJax[0], display);
          const text = document.createTextNode('');
          node.parentNode.replaceChild(text, node);
          math.start = {node: text, delim: '', n: 0};
          math.end = {node: text, delim: '', n: 0};
          doc.math.push(math);
        }
      }, '']
    }
  },
  loader: {load: ['[tex]/bussproofs', 
                  '[tex]/html',
                  '[tex]/mathtools',
                  '[tex]/boldsymbol']},
};

document$.subscribe(() => { 
  MathJax.typesetPromise()
})
