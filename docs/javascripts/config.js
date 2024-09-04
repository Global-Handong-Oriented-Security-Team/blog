hljs.initHighlighting();

(function () {
'use strict';

var katexMath = (function () {
    var maths = document.querySelectorAll('.arithmatex'),
        tex;

    for (var i = 0; i < maths.length; i++) {
      tex = maths[i].textContent || maths[i].innerText;
      if (tex.startsWith('\\(') && tex.endsWith('\\)')) {
        katex.render(tex.slice(2, -2), maths[i], {'displayMode': false, 'trust': true});
      } else if (tex.startsWith('\\[') && tex.endsWith('\\]')) {
        katex.render(tex.slice(2, -2), maths[i], {'displayMode': true, 'trust': true});
      }
    }
});

(function () {
  var onReady = function onReady(fn) {
    if (document.addEventListener) {
      // document.addEventListener("DOMContentLoaded", fn);
      document.addEventListener("DOMContentLoaded", function() {
        renderMathInElement(document.body, {
          trust: true,
          macros: {
              // "\\addBar": "\\bar{#1}",
              // "\\bold": "\\mathbf{#1}",
              "\\Dashv": "\\mathrel{\\htmlStyle{display: inline-block; transform: scaleX(-1)}{\\vDash}}",
              "\\dotdiv": "\\mathbin{\\dot{\\smash{-}}}",
              "\\rddots": "\\mathrel{\\htmlStyle{display: inline-block; transform: scaleX(-1)}{\\ddots}}",
              "\\bigor": "\\bigvee",
              "\\bigand": "\\bigwedge",
              // "\\svdash": "\\mathbin{\\big|\\mkern-5mu\\tfrac{\\scriptsize  ~#1~}{\\scriptsize ~#2~}}",
              "\\svdash": "\\mathbin{\\Big|\\mkern-5mu\\dfrac{\\scriptsize  ~#1~}{\\scriptsize ~#2~}}",
              "\\svDash": "\\htmlClass{doubled}{\\mathbin{\\Big|\\mkern-5mu\\dfrac{\\scriptsize  ~#1~}{\\scriptsize ~#2~}}}",
              // "\\concat": "\\,{}^\\smallfrown",
              "\\concat": "\\smallfrown",
              "\\ein": "\\mathrel{\\varepsilon}",
              "\\ssim": "\\mathopen{\\sim}",
              "\\bigandtype": "\\mathopen{\\bigand}\\mathsf{-type}",
              "\\bigortype": "\\mathopen{\\bigor}\\mathsf{-type}",
              "\\proofpart": "\\scriptsize{\\ddots}{\\vdots}{\\rddots}",
              "\\hashtag": "\\mathbin{\\footnotesize \\#}",
          }
        });
      });
    } else {
      document.attachEvent("onreadystatechange", function () {
        if (document.readyState === "interactive") {
          fn();
        }
      });
    }
  };

  onReady(function () {
    if (typeof katex !== "undefined") {
      katexMath();
    }
  });
})();

}());
