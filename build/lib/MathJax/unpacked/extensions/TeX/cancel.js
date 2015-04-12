/*************************************************************
 *
 *  MathJax/extensions/TeX/cancel.js
 *  
 *  Implements the \cancel, \bcancel, \xcancel, and \cancelto macros.
 *  
 *  Usage:
 *  
 *      \cancel{math}            % strikeout math from lower left to upper right
 *      \bcancel{math}           % strikeout from upper left to lower right
 *      \xcancel{math}           % strikeout with an X
 *      \cancelto{value}{math}   % strikeout with arrow going to value
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

MathJax.Extension["TeX/cancel"]={version:"2.5.0",ALLOWED:{color:1,mathcolor:1,background
:1,mathbackground:1,padding:1,thickness:1}},MathJax.Hub.Register.StartupHook("TeX Jax Ready"
,function(){var e=MathJax.InputJax.TeX,t=MathJax.ElementJax.mml,n=MathJax.Extension
["TeX/cancel"];n.setAttributes=function(e,t){if(t!==""){t=t.replace(/ /g,"").split
(/,/);for(var r=0,i=t.length;r<i;r++){var s=t[r].split(/[:=]/);n.ALLOWED[s[0]]&&(
s[1]==="true"&&(s[1]=!0),s[1]==="false"&&(s[1]=!1),e[s[0]]=s[1])}}return e},e.Definitions
.Add({macros:{cancel:["Cancel",t.NOTATION.UPDIAGONALSTRIKE],bcancel:["Cancel",t.NOTATION
.DOWNDIAGONALSTRIKE],xcancel:["Cancel",t.NOTATION.UPDIAGONALSTRIKE+" "+t.NOTATION
.DOWNDIAGONALSTRIKE],cancelto:"CancelTo"}},null,!0),e.Parse.Augment({Cancel:function(
e,r){var i=this.GetBrackets(e,""),s=this.ParseArg(e),o=n.setAttributes({notation:
r},i);this.Push(t.menclose(s).With(o))},CancelTo:function(e,r){var i=this.ParseArg
(e),s=this.GetBrackets(e,""),o=this.ParseArg(e),u=n.setAttributes({notation:t.NOTATION
.UPDIAGONALSTRIKE+" "+t.NOTATION.UPDIAGONALARROW},s);i=t.mpadded(i).With({depth:"-.1em"
,height:"+.1em",voffset:".1em"}),this.Push(t.msup(t.menclose(o).With(u),i))}}),MathJax
.Hub.Startup.signal.Post("TeX cancel Ready")}),MathJax.Ajax.loadComplete("[MathJax]/extensions/TeX/cancel.js"
);