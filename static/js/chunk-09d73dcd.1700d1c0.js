(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-09d73dcd"],{"0f77":function(e,t,a){e.exports=a.p+"static/img/夏南南.9e46c570.jpg"},"16ed":function(e,t,a){var n;(function(){"use strict";var i=.5*(Math.sqrt(3)-1),s=(3-Math.sqrt(3))/6,c=1/3,r=1/6,o=(Math.sqrt(5)-1)/4,p=(5-Math.sqrt(5))/20;function u(e){var t;t="function"==typeof e?e:e?l(e):Math.random,this.p=m(t),this.perm=new Uint8Array(512),this.permMod12=new Uint8Array(512);for(var a=0;a<512;a++)this.perm[a]=this.p[255&a],this.permMod12[a]=this.perm[a]%12}function m(e){var t,a=new Uint8Array(256);for(t=0;t<256;t++)a[t]=t;for(t=0;t<255;t++){var n=t+~~(e()*(256-t)),i=a[t];a[t]=a[n],a[n]=i}return a}function l(){var e=0,t=0,a=0,n=1,i=v();e=i(" "),t=i(" "),a=i(" ");for(var s=0;s<arguments.length;s++)e-=i(arguments[s]),e<0&&(e+=1),t-=i(arguments[s]),t<0&&(t+=1),a-=i(arguments[s]),a<0&&(a+=1);return i=null,function(){var i=2091639*e+2.3283064365386963e-10*n;return e=t,t=a,a=i-(n=0|i)}}function v(){var e=4022871197;return function(t){t=t.toString();for(var a=0;a<t.length;a++){e+=t.charCodeAt(a);var n=.02519603282416938*e;e=n>>>0,n-=e,n*=e,e=n>>>0,n-=e,e+=4294967296*n}return 2.3283064365386963e-10*(e>>>0)}}u.prototype={grad3:new Float32Array([1,1,0,-1,1,0,1,-1,0,-1,-1,0,1,0,1,-1,0,1,1,0,-1,-1,0,-1,0,1,1,0,-1,1,0,1,-1,0,-1,-1]),grad4:new Float32Array([0,1,1,1,0,1,1,-1,0,1,-1,1,0,1,-1,-1,0,-1,1,1,0,-1,1,-1,0,-1,-1,1,0,-1,-1,-1,1,0,1,1,1,0,1,-1,1,0,-1,1,1,0,-1,-1,-1,0,1,1,-1,0,1,-1,-1,0,-1,1,-1,0,-1,-1,1,1,0,1,1,1,0,-1,1,-1,0,1,1,-1,0,-1,-1,1,0,1,-1,1,0,-1,-1,-1,0,1,-1,-1,0,-1,1,1,1,0,1,1,-1,0,1,-1,1,0,1,-1,-1,0,-1,1,1,0,-1,1,-1,0,-1,-1,1,0,-1,-1,-1,0]),noise2D:function(e,t){var a,n,c=this.permMod12,r=this.perm,o=this.grad3,p=0,u=0,m=0,l=(e+t)*i,v=Math.floor(e+l),g=Math.floor(t+l),f=(v+g)*s,d=v-f,b=g-f,h=e-d,x=t-b;h>x?(a=1,n=0):(a=0,n=1);var y=h-a+s,C=x-n+s,w=h-1+2*s,I=x-1+2*s,k=255&v,M=255&g,_=.5-h*h-x*x;if(_>=0){var j=3*c[k+r[M]];_*=_,p=_*_*(o[j]*h+o[j+1]*x)}var B=.5-y*y-C*C;if(B>=0){var N=3*c[k+a+r[M+n]];B*=B,u=B*B*(o[N]*y+o[N+1]*C)}var z=.5-w*w-I*I;if(z>=0){var L=3*c[k+1+r[M+1]];z*=z,m=z*z*(o[L]*w+o[L+1]*I)}return 70*(p+u+m)},noise3D:function(e,t,a){var n,i,s,o,p,u,m,l,v,g,f=this.permMod12,d=this.perm,b=this.grad3,h=(e+t+a)*c,x=Math.floor(e+h),y=Math.floor(t+h),C=Math.floor(a+h),w=(x+y+C)*r,I=x-w,k=y-w,M=C-w,_=e-I,j=t-k,B=a-M;_>=j?j>=B?(p=1,u=0,m=0,l=1,v=1,g=0):_>=B?(p=1,u=0,m=0,l=1,v=0,g=1):(p=0,u=0,m=1,l=1,v=0,g=1):j<B?(p=0,u=0,m=1,l=0,v=1,g=1):_<B?(p=0,u=1,m=0,l=0,v=1,g=1):(p=0,u=1,m=0,l=1,v=1,g=0);var N=_-p+r,z=j-u+r,L=B-m+r,R=_-l+2*r,U=j-v+2*r,A=B-g+2*r,S=_-1+3*r,q=j-1+3*r,D=B-1+3*r,P=255&x,E=255&y,F=255&C,V=.6-_*_-j*j-B*B;if(V<0)n=0;else{var J=3*f[P+d[E+d[F]]];V*=V,n=V*V*(b[J]*_+b[J+1]*j+b[J+2]*B)}var O=.6-N*N-z*z-L*L;if(O<0)i=0;else{var W=3*f[P+p+d[E+u+d[F+m]]];O*=O,i=O*O*(b[W]*N+b[W+1]*z+b[W+2]*L)}var $=.6-R*R-U*U-A*A;if($<0)s=0;else{var H=3*f[P+l+d[E+v+d[F+g]]];$*=$,s=$*$*(b[H]*R+b[H+1]*U+b[H+2]*A)}var T=.6-S*S-q*q-D*D;if(T<0)o=0;else{var G=3*f[P+1+d[E+1+d[F+1]]];T*=T,o=T*T*(b[G]*S+b[G+1]*q+b[G+2]*D)}return 32*(n+i+s+o)},noise4D:function(e,t,a,n){var i,s,c,r,u,m,l,v,g,f,d,b,h,x,y,C,w,I=this.perm,k=this.grad4,M=(e+t+a+n)*o,_=Math.floor(e+M),j=Math.floor(t+M),B=Math.floor(a+M),N=Math.floor(n+M),z=(_+j+B+N)*p,L=_-z,R=j-z,U=B-z,A=N-z,S=e-L,q=t-R,D=a-U,P=n-A,E=0,F=0,V=0,J=0;S>q?E++:F++,S>D?E++:V++,S>P?E++:J++,q>D?F++:V++,q>P?F++:J++,D>P?V++:J++,m=E>=3?1:0,l=F>=3?1:0,v=V>=3?1:0,g=J>=3?1:0,f=E>=2?1:0,d=F>=2?1:0,b=V>=2?1:0,h=J>=2?1:0,x=E>=1?1:0,y=F>=1?1:0,C=V>=1?1:0,w=J>=1?1:0;var O=S-m+p,W=q-l+p,$=D-v+p,H=P-g+p,T=S-f+2*p,G=q-d+2*p,K=D-b+2*p,Q=P-h+2*p,X=S-x+3*p,Y=q-y+3*p,Z=D-C+3*p,ee=P-w+3*p,te=S-1+4*p,ae=q-1+4*p,ne=D-1+4*p,ie=P-1+4*p,se=255&_,ce=255&j,re=255&B,oe=255&N,pe=.6-S*S-q*q-D*D-P*P;if(pe<0)i=0;else{var ue=I[se+I[ce+I[re+I[oe]]]]%32*4;pe*=pe,i=pe*pe*(k[ue]*S+k[ue+1]*q+k[ue+2]*D+k[ue+3]*P)}var me=.6-O*O-W*W-$*$-H*H;if(me<0)s=0;else{var le=I[se+m+I[ce+l+I[re+v+I[oe+g]]]]%32*4;me*=me,s=me*me*(k[le]*O+k[le+1]*W+k[le+2]*$+k[le+3]*H)}var ve=.6-T*T-G*G-K*K-Q*Q;if(ve<0)c=0;else{var ge=I[se+f+I[ce+d+I[re+b+I[oe+h]]]]%32*4;ve*=ve,c=ve*ve*(k[ge]*T+k[ge+1]*G+k[ge+2]*K+k[ge+3]*Q)}var fe=.6-X*X-Y*Y-Z*Z-ee*ee;if(fe<0)r=0;else{var de=I[se+x+I[ce+y+I[re+C+I[oe+w]]]]%32*4;fe*=fe,r=fe*fe*(k[de]*X+k[de+1]*Y+k[de+2]*Z+k[de+3]*ee)}var be=.6-te*te-ae*ae-ne*ne-ie*ie;if(be<0)u=0;else{var he=I[se+1+I[ce+1+I[re+1+I[oe+1]]]]%32*4;be*=be,u=be*be*(k[he]*te+k[he+1]*ae+k[he+2]*ne+k[he+3]*ie)}return 27*(i+s+c+r+u)}},u._buildPermutationTable=m,n=function(){return u}.call(t,a,t,e),void 0===n||(e.exports=n),t.SimplexNoise=u,e.exports=u})()},"1a46":function(e,t,a){e.exports=a.p+"static/img/李金丽.a063c9b0.jpg"},"1ee9":function(e,t,a){e.exports=a.p+"static/img/bg2.05866069.jpg"},"230e":function(e,t,a){},"2e14":function(e,t,a){e.exports=a.p+"static/img/王帅.8fa9dc2b.jpg"},"38fc":function(e,t,a){e.exports=a.p+"static/img/许梦桐.769130a9.jpg"},"3dcc":function(e,t,a){e.exports=a.p+"static/img/马睿铭2.77350c8d.jpg"},4157:function(e,t,a){e.exports=a.p+"static/img/靳荣.7f76b44b.jpg"},"423e":function(e,t,a){"use strict";var n=a("230e"),i=a.n(n);i.a},"4cd9":function(e,t,a){e.exports=a.p+"static/img/赵鹏飞.978905c9.jpg"},"5bfe":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"gallery"},[a("mv-full-page",{attrs:{isPointer:!1,pointerPos:"left",isV:e.isV,pages:27,page:e.currentPage,bgArr:e.bgArr,isCache:!1},on:{"update:page":function(t){e.currentPage=t}},scopedSlots:e._u([{key:"page1",fn:function(){return[a("div",{staticClass:"page1"},[a("h1",[e._v("2021，感谢有你！")]),a("p",{directives:[{name:"animate",rawName:"v-animate",value:{name:"bounceInLeft"},expression:"{ name: 'bounceInLeft' }"}]},[e._v("南天北开一中心开发服务二部")])])]},proxy:!0},{key:"page2",fn:function(){return[a("div",{staticClass:"page"},[a("p",{directives:[{name:"animate",rawName:"v-animate",value:{name:"bounceInUp"},expression:"{ name: 'bounceInUp' }"}],staticClass:"title black vt"},[e._v("我是安潇潇")])])]},proxy:!0},{key:"page3",fn:function(){return[a("div",{staticClass:"page"},[a("p",{directives:[{name:"animate",rawName:"v-animate",value:{name:"bounceInDown"},expression:"{ name: 'bounceInDown' }"}],staticClass:"title black"},[e._v("我是王帅")])])]},proxy:!0},{key:"page4",fn:function(){return[a("div",{staticClass:"page"},[a("p",{directives:[{name:"animate",rawName:"v-animate",value:{name:"bounceInRight"},expression:"{ name: 'bounceInRight' }"}],staticClass:"title black"},[e._v("我是马睿铭")])])]},proxy:!0},{key:"page5",fn:function(){return[a("div",{staticClass:"page"},[a("p",{directives:[{name:"animate",rawName:"v-animate",value:{name:"bounceInLeft"},expression:"{ name: 'bounceInLeft' }"}],staticClass:"title black mt200"},[e._v("我是韩嘉亮")])])]},proxy:!0},{key:"page6",fn:function(){return[a("div",{staticClass:"page"},[a("p",{directives:[{name:"animate",rawName:"v-animate",value:{name:"bounceInRight"},expression:"{ name: 'bounceInRight' }"}],staticClass:"title"},[e._v("我是胡涯")])])]},proxy:!0},{key:"page7",fn:function(){return[a("div",{staticClass:"page"},[a("p",{directives:[{name:"animate",rawName:"v-animate",value:{name:"bounceInUp"},expression:"{ name: 'bounceInUp' }"}],staticClass:"title black",staticStyle:{"margin-top":"0px"}},[e._v("我是黄可可")])])]},proxy:!0},{key:"page8",fn:function(){return[a("div",{staticClass:"page"},[a("p",{directives:[{name:"animate",rawName:"v-animate",value:{name:"bounceInLeft"},expression:"{ name: 'bounceInLeft' }"}],staticClass:"title black"},[e._v("我是靳荣")])])]},proxy:!0},{key:"page9",fn:function(){return[a("div",{staticClass:"page"},[a("p",{directives:[{name:"animate",rawName:"v-animate",value:{name:"bounceInRight"},expression:"{ name: 'bounceInRight' }"}],staticClass:"title black mt200"},[e._v("我是李金丽")])])]},proxy:!0},{key:"page10",fn:function(){return[a("div",{staticClass:"page"},[a("p",{directives:[{name:"animate",rawName:"v-animate",value:{name:"bounceInDown"},expression:"{ name: 'bounceInDown' }"}],staticClass:"title vt black"},[e._v("我是尚晓革")])])]},proxy:!0},{key:"page11",fn:function(){return[a("div",{staticClass:"page"},[a("p",{directives:[{name:"animate",rawName:"v-animate",value:{name:"bounceInUp"},expression:"{ name: 'bounceInUp' }"}],staticClass:"title mt200"},[e._v("我是宋华瑞")])])]},proxy:!0},{key:"page12",fn:function(){return[a("div",{staticClass:"page"},[a("p",{directives:[{name:"animate",rawName:"v-animate",value:{name:"bounceInLeft"},expression:"{ name: 'bounceInLeft' }"}],staticClass:"title vt"},[e._v("我是夏南南")])])]},proxy:!0},{key:"page13",fn:function(){return[a("div",{staticClass:"page"},[a("p",{directives:[{name:"animate",rawName:"v-animate",value:{name:"bounceInUp"},expression:"{ name: 'bounceInUp' }"}],staticClass:"title vt black"},[e._v("我是邢琳")])])]},proxy:!0},{key:"page14",fn:function(){return[a("div",{staticClass:"page"},[a("p",{directives:[{name:"animate",rawName:"v-animate",value:{name:"bounceInRight"},expression:"{ name: 'bounceInRight' }"}],staticClass:"title"},[e._v("我是许梦桐")])])]},proxy:!0},{key:"page15",fn:function(){return[a("div",{staticClass:"page"},[a("p",{directives:[{name:"animate",rawName:"v-animate",value:{name:"bounceInLeft"},expression:"{ name: 'bounceInLeft' }"}],staticClass:"title black vt"},[e._v("我是杨明威")])])]},proxy:!0},{key:"page16",fn:function(){return[a("div",{staticClass:"page"},[a("p",{directives:[{name:"animate",rawName:"v-animate",value:{name:"bounceInRight"},expression:"{ name: 'bounceInRight' }"}],staticClass:"title"},[e._v("我是张宁磊")])])]},proxy:!0},{key:"page17",fn:function(){return[a("div",{staticClass:"page"},[a("p",{directives:[{name:"animate",rawName:"v-animate",value:{name:"bounceInUp"},expression:"{ name: 'bounceInUp' }"}],staticClass:"title black"},[e._v("我是张硕")])])]},proxy:!0},{key:"page18",fn:function(){return[a("div",{staticClass:"page"},[a("p",{directives:[{name:"animate",rawName:"v-animate",value:{name:"bounceInUp"},expression:"{ name: 'bounceInUp' }"}],staticClass:"title"},[e._v("我是张桃瑜")])])]},proxy:!0},{key:"page19",fn:function(){return[a("div",{staticClass:"page"},[a("p",{directives:[{name:"animate",rawName:"v-animate",value:{name:"bounceInLeft"},expression:"{ name: 'bounceInLeft' }"}],staticClass:"title vt"},[e._v("我是张霞")])])]},proxy:!0},{key:"page20",fn:function(){return[a("div",{staticClass:"page"},[a("p",{directives:[{name:"animate",rawName:"v-animate",value:{name:"bounceInRight"},expression:"{ name: 'bounceInRight' }"}],staticClass:"title black vt ml200"},[e._v("我是张振昂")])])]},proxy:!0},{key:"page21",fn:function(){return[a("div",{staticClass:"page"},[a("p",{directives:[{name:"animate",rawName:"v-animate",value:{name:"bounceInUp"},expression:"{ name: 'bounceInUp' }"}],staticClass:"title mt200"},[e._v("我是张重彬")])])]},proxy:!0},{key:"page22",fn:function(){return[a("div",{staticClass:"page"},[a("p",{directives:[{name:"animate",rawName:"v-animate",value:{name:"bounceInRight"},expression:"{ name: 'bounceInRight' }"}],staticClass:"title black"},[e._v("我是张宗伟")])])]},proxy:!0},{key:"page23",fn:function(){return[a("div",{staticClass:"page"},[a("p",{directives:[{name:"animate",rawName:"v-animate",value:{name:"bounceInLeft"},expression:"{ name: 'bounceInLeft' }"}],staticClass:"title"},[e._v("我是赵东旭")])])]},proxy:!0},{key:"page24",fn:function(){return[a("div",{staticClass:"page"},[a("p",{directives:[{name:"animate",rawName:"v-animate",value:{name:"bounceInUp"},expression:"{ name: 'bounceInUp' }"}],staticClass:"title mt200"},[e._v("我是赵佳旺")])])]},proxy:!0},{key:"page25",fn:function(){return[a("div",{staticClass:"page"},[a("p",{directives:[{name:"animate",rawName:"v-animate",value:{name:"bounceInRight"},expression:"{ name: 'bounceInRight' }"}],staticClass:"title"},[e._v("我是赵鹏飞")])])]},proxy:!0},{key:"page26",fn:function(){return[a("div",{staticClass:"page"},[a("p",{directives:[{name:"animate",rawName:"v-animate",value:{name:"bounceInLeft"},expression:"{ name: 'bounceInLeft' }"}],staticClass:"title black"},[e._v("我是郑伟")])])]},proxy:!0},{key:"page27",fn:function(){return[a("div",{},[a("p",{directives:[{name:"animate",rawName:"v-animate",value:{name:"bounceIn"},expression:"{ name: 'bounceIn' }"}],staticClass:"title",staticStyle:{"margin-top":"160px","margin-left":"20px"}},[e._v("2021，加油！")])])]},proxy:!0}])}),a("music")],1)},i=[],s=a("da54"),c=a.n(s),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("audio",{attrs:{id:"audio",autoplay:"autoplay",muted:""}},[n("source",{attrs:{src:e.music,type:"audio/mp3"}})]),n("div",{staticClass:"wrapper"},[n("div",{staticClass:"cdWrapper",attrs:{id:"playControl"}},[n("img",{staticClass:"cd",attrs:{alt:"cd",src:a("9823")}}),n("svg",{staticClass:"icon"},[n("use",{staticClass:"icon-pause",attrs:{"xlink:href":"#icon-pause"}}),n("use",{staticClass:"icon-play",attrs:{"xlink:href":"#icon-play"}})])]),n("canvas",{attrs:{id:"canvas"}})]),n("svg",{staticStyle:{display:"none"},attrs:{xmlns:"http://www.w3.org/2000/svg",hidden:"","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[n("defs",[n("symbol",{attrs:{id:"icon-play",viewBox:"0 0 32 32"}},[n("title",[e._v("icon-play")]),n("path",{attrs:{d:"M21.216 15.168l-7.616-5.088c-0.672-0.416-1.504 0.032-1.504 0.832v10.176c0 0.8 0.896 1.248 1.504 0.832l7.616-5.088c0.576-0.416 0.576-1.248 0-1.664z"}}),n("path",{attrs:{d:"M13.056 22.4c-0.224 0-0.416-0.064-0.608-0.16-0.448-0.224-0.704-0.672-0.704-1.152v-10.176c0-0.48 0.256-0.928 0.672-1.152s0.928-0.224 1.344 0.064l7.616 5.088c0.384 0.256 0.608 0.672 0.608 1.088s-0.224 0.864-0.608 1.088l-7.616 5.088c-0.192 0.16-0.448 0.224-0.704 0.224zM13.056 10.272c-0.096 0-0.224 0.032-0.32 0.064-0.224 0.128-0.352 0.32-0.352 0.576v10.176c0 0.256 0.128 0.48 0.352 0.576 0.224 0.128 0.448 0.096 0.64-0.032l7.616-5.088c0.192-0.128 0.288-0.32 0.288-0.544s-0.096-0.416-0.288-0.544l-7.584-5.088c-0.096-0.064-0.224-0.096-0.352-0.096z"}}),n("path",{attrs:{d:"M16 0.32c-8.64 0-15.68 7.040-15.68 15.68s7.040 15.68 15.68 15.68 15.68-7.040 15.68-15.68-7.040-15.68-15.68-15.68zM16 29.216c-7.296 0-13.216-5.92-13.216-13.216s5.92-13.216 13.216-13.216 13.216 5.92 13.216 13.216-5.92 13.216-13.216 13.216z"}}),n("path",{attrs:{d:"M16 32c-8.832 0-16-7.168-16-16s7.168-16 16-16 16 7.168 16 16-7.168 16-16 16zM16 0.672c-8.448 0-15.328 6.88-15.328 15.328s6.88 15.328 15.328 15.328c8.448 0 15.328-6.88 15.328-15.328s-6.88-15.328-15.328-15.328zM16 29.568c-7.488 0-13.568-6.080-13.568-13.568s6.080-13.568 13.568-13.568c7.488 0 13.568 6.080 13.568 13.568s-6.080 13.568-13.568 13.568zM16 3.104c-7.104 0-12.896 5.792-12.896 12.896s5.792 12.896 12.896 12.896c7.104 0 12.896-5.792 12.896-12.896s-5.792-12.896-12.896-12.896z"}})]),n("symbol",{attrs:{id:"icon-pause",viewBox:"0 0 32 32"}},[n("title",[e._v("icon-pause")]),n("path",{attrs:{d:"M16 0.32c-8.64 0-15.68 7.040-15.68 15.68s7.040 15.68 15.68 15.68 15.68-7.040 15.68-15.68-7.040-15.68-15.68-15.68zM16 29.216c-7.296 0-13.216-5.92-13.216-13.216s5.92-13.216 13.216-13.216 13.216 5.92 13.216 13.216-5.92 13.216-13.216 13.216z"}}),n("path",{attrs:{d:"M16 32c-8.832 0-16-7.168-16-16s7.168-16 16-16 16 7.168 16 16-7.168 16-16 16zM16 0.672c-8.448 0-15.328 6.88-15.328 15.328s6.88 15.328 15.328 15.328c8.448 0 15.328-6.88 15.328-15.328s-6.88-15.328-15.328-15.328zM16 29.568c-7.488 0-13.568-6.080-13.568-13.568s6.080-13.568 13.568-13.568c7.488 0 13.568 6.080 13.568 13.568s-6.080 13.568-13.568 13.568zM16 3.104c-7.104 0-12.896 5.792-12.896 12.896s5.792 12.896 12.896 12.896c7.104 0 12.896-5.792 12.896-12.896s-5.792-12.896-12.896-12.896z"}}),n("path",{attrs:{d:"M12.16 22.336v0c-0.896 0-1.6-0.704-1.6-1.6v-9.472c0-0.896 0.704-1.6 1.6-1.6v0c0.896 0 1.6 0.704 1.6 1.6v9.504c0 0.864-0.704 1.568-1.6 1.568z"}}),n("path",{attrs:{d:"M19.84 22.336v0c-0.896 0-1.6-0.704-1.6-1.6v-9.472c0-0.896 0.704-1.6 1.6-1.6v0c0.896 0 1.6 0.704 1.6 1.6v9.504c0 0.864-0.704 1.568-1.6 1.568z"}})])])])])},o=[];a("4160"),a("159b");a("16ed");var p={name:"",components:{},data:function(){return{music:"https://img.tukuppt.com/newpreview_music/08/99/49/5c897788e421b53181.mp3"}},mounted:function(){this.init()},methods:{init:function(){var e={playing:!1,toggle:function(){this.playing=!this.playing},init:function(){return this.ele=document.querySelector("#canvas"),this.resize(),this.ctx=this.ele.getContext("2d"),this.ctx},onResize:function(e){this.resizeCallback=e},resize:function(){this.width=this.ele.width=2*window.innerWidth,this.height=this.ele.height=2*window.innerHeight,this.ele.style.width=.5*this.ele.width+"px",this.ele.style.height=.5*this.ele.height+"px",this.ctx=this.ele.getContext("2d"),this.ctx.scale(.32,.32),this.resizeCallback&&this.resizeCallback()},run:function(e){var t=this;requestAnimationFrame((function(){t.run(e)})),this.playing&&e(this.ctx)}},t=(e.init(),[]),a=function(){t=[]},n=0;e.run((function(a){a.clearRect(0,0,e.width,e.height),n+=.05,t.forEach((function(e){e.draw(n)}))})),e.onResize((function(){a()}));var i=document.querySelector("#playControl"),s=document.querySelector("#audio");function c(){s.paused?s.play():s.pause()}function r(){i.classList.toggle("playing"),c(),e.toggle()}function o(){wx.config({debug:!1,appId:"",timestamp:1,nonceStr:"",signature:"",jsApiList:[]}),wx.ready((function(){r()}))}i.addEventListener("click",(function(){r()})),o()}}},u=p,m=(a("9cee"),a("2877")),l=Object(m["a"])(u,r,o,!1,null,"5438d3b4",null),v=l.exports,g=(a("dab1"),{name:"home",components:{MvFullPage:c.a,Music:v},data:function(){return{isV:!0,currentPage:1,bgArr:[{isBg:!0,src:a("c762")},{isBg:!0,src:a("6899")},{isBg:!0,src:a("2e14")},{isBg:!0,src:a("3dcc")},{isBg:!0,src:a("62f2")},{isBg:!0,src:a("9daf")},{isBg:!0,src:a("f13c")},{isBg:!0,src:a("4157")},{isBg:!0,src:a("1a46")},{isBg:!0,src:a("8bc2")},{isBg:!0,src:a("7aac")},{isBg:!0,src:a("0f77")},{isBg:!0,src:a("70bb")},{isBg:!0,src:a("38fc")},{isBg:!0,src:a("aad7")},{isBg:!0,src:a("8b4f")},{isBg:!0,src:a("9e2b")},{isBg:!0,src:a("b4a5")},{isBg:!0,src:a("736e")},{isBg:!0,src:a("e191")},{isBg:!0,src:a("f8e5")},{isBg:!0,src:a("e873")},{isBg:!0,src:a("c6a2")},{isBg:!0,src:a("ee16")},{isBg:!0,src:a("4cd9")},{isBg:!0,src:a("a75f")},{isBg:!0,src:a("1ee9")}]}}}),f=g,d=(a("423e"),Object(m["a"])(f,n,i,!1,null,"78a7b782",null));t["default"]=d.exports},"62f2":function(e,t,a){e.exports=a.p+"static/img/韩嘉亮.d575ed1c.jpg"},6899:function(e,t,a){e.exports=a.p+"static/img/安潇潇.536bb276.jpg"},"70bb":function(e,t,a){e.exports=a.p+"static/img/邢琳.b1639e5f.jpg"},"736e":function(e,t,a){e.exports=a.p+"static/img/张霞.04e139d3.jpg"},"7aac":function(e,t,a){e.exports=a.p+"static/img/宋华瑞.93693076.jpg"},"8b4f":function(e,t,a){e.exports=a.p+"static/img/张宁磊.90f5d1d2.jpg"},"8bc2":function(e,t,a){e.exports=a.p+"static/img/尚晓革.4e18a64f.jpg"},9823:function(e,t,a){e.exports=a.p+"static/img/cd2.350c1010.jpg"},"9cee":function(e,t,a){"use strict";var n=a("e1c5"),i=a.n(n);i.a},"9daf":function(e,t,a){e.exports=a.p+"static/img/胡涯.9fdf399e.jpg"},"9e2b":function(e,t,a){e.exports=a.p+"static/img/张硕.ec3eab1d.jpg"},a75f:function(e,t,a){e.exports=a.p+"static/img/郑伟.3bc0ed72.jpg"},aad7:function(e,t,a){e.exports=a.p+"static/img/杨明威.993aeafb.jpg"},b4a5:function(e,t,a){e.exports=a.p+"static/img/张桃瑜.467b0691.jpg"},c6a2:function(e,t,a){e.exports=a.p+"static/img/赵东旭.bcac356e.jpg"},c762:function(e,t,a){e.exports=a.p+"static/img/bg.6acc6b14.jpg"},dab1:function(e,t,a){},e191:function(e,t,a){e.exports=a.p+"static/img/张振昂.601e6691.jpg"},e1c5:function(e,t,a){},e873:function(e,t,a){e.exports=a.p+"static/img/张宗伟.2c45381d.jpg"},ee16:function(e,t,a){e.exports=a.p+"static/img/赵佳旺.b7b3568f.jpg"},f13c:function(e,t,a){e.exports=a.p+"static/img/黄可可.6a97c2bd.jpg"},f8e5:function(e,t,a){e.exports=a.p+"static/img/张重彬.44526266.jpg"}}]);