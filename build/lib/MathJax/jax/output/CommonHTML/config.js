/*
 *  /MathJax/jax/output/CommonHTML/config.js
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

MathJax.OutputJax.CommonHTML=MathJax.OutputJax({id:"CommonHTML",version:"2.5.0",directory
:MathJax.OutputJax.directory+"/CommonHTML",extensionDir:MathJax.OutputJax.extensionDir+"/CommonHTML"
,config:{scale:100,minScaleAdjust:50,mtextFontInherit:!1,linebreaks:{automatic:!1
,width:"container"}}}),MathJax.Hub.config.delayJaxRegistration||MathJax.OutputJax
.CommonHTML.Register("jax/mml"),MathJax.OutputJax.CommonHTML.loadComplete("config.js"
);