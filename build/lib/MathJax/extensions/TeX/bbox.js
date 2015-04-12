/*
 *  /MathJax/extensions/TeX/bbox.js
 *
 *  Copyright (c) 2009-2015 The MathJax Consortium
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */

MathJax.Extension["TeX/bbox"]={version:"2.5.0"},MathJax.Hub.Register.StartupHook("TeX Jax Ready"
,function(){var e=MathJax.InputJax.TeX,t=MathJax.ElementJax.mml;e.Definitions.Add
({macros:{bbox:"BBox"}},null,!0),e.Parse.Augment({BBox:function(n){var r=this.GetBrackets
(n,""),i=this.ParseArg(n),s=r.split(/,/),o,u,f;for(var l=0,c=s.length;l<c;l++){var h=
s[l].replace(/^\s+/,"").replace(/\s+$/,""),p=h.match(/^(\.\d+|\d+(\.\d*)?)(pt|em|ex|mu|px|in|cm|mm)$/
);if(p){o&&e.Error(["MultipleBBoxProperty","%1 specified twice in %2","Padding",n
]);var d=p[1]+p[3];o={height:"+"+d,depth:"+"+d,lspace:d,width:"+"+2*p[1]+p[3]}}else h
.match(/^([a-z0-9]+|\#[0-9a-f]{6}|\#[0-9a-f]{3})$/i)?(u&&e.Error(["MultipleBBoxProperty"
,"%1 specified twice in %2","Background",n]),u=h):h.match(/^[-a-z]+:/i)?(f&&e.Error
(["MultipleBBoxProperty","%1 specified twice in %2","Style",n]),f=this.BBoxStyle(
h)):h!==""&&e.Error(["InvalidBBoxProperty","'%1' doesn't look like a color, a padding dimension, or a style"
,h])}o&&(i=t.mpadded(i).With(o));if(u||f)i=t.mstyle(i).With({mathbackground:u,style
:f});this.Push(i)},BBoxStyle:function(e){return e}}),MathJax.Hub.Startup.signal.Post
("TeX bbox Ready")}),MathJax.Ajax.loadComplete("[MathJax]/extensions/TeX/bbox.js"
);