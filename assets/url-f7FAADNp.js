import{c as ht}from"./index-n4wKP1yw.js";var k={},rt={exports:{}};/*! https://mths.be/punycode v1.3.2 by @mathias */rt.exports;(function(t,n){(function(e){var c=n&&!n.nodeType&&n,i=t&&!t.nodeType&&t,l=typeof ht=="object"&&ht;(l.global===l||l.window===l||l.self===l)&&(e=l);var u,s=2147483647,p=36,m=1,v=26,T=38,g=700,f=72,C=128,B="-",w=/^xn--/,Z=/[^\x20-\x7E]/,h=/[\x2E\u3002\uFF0E\uFF61]/g,x={overflow:"Overflow: input needs wider integers to process","not-basic":"Illegal input >= 0x80 (not a basic code point)","invalid-input":"Invalid input"},q=p-m,y=Math.floor,O=String.fromCharCode,K;function I(r){throw RangeError(x[r])}function U(r,o){for(var a=r.length,d=[];a--;)d[a]=o(r[a]);return d}function $(r,o){var a=r.split("@"),d="";a.length>1&&(d=a[0]+"@",r=a[1]),r=r.replace(h,".");var b=r.split("."),F=U(b,o).join(".");return d+F}function W(r){for(var o=[],a=0,d=r.length,b,F;a<d;)b=r.charCodeAt(a++),b>=55296&&b<=56319&&a<d?(F=r.charCodeAt(a++),(F&64512)==56320?o.push(((b&1023)<<10)+(F&1023)+65536):(o.push(b),a--)):o.push(b);return o}function et(r){return U(r,function(o){var a="";return o>65535&&(o-=65536,a+=O(o>>>10&1023|55296),o=56320|o&1023),a+=O(o),a}).join("")}function _(r){return r-48<10?r-22:r-65<26?r-65:r-97<26?r-97:p}function X(r,o){return r+22+75*(r<26)-((o!=0)<<5)}function Y(r,o,a){var d=0;for(r=a?y(r/g):r>>1,r+=y(r/o);r>q*v>>1;d+=p)r=y(r/q);return y(d+(q+1)*r/(r+T))}function V(r){var o=[],a=r.length,d,b=0,F=C,A=f,R,N,L,z,j,P,D,G,J;for(R=r.lastIndexOf(B),R<0&&(R=0),N=0;N<R;++N)r.charCodeAt(N)>=128&&I("not-basic"),o.push(r.charCodeAt(N));for(L=R>0?R+1:0;L<a;){for(z=b,j=1,P=p;L>=a&&I("invalid-input"),D=_(r.charCodeAt(L++)),(D>=p||D>y((s-b)/j))&&I("overflow"),b+=D*j,G=P<=A?m:P>=A+v?v:P-A,!(D<G);P+=p)J=p-G,j>y(s/J)&&I("overflow"),j*=J;d=o.length+1,A=Y(b-z,d,z==0),y(b/d)>s-F&&I("overflow"),F+=y(b/d),b%=d,o.splice(b++,0,F)}return et(o)}function st(r){var o,a,d,b,F,A,R,N,L,z,j,P=[],D,G,J,nt;for(r=W(r),D=r.length,o=C,a=0,F=f,A=0;A<D;++A)j=r[A],j<128&&P.push(O(j));for(d=b=P.length,b&&P.push(B);d<D;){for(R=s,A=0;A<D;++A)j=r[A],j>=o&&j<R&&(R=j);for(G=d+1,R-o>y((s-a)/G)&&I("overflow"),a+=(R-o)*G,o=R,A=0;A<D;++A)if(j=r[A],j<o&&++a>s&&I("overflow"),j==o){for(N=a,L=p;z=L<=F?m:L>=F+v?v:L-F,!(N<z);L+=p)nt=N-z,J=p-z,P.push(O(X(z+nt%J,0))),N=y(nt/J);P.push(O(X(N,0))),F=Y(a,G,d==b),a=0,++d}++a,++o}return P.join("")}function lt(r){return $(r,function(o){return w.test(o)?V(o.slice(4).toLowerCase()):o})}function pt(r){return $(r,function(o){return Z.test(o)?"xn--"+st(o):o})}if(u={version:"1.3.2",ucs2:{decode:W,encode:et},decode:V,encode:st,toASCII:pt,toUnicode:lt},c&&i)if(t.exports==c)i.exports=u;else for(K in u)u.hasOwnProperty(K)&&(c[K]=u[K]);else e.punycode=u})(ht)})(rt,rt.exports);var mt=rt.exports,dt={isString:function(t){return typeof t=="string"},isObject:function(t){return typeof t=="object"&&t!==null},isNull:function(t){return t===null},isNullOrUndefined:function(t){return t==null}},Q={};function yt(t,n){return Object.prototype.hasOwnProperty.call(t,n)}var gt=function(t,n,e,c){n=n||"&",e=e||"=";var i={};if(typeof t!="string"||t.length===0)return i;var l=/\+/g;t=t.split(n);var u=1e3;c&&typeof c.maxKeys=="number"&&(u=c.maxKeys);var s=t.length;u>0&&s>u&&(s=u);for(var p=0;p<s;++p){var m=t[p].replace(l,"%20"),v=m.indexOf(e),T,g,f,C;v>=0?(T=m.substr(0,v),g=m.substr(v+1)):(T=m,g=""),f=decodeURIComponent(T),C=decodeURIComponent(g),yt(i,f)?Array.isArray(i[f])?i[f].push(C):i[f]=[i[f],C]:i[f]=C}return i},H=function(t){switch(typeof t){case"string":return t;case"boolean":return t?"true":"false";case"number":return isFinite(t)?t:"";default:return""}},xt=function(t,n,e,c){return n=n||"&",e=e||"=",t===null&&(t=void 0),typeof t=="object"?Object.keys(t).map(function(i){var l=encodeURIComponent(H(i))+e;return Array.isArray(t[i])?t[i].map(function(u){return l+encodeURIComponent(H(u))}).join(n):l+encodeURIComponent(H(t[i]))}).join(n):c?encodeURIComponent(H(c))+e+encodeURIComponent(H(t)):""};Q.decode=Q.parse=gt;Q.encode=Q.stringify=xt;var bt=mt,S=dt;k.parse=tt;k.resolve=Ut;k.resolveObject=Rt;k.format=qt;k.Url=M;function M(){this.protocol=null,this.slashes=null,this.auth=null,this.host=null,this.port=null,this.hostname=null,this.hash=null,this.search=null,this.query=null,this.pathname=null,this.path=null,this.href=null}var vt=/^([a-z0-9.+-]+:)/i,Ct=/:[0-9]*$/,Ot=/^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,At=["<",">",'"',"`"," ","\r",`
`,"	"],wt=["{","}","|","\\","^","`"].concat(At),ot=["'"].concat(wt),ft=["%","/","?",";","#"].concat(ot),ut=["/","?","#"],It=255,ct=/^[+a-z0-9A-Z_-]{0,63}$/,jt=/^([+a-z0-9A-Z_-]{0,63})(.*)$/,Ft={javascript:!0,"javascript:":!0},it={javascript:!0,"javascript:":!0},E={http:!0,https:!0,ftp:!0,gopher:!0,file:!0,"http:":!0,"https:":!0,"ftp:":!0,"gopher:":!0,"file:":!0},at=Q;function tt(t,n,e){if(t&&S.isObject(t)&&t instanceof M)return t;var c=new M;return c.parse(t,n,e),c}M.prototype.parse=function(t,n,e){if(!S.isString(t))throw new TypeError("Parameter 'url' must be a string, not "+typeof t);var c=t.indexOf("?"),i=c!==-1&&c<t.indexOf("#")?"?":"#",l=t.split(i),u=/\\/g;l[0]=l[0].replace(u,"/"),t=l.join(i);var s=t;if(s=s.trim(),!e&&t.split("#").length===1){var p=Ot.exec(s);if(p)return this.path=s,this.href=s,this.pathname=p[1],p[2]?(this.search=p[2],n?this.query=at.parse(this.search.substr(1)):this.query=this.search.substr(1)):n&&(this.search="",this.query={}),this}var m=vt.exec(s);if(m){m=m[0];var v=m.toLowerCase();this.protocol=v,s=s.substr(m.length)}if(e||m||s.match(/^\/\/[^@\/]+@[^@\/]+/)){var T=s.substr(0,2)==="//";T&&!(m&&it[m])&&(s=s.substr(2),this.slashes=!0)}if(!it[m]&&(T||m&&!E[m])){for(var g=-1,f=0;f<ut.length;f++){var C=s.indexOf(ut[f]);C!==-1&&(g===-1||C<g)&&(g=C)}var B,w;g===-1?w=s.lastIndexOf("@"):w=s.lastIndexOf("@",g),w!==-1&&(B=s.slice(0,w),s=s.slice(w+1),this.auth=decodeURIComponent(B)),g=-1;for(var f=0;f<ft.length;f++){var C=s.indexOf(ft[f]);C!==-1&&(g===-1||C<g)&&(g=C)}g===-1&&(g=s.length),this.host=s.slice(0,g),s=s.slice(g),this.parseHost(),this.hostname=this.hostname||"";var Z=this.hostname[0]==="["&&this.hostname[this.hostname.length-1]==="]";if(!Z)for(var h=this.hostname.split(/\./),f=0,x=h.length;f<x;f++){var q=h[f];if(q&&!q.match(ct)){for(var y="",O=0,K=q.length;O<K;O++)q.charCodeAt(O)>127?y+="x":y+=q[O];if(!y.match(ct)){var I=h.slice(0,f),U=h.slice(f+1),$=q.match(jt);$&&(I.push($[1]),U.unshift($[2])),U.length&&(s="/"+U.join(".")+s),this.hostname=I.join(".");break}}}this.hostname.length>It?this.hostname="":this.hostname=this.hostname.toLowerCase(),Z||(this.hostname=bt.toASCII(this.hostname));var W=this.port?":"+this.port:"",et=this.hostname||"";this.host=et+W,this.href+=this.host,Z&&(this.hostname=this.hostname.substr(1,this.hostname.length-2),s[0]!=="/"&&(s="/"+s))}if(!Ft[v])for(var f=0,x=ot.length;f<x;f++){var _=ot[f];if(s.indexOf(_)!==-1){var X=encodeURIComponent(_);X===_&&(X=escape(_)),s=s.split(_).join(X)}}var Y=s.indexOf("#");Y!==-1&&(this.hash=s.substr(Y),s=s.slice(0,Y));var V=s.indexOf("?");if(V!==-1?(this.search=s.substr(V),this.query=s.substr(V+1),n&&(this.query=at.parse(this.query)),s=s.slice(0,V)):n&&(this.search="",this.query={}),s&&(this.pathname=s),E[v]&&this.hostname&&!this.pathname&&(this.pathname="/"),this.pathname||this.search){var W=this.pathname||"",st=this.search||"";this.path=W+st}return this.href=this.format(),this};function qt(t){return S.isString(t)&&(t=tt(t)),t instanceof M?t.format():M.prototype.format.call(t)}M.prototype.format=function(){var t=this.auth||"";t&&(t=encodeURIComponent(t),t=t.replace(/%3A/i,":"),t+="@");var n=this.protocol||"",e=this.pathname||"",c=this.hash||"",i=!1,l="";this.host?i=t+this.host:this.hostname&&(i=t+(this.hostname.indexOf(":")===-1?this.hostname:"["+this.hostname+"]"),this.port&&(i+=":"+this.port)),this.query&&S.isObject(this.query)&&Object.keys(this.query).length&&(l=at.stringify(this.query));var u=this.search||l&&"?"+l||"";return n&&n.substr(-1)!==":"&&(n+=":"),this.slashes||(!n||E[n])&&i!==!1?(i="//"+(i||""),e&&e.charAt(0)!=="/"&&(e="/"+e)):i||(i=""),c&&c.charAt(0)!=="#"&&(c="#"+c),u&&u.charAt(0)!=="?"&&(u="?"+u),e=e.replace(/[?#]/g,function(s){return encodeURIComponent(s)}),u=u.replace("#","%23"),n+i+e+u+c};function Ut(t,n){return tt(t,!1,!0).resolve(n)}M.prototype.resolve=function(t){return this.resolveObject(tt(t,!1,!0)).format()};function Rt(t,n){return t?tt(t,!1,!0).resolveObject(n):n}M.prototype.resolveObject=function(t){if(S.isString(t)){var n=new M;n.parse(t,!1,!0),t=n}for(var e=new M,c=Object.keys(this),i=0;i<c.length;i++){var l=c[i];e[l]=this[l]}if(e.hash=t.hash,t.href==="")return e.href=e.format(),e;if(t.slashes&&!t.protocol){for(var u=Object.keys(t),s=0;s<u.length;s++){var p=u[s];p!=="protocol"&&(e[p]=t[p])}return E[e.protocol]&&e.hostname&&!e.pathname&&(e.path=e.pathname="/"),e.href=e.format(),e}if(t.protocol&&t.protocol!==e.protocol){if(!E[t.protocol]){for(var m=Object.keys(t),v=0;v<m.length;v++){var T=m[v];e[T]=t[T]}return e.href=e.format(),e}if(e.protocol=t.protocol,!t.host&&!it[t.protocol]){for(var x=(t.pathname||"").split("/");x.length&&!(t.host=x.shift()););t.host||(t.host=""),t.hostname||(t.hostname=""),x[0]!==""&&x.unshift(""),x.length<2&&x.unshift(""),e.pathname=x.join("/")}else e.pathname=t.pathname;if(e.search=t.search,e.query=t.query,e.host=t.host||"",e.auth=t.auth,e.hostname=t.hostname||t.host,e.port=t.port,e.pathname||e.search){var g=e.pathname||"",f=e.search||"";e.path=g+f}return e.slashes=e.slashes||t.slashes,e.href=e.format(),e}var C=e.pathname&&e.pathname.charAt(0)==="/",B=t.host||t.pathname&&t.pathname.charAt(0)==="/",w=B||C||e.host&&t.pathname,Z=w,h=e.pathname&&e.pathname.split("/")||[],x=t.pathname&&t.pathname.split("/")||[],q=e.protocol&&!E[e.protocol];if(q&&(e.hostname="",e.port=null,e.host&&(h[0]===""?h[0]=e.host:h.unshift(e.host)),e.host="",t.protocol&&(t.hostname=null,t.port=null,t.host&&(x[0]===""?x[0]=t.host:x.unshift(t.host)),t.host=null),w=w&&(x[0]===""||h[0]==="")),B)e.host=t.host||t.host===""?t.host:e.host,e.hostname=t.hostname||t.hostname===""?t.hostname:e.hostname,e.search=t.search,e.query=t.query,h=x;else if(x.length)h||(h=[]),h.pop(),h=h.concat(x),e.search=t.search,e.query=t.query;else if(!S.isNullOrUndefined(t.search)){if(q){e.hostname=e.host=h.shift();var y=e.host&&e.host.indexOf("@")>0?e.host.split("@"):!1;y&&(e.auth=y.shift(),e.host=e.hostname=y.shift())}return e.search=t.search,e.query=t.query,(!S.isNull(e.pathname)||!S.isNull(e.search))&&(e.path=(e.pathname?e.pathname:"")+(e.search?e.search:"")),e.href=e.format(),e}if(!h.length)return e.pathname=null,e.search?e.path="/"+e.search:e.path=null,e.href=e.format(),e;for(var O=h.slice(-1)[0],K=(e.host||t.host||h.length>1)&&(O==="."||O==="..")||O==="",I=0,U=h.length;U>=0;U--)O=h[U],O==="."?h.splice(U,1):O===".."?(h.splice(U,1),I++):I&&(h.splice(U,1),I--);if(!w&&!Z)for(;I--;I)h.unshift("..");w&&h[0]!==""&&(!h[0]||h[0].charAt(0)!=="/")&&h.unshift(""),K&&h.join("/").substr(-1)!=="/"&&h.push("");var $=h[0]===""||h[0]&&h[0].charAt(0)==="/";if(q){e.hostname=e.host=$?"":h.length?h.shift():"";var y=e.host&&e.host.indexOf("@")>0?e.host.split("@"):!1;y&&(e.auth=y.shift(),e.host=e.hostname=y.shift())}return w=w||e.host&&h.length,w&&!$&&h.unshift(""),h.length?e.pathname=h.join("/"):(e.pathname=null,e.path=null),(!S.isNull(e.pathname)||!S.isNull(e.search))&&(e.path=(e.pathname?e.pathname:"")+(e.search?e.search:"")),e.auth=t.auth||e.auth,e.slashes=e.slashes||t.slashes,e.href=e.format(),e};M.prototype.parseHost=function(){var t=this.host,n=Ct.exec(t);n&&(n=n[0],n!==":"&&(this.port=n.substr(1)),t=t.substr(0,t.length-n.length)),t&&(this.hostname=t)};export{k as u};
