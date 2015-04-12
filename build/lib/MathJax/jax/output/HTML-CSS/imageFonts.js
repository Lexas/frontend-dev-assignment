/*
 *  /MathJax/jax/output/HTML-CSS/imageFonts.js
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

(function(e,t,n){var r="2.5.0";e.Register.LoadHook(t.fontDir+"/fontdata.js",function(
){t.Augment({allowWebFonts:!1,imgDir:t.webfontDir+"/png",imgPacked:MathJax.isPacked?""
:"/unpacked",imgSize:["050","060","071","085",100,120,141,168,200,238,283,336,400
,476],imgBaseIndex:4,imgSizeForEm:{},imgSizeForScale:{},imgZoom:1,handleImg:function(
e,t,r,i,s){s.length&&this.addText(e,s);var o=r[5].orig;o||(o=r[5].orig=[r[0],r[1]
,r[2],r[3],r[4]]);var u=this.imgZoom;e.scale||(e.scale=1);var f=this.imgIndex(e.scale*
u);f==this.imgEmWidth.length-1&&this.em*e.scale*u/this.imgEmWidth[f]>1.1&&(u=this
.imgEmWidth[f]/(this.em*e.scale));var l=this.imgEmWidth[f]/(this.em*(e.scale||1)*
u);r[0]=o[0]*l,r[1]=o[1]*l,r[2]=o[2]*l,r[3]=o[3]*l,r[4]=o[4]*l;var c=this.imgDir+"/"+
t.directory+"/"+this.imgSize[f],h=i.toString(16).toUpperCase();while(h.length<4)h="0"+
h;var p=c+"/"+h+".png",d=r[5].img[f],v={width:Math.floor(d[0]/u+.5)+"px",height:Math
.floor(d[1]/u+.5)+"px"};return d[2]&&(v.verticalAlign=Math.floor(-d[2]/u+.5)+"px"
),r[3]<0&&(v.marginLeft=this.Em(r[3]/1e3)),r[4]!=r[2]&&(v.marginRight=this.Em((r[2
]-r[4])/1e3)),this.msieIE6&&(v.filter="progid:DXImageTransform.Microsoft.AlphaImageLoader(src='"+
n.urlRev(p)+"', sizingMethod='scale')",p=this.directory+"/blank.gif"),this.addElement
(e,"img",{src:n.urlRev(p),style:v,isMathJax:!0}),""},defineImageData:function(e){
for(var n in e)if(e.hasOwnProperty(n)){var r=t.FONTDATA.FONTS[n];if(r){n=e[n];for(
var i in n)n.hasOwnProperty(i)&&r[i]&&(r[i][5]={img:n[i]})}}},initImg:function(e)
{this.imgSizeForEm[this.em]&&(this.imgBaseIndex=this.imgSizeForEm[this.em]);for(var t=0
,n=this.imgEmWidth.length-1;t<n;t++)if(this.em<=this.imgEmWidth[t])break;t&&this.
imgEmWidth[t]-this.em>this.em-this.imgEmWidth[t-1]&&t--,this.imgSizeForEm[this.em
]=this.imgBaseIndex=t,this.imgZoom=this.imgBrowserZoom()},imgIndex:function(e){if(!
e)return this.imgBaseIndex;this.imgSizeForScale[this.em]||(this.imgSizeForScale[this
.em]={});if(this.imgSizeForScale[this.em][e])return this.imgSizeForScale[this.em]
[e];var t=this.em*e;for(var n=0,r=this.imgEmWidth.length-1;n<r;n++)if(t<=this.imgEmWidth
[n])break;return n&&this.imgEmWidth[n]-t>t-this.imgEmWidth[n-1]&&n--,this.imgSizeForScale
[this.em][e]=n,n},imgBrowserZoom:function(){return 1}}),e.Browser.Select({Firefox
:function(e){var n=t.addElement(document.body,"div",{style:{display:"none",visibility
:"hidden",overflow:"scroll",position:"absolute",top:0,left:0,width:"200px",height
:"200px",padding:0,border:0,margin:0}}),r=t.addElement(n,"div",{style:{position:"absolute"
,left:0,top:0,right:0,bottom:0,padding:0,border:0,margin:0}});t.Augment({imgSpaceBug
:!0,imgSpace:" ",imgZoomLevel:e.isMac?{50:.3,30:.5,22:.67,19:.8,16:.9,15:1,13:1.1
,12:1.2,11:1.33,10:1.5,9:1.7,7:2,6:2.4,5:3,0:15}:{56:.3,34:.5,25:.67,21:.8,19:.9,17
:1,15:1.1,14:1.2,13:1.33,11:1.5,10:1.7,8:2,7:2.4,6:3,0:17},imgZoomDiv:n,imgBrowserZoom
:function(){var e=this.imgZoomLevel;n.style.display="";var t=n.offsetWidth-r.offsetWidth
;return t=e[t]?e[t]:e[0]/t,n.style.display="none",t}})},Safari:function(e){t.Augment
({imgBrowserZoom:function(){return 3}})},Chrome:function(e){t.Augment({imgHeightBug
:!0,imgBrowserZoom:function(){return 3}})},Opera:function(e){t.Augment({imgSpaceBug
:!0,imgSpace:"  ",imgDoc:document.compatMode=="BackCompat"?document.body:document
.documentElement,imgBrowserZoom:function(){if(e.isMac)return 3;var t=this.imgDoc.
clientHeight,n=Math.floor(15*t/window.innerHeight);return this.imgDoc.clientWidth<
this.imgDoc.scrollWidth-n&&(t+=n),parseFloat((window.innerHeight/t).toFixed(1))}}
)}});var r=function(){var e=t.FONTDATA.FONTS.MathJax_Main[8212][5].img;t.imgEmWidth=
[];for(var n=0,r=e.length;n<r;n++)t.imgEmWidth[n]=e[n][0]},i=t.imgDir+t.imgPacked
;MathJax.Callback.Queue(["Require",n,i+"/imagedata.js"],r,["loadComplete",n,t.directory+"/imageFonts.js"
])})})(MathJax.Hub,MathJax.OutputJax["HTML-CSS"],MathJax.Ajax);