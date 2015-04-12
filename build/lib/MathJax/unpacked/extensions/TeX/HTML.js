/*************************************************************
 *
 *  MathJax/extensions/TeX/HTML.js
 *  
 *  Implements the \href, \class, \style, \cssId macros.
 *
 *  ---------------------------------------------------------------------
 *  
 *  Copyright (c) 2010-2015 The MathJax Consortium
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

MathJax.Extension["TeX/HTML"]={version:"2.5.0"},MathJax.Hub.Register.StartupHook("TeX Jax Ready"
,function(){var e=MathJax.InputJax.TeX,t=e.Definitions;t.Add({macros:{href:"HREF_attribute"
,"class":"CLASS_attribute",style:"STYLE_attribute",cssId:"ID_attribute"}},null,!0
),e.Parse.Augment({HREF_attribute:function(e){var t=this.GetArgument(e),n=this.GetArgumentMML
(e);this.Push(n.With({href:t}))},CLASS_attribute:function(e){var t=this.GetArgument
(e),n=this.GetArgumentMML(e);n["class"]!=null&&(t=n["class"]+" "+t),this.Push(n.With
({"class":t}))},STYLE_attribute:function(e){var t=this.GetArgument(e),n=this.GetArgumentMML
(e);n.style!=null&&(t.charAt(t.length-1)!==";"&&(t+=";"),t=n.style+" "+t),this.Push
(n.With({style:t}))},ID_attribute:function(e){var t=this.GetArgument(e),n=this.GetArgumentMML
(e);this.Push(n.With({id:t}))},GetArgumentMML:function(e){var t=this.ParseArg(e);
return t.inferred&&t.data.length==1?t=t.data[0]:delete t.inferred,t}}),MathJax.Hub
.Startup.signal.Post("TeX HTML Ready")}),MathJax.Ajax.loadComplete("[MathJax]/extensions/TeX/HTML.js"
);