
requirejs.config({
	baseUrl : './',
	paths : {
		jquery : 'lib/jquery/dist/jquery.min',
		mathjax: 'lib/MathJax/MathJax.js?config=TeX-AMS_HTML'
	},
	shim: {
		jquery: {
			exports: 'jQuery'
		},
		mathjax: {
			exports: 'MathJax',
			// init: function(){
			// 	MathJax.Hub.Config({
			// 		jax: ["input/TeX","output/HTML-CSS"],
			// 		extensions: ["tex2jax.js"],
			// 		TeX: {
			// 			extensions: ["AMSmath.js","AMSsymbols.js","noErrors.js","noUndefined.js"]
			// 		}
			// 	});
			// 	MathJax.Hub.Startup.onload();
			// 	return MathJax;
			// }
		}
	}
});

requirejs(['jquery', "mathjax"], function($, mj){

	function _init(){
	}

	if(document.readyState === 'complete'){
		_init();
	} else {
		document.onready = _init;
	}
});