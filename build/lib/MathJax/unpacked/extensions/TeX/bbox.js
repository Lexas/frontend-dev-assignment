/*************************************************************
 *
 *  MathJax/extensions/TeX/bbox.js
 *  
 *  This file implements the \bbox macro, which creates an box that
 *  can be styled (for background colors, and so on).  You can include
 *  an optional dimension that tells how much extra padding to include
 *  around the bounding box for the mathematics, or a color specification 
 *  for the background color to use, or both.  E.g.,
 *  
 *    \bbox[2pt]{x+y}        %  an invisible box around x+y with 2pt of extra space
 *    \bbox[green]{x+y}      %  a green box around x+y
 *    \bbox[green,2pt]{x+y}  %  a green box with 2pt of extra space
 *
 *  You can also specify style attributes, for example
 *  
 *    \bbox[red,border:3px solid blue,5px]{x+y}
 *  
 *  would give a red background with a 3px solid blue border that has 5px
 *  of padding between the border and the mathematics.  Note that not all
 *  output formats support the style specifications.  In particular, the
 *  NativeMML output depends on the browser to render the attributes, and
 *  not all MathML renderers will honor them (e.g., MathPlayer2 doesn't
 *  render border styles).
 *  
 *  This file will be loaded automatically when \bbox is first used.
 *
 *  ---------------------------------------------------------------------
 *  
 *  Copyright (c) 2011-2015 The MathJax Consortium
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
(n,""),i=this.ParseArg(n),s=r.split(/,/),o,u,a;for(var f=0,l=s.length;f<l;f++){var c=
s[f].replace(/^\s+/,"").replace(/\s+$/,""),h=c.match(/^(\.\d+|\d+(\.\d*)?)(pt|em|ex|mu|px|in|cm|mm)$/
);if(h){o&&e.Error(["MultipleBBoxProperty","%1 specified twice in %2","Padding",n
]);var p=h[1]+h[3];o={height:"+"+p,depth:"+"+p,lspace:p,width:"+"+2*h[1]+h[3]}}else c
.match(/^([a-z0-9]+|\#[0-9a-f]{6}|\#[0-9a-f]{3})$/i)?(u&&e.Error(["MultipleBBoxProperty"
,"%1 specified twice in %2","Background",n]),u=c):c.match(/^[-a-z]+:/i)?(a&&e.Error
(["MultipleBBoxProperty","%1 specified twice in %2","Style",n]),a=this.BBoxStyle(
c)):c!==""&&e.Error(["InvalidBBoxProperty","'%1' doesn't look like a color, a padding dimension, or a style"
,c])}o&&(i=t.mpadded(i).With(o));if(u||a)i=t.mstyle(i).With({mathbackground:u,style
:a});this.Push(i)},BBoxStyle:function(e){return e}}),MathJax.Hub.Startup.signal.Post
("TeX bbox Ready")}),MathJax.Ajax.loadComplete("[MathJax]/extensions/TeX/bbox.js"
);