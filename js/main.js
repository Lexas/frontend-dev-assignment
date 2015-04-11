/* global requirejs, document*/

requirejs.config({
	baseUrl : './',
	paths : {
		jquery : 'lib/jquery/dist/jquery.min',
		mathjax: 'lib/MathJax/MathJax.js?config=TeX-AMS_HTML',
		enquire: 'lib/enquire/dist/enquire.min'
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

requirejs(['enquire', 'jquery', 'mathjax'], function(nq, $, mj){
	'use strict';

	var levels = []; //criteria to match each level of the index

	function traverseLevel ($arr, level, curr, len) {

		level = level ? level : 0;
		curr = curr ? curr : 0;
		len = len ? len : $arr.length;

		var $ol = $('<ol></ol>');
		for (; curr < len; curr++){
			if ($arr.eq(curr).is(levels[level])){
				var $li = $('<li><a href="#index-'+ curr +'"></a></li>');
				$arr.eq(curr).attr('id', 'index-'+ curr);
				$li.find('a').append($arr.eq(curr).text());
				$ol.append($li);
			}
			else if ($arr.eq(curr).is(levels[level+1])){
				var $child = traverseLevel($arr, level+1, curr, len);
				$('li', $ol).last().append($child);
				curr += $child.find('li').length-1;
			}
			else{
				break;
			}
		}
		return $ol;
	}

	function _init(){
		nq.register("screen and (min-width:45em)", {

			match: function(){
				$('#index').show();
			},

			unmatch : function() {
				$('#index').hide();
			}, 

			setup : function() { //execute once, if screen is not too small 
				var $titles = $('h1.title');
				levels.push($titles.filter('h1'));
				//levels.push($titles.filter('h2'));

				var $index = $('<section id="index"><h1>Index</h1></section>');
				var $ol = traverseLevel($titles);
				$index.append($ol);
					
				$('.section').first().before($index);
			}, 

			deferSetup : true 
		});

	}

	if(document.readyState === 'complete'){
		_init();
	} else {
		document.onready = _init;
	}
});