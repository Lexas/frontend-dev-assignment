/*
 *  /MathJax/jax/output/SVG/autoload/mglyph.js
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

MathJax.Hub.Register.StartupHook("SVG Jax Ready",function(){var e="2.5.0",t=MathJax
.ElementJax.mml,n=MathJax.OutputJax.SVG,r=n.BBOX,i=MathJax.Localization,s="http://www.w3.org/1999/xlink"
;r.MGLYPH=r.Subclass({type:"image",removeable:!1,Init:function(e,t,r,i,o,u){u==null&&
(u={});var a=e.width*1e3/n.em,l=e.height*1e3/n.em,h=a,p=l,d=0;t!==""&&(a=n.length2em
(t,o,h),l=h?a/h*p:0),r!==""&&(l=n.length2em(r,o,p),t===""&&(a=p?l/p*h:0)),i!==""&&
i.match(/\d/)&&(d=n.length2em(i,o),u.y=-d),u.height=Math.floor(l),u.width=Math.floor
(a),u.transform="translate(0,"+l+") matrix(1 0 0 -1 0 0)",u.preserveAspectRatio="none"
,this.SUPER(arguments).Init.call(this,u),this.element.setAttributeNS(s,"href",e.src
),this.w=this.r=a,this.h=this.H=l+d,this.d=this.D=-d,this.l=0}}),t.mglyph.Augment
({toSVG:function(e,n){this.SVGgetStyles();var s=this.SVG(),o,u;this.SVGhandleSpace
(s);var f=this.getValues("src","width","height","valign","alt");if(f.src===""){f=
this.getValues("index","fontfamily");if(f.index){n||(n=this.SVGgetScale());var l=
{};f.fontfamily&&(l["font-family"]=f.fontfamily),s.Add(r.TEXT(n,String.fromCharCode
(f.index),l))}}else{this.img||(this.img=t.mglyph.GLYPH[f.src]),this.img||(this.img=
t.mglyph.GLYPH[f.src]={img:new Image,status:"pending"},o=this.img.img,o.onload=MathJax
.Callback(["SVGimgLoaded",this]),o.onerror=MathJax.Callback(["SVGimgError",this])
,o.src=f.src,MathJax.Hub.RestartAfter(o.onload));if(this.img.status!=="OK")u=t.Error
(i._(["MathML","BadMglyph"],"Bad mglyph: %1",f.src),{mathsize:"75%"}),this.Append
(u),s=u.toSVG(),this.data.pop();else{var c=this.SVGgetMu(s);s.Add(r.MGLYPH(this.img
.img,f.width,f.height,f.valign,c,{src:f.src,alt:f.alt,title:f.alt}))}}return s.Clean
(),this.SVGhandleColor(s),this.SVGsaveData(s),s},SVGimgLoaded:function(e,t){typeof 
e=="string"&&(t=e),this.img.status=t||"OK"},SVGimgError:function(){this.img.img.onload
("error")}},{GLYPH:{}}),MathJax.Hub.Startup.signal.Post("SVG mglyph Ready"),MathJax
.Ajax.loadComplete(n.autoloadDir+"/mglyph.js")});