!function(r,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var n=t();for(var e in n)("object"==typeof exports?exports:r)[e]=n[e]}}(this,function(){return function(r){function t(e){if(n[e])return n[e].exports;var o=n[e]={exports:{},id:e,loaded:!1};return r[e].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};return t.m=r,t.c=n,t.p="",t(0)}({0:function(r,t,n){r.exports=n(45)},19:function(r,t){"use strict";r.exports=function(){function r(r,t,n){n=n||new Float32Array(16);var e=t[0],o=t[1],i=t[2],a=t[3],u=t[4],f=t[5],c=t[6],s=t[7],l=t[8],m=t[9],d=t[10],v=t[11],A=t[12],E=t[13],y=t[14],h=t[15],p=r[0],g=r[1],_=r[2],b=r[3],x=r[4],F=r[5],T=r[6],w=r[7],R=r[8],M=r[9],S=r[10],C=r[11],I=r[12],L=r[13],O=r[14],U=r[15];return n[0]=e*p+o*x+i*R+a*I,n[1]=e*g+o*F+i*M+a*L,n[2]=e*_+o*T+i*S+a*O,n[3]=e*b+o*w+i*C+a*U,n[4]=u*p+f*x+c*R+s*I,n[5]=u*g+f*F+c*M+s*L,n[6]=u*_+f*T+c*S+s*O,n[7]=u*b+f*w+c*C+s*U,n[8]=l*p+m*x+d*R+v*I,n[9]=l*g+m*F+d*M+v*L,n[10]=l*_+m*T+d*S+v*O,n[11]=l*b+m*w+d*C+v*U,n[12]=A*p+E*x+y*R+h*I,n[13]=A*g+E*F+y*M+h*L,n[14]=A*_+E*T+y*S+h*O,n[15]=A*b+E*w+y*C+h*U,n}function t(r,t,n){return n=n||new Float32Array(3),n[0]=r[0]+t[0],n[1]=r[1]+t[1],n[2]=r[2]+t[2],n}function n(r,t,n){return n=n||new Float32Array(3),n[0]=r[0]-t[0],n[1]=r[1]-t[1],n[2]=r[2]-t[2],n}function e(r,t){t=t||new Float32Array(3);var n=Math.sqrt(r[0]*r[0]+r[1]*r[1]+r[2]*r[2]);return n>1e-5&&(t[0]=r[0]/n,t[1]=r[1]/n,t[2]=r[2]/n),t}function o(r,t,n){return n=n||new Float32Array(3),n[0]=r[1]*t[2]-r[2]*t[1],n[1]=r[2]*t[0]-r[0]*t[2],n[2]=r[0]*t[1]-r[1]*t[0],n}function i(r,t){return r[0]*t[0]+r[1]*t[1]+r[2]*t[2]}function a(r,t){var n=r[0]-t[0],e=r[1]-t[1],o=r[2]-t[2];return n*n+e*e+o*o}function u(r,t){return Math.sqrt(a(r,t))}function f(r){return r=r||new Float32Array(16),r[0]=1,r[1]=0,r[2]=0,r[3]=0,r[4]=0,r[5]=1,r[6]=0,r[7]=0,r[8]=0,r[9]=0,r[10]=1,r[11]=0,r[12]=0,r[13]=0,r[14]=0,r[15]=1,r}function c(r,t){return t=t||new Float32Array(16),t[0]=r[0],t[1]=r[4],t[2]=r[8],t[3]=r[12],t[4]=r[1],t[5]=r[5],t[6]=r[9],t[7]=r[13],t[8]=r[2],t[9]=r[6],t[10]=r[10],t[11]=r[14],t[12]=r[3],t[13]=r[7],t[14]=r[11],t[15]=r[15],t}function s(r,t,i,a){a=a||new Float32Array(16);var u=e(n(r,t)),f=e(o(i,u)),c=e(o(u,f));return a[0]=f[0],a[1]=f[1],a[2]=f[2],a[3]=0,a[4]=c[0],a[5]=c[1],a[6]=c[2],a[7]=0,a[8]=u[0],a[9]=u[1],a[10]=u[2],a[11]=0,a[12]=r[0],a[13]=r[1],a[14]=r[2],a[15]=1,a}function l(r,t,n,e,o){o=o||new Float32Array(16);var i=Math.tan(.5*Math.PI-.5*r),a=1/(n-e);return o[0]=i/t,o[1]=0,o[2]=0,o[3]=0,o[4]=0,o[5]=i,o[6]=0,o[7]=0,o[8]=0,o[9]=0,o[10]=(n+e)*a,o[11]=-1,o[12]=0,o[13]=0,o[14]=n*e*a*2,o[15]=0,o}function m(r,t,n,e,o,i,a){return a=a||new Float32Array(16),a[0]=2/(t-r),a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=2/(e-n),a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=2/(o-i),a[11]=0,a[12]=(r+t)/(r-t),a[13]=(n+e)/(n-e),a[14]=(o+i)/(o-i),a[15]=1,a}function d(r,t,n,e,o,i){var a=t-r,u=e-n,f=i-o;return dst[0]=2*o/a,dst[1]=0,dst[2]=0,dst[3]=0,dst[4]=0,dst[5]=2*o/u,dst[6]=0,dst[7]=0,dst[8]=(r+t)/a,dst[9]=(e+n)/u,dst[10]=-(i+o)/f,dst[11]=-1,dst[12]=0,dst[13]=0,dst[14]=-2*o*i/f,dst[15]=0,dst}function v(r,t,n,e){return e=e||new Float32Array(16),e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=1,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=1,e[11]=0,e[12]=r,e[13]=t,e[14]=n,e[15]=1,e}function A(r,t,n,e,o){o=o||new Float32Array(16);var i=r[0],a=r[1],u=r[2],f=r[3],c=r[4],s=r[5],l=r[6],m=r[7],d=r[8],v=r[9],A=r[10],E=r[11],y=r[12],h=r[13],p=r[14],g=r[15];return r!==o&&(o[0]=i,o[1]=a,o[2]=u,o[3]=f,o[4]=c,o[5]=s,o[6]=l,o[7]=m,o[8]=d,o[9]=v,o[10]=A,o[11]=E),o[12]=i*t+c*n+d*e+y,o[13]=a*t+s*n+v*e+h,o[14]=u*t+l*n+A*e+p,o[15]=f*t+m*n+E*e+g,o}function E(r,t){t=t||new Float32Array(16);var n=Math.cos(r),e=Math.sin(r);return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=n,t[6]=e,t[7]=0,t[8]=0,t[9]=-e,t[10]=n,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function y(r,t,n){n=n||new Float32Array(16);var e=r[4],o=r[5],i=r[6],a=r[7],u=r[8],f=r[9],c=r[10],s=r[11],l=Math.cos(t),m=Math.sin(t);return n[4]=l*e+m*u,n[5]=l*o+m*f,n[6]=l*i+m*c,n[7]=l*a+m*s,n[8]=l*u-m*e,n[9]=l*f-m*o,n[10]=l*c-m*i,n[11]=l*s-m*a,r!==n&&(n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15]),n}function h(r,t){t=t||new Float32Array(16);var n=Math.cos(r),e=Math.sin(r);return t[0]=n,t[1]=0,t[2]=-e,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=e,t[9]=0,t[10]=n,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function p(r,t,n){n=n||new Float32Array(16);var e=r[0],o=r[1],i=r[2],a=r[3],u=r[8],f=r[9],c=r[10],s=r[11],l=Math.cos(t),m=Math.sin(t);return n[0]=l*e-m*u,n[1]=l*o-m*f,n[2]=l*i-m*c,n[3]=l*a-m*s,n[8]=l*u+m*e,n[9]=l*f+m*o,n[10]=l*c+m*i,n[11]=l*s+m*a,r!==n&&(n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15]),n}function g(r,t){t=t||new Float32Array(16);var n=Math.cos(r),e=Math.sin(r);return t[0]=n,t[1]=e,t[2]=0,t[3]=0,t[4]=-e,t[5]=n,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function _(r,t,n){n=n||new Float32Array(16);var e=r[0],o=r[1],i=r[2],a=r[3],u=r[4],f=r[5],c=r[6],s=r[7],l=Math.cos(t),m=Math.sin(t);return n[0]=l*e+m*u,n[1]=l*o+m*f,n[2]=l*i+m*c,n[3]=l*a+m*s,n[4]=l*u-m*e,n[5]=l*f-m*o,n[6]=l*c-m*i,n[7]=l*s-m*a,r!==n&&(n[8]=r[8],n[9]=r[9],n[10]=r[10],n[11]=r[11],n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15]),n}function b(r,t,n){n=n||new Float32Array(16);var e=r[0],o=r[1],i=r[2],a=Math.sqrt(e*e+o*o+i*i);e/=a,o/=a,i/=a;var u=e*e,f=o*o,c=i*i,s=Math.cos(t),l=Math.sin(t),m=1-s;return n[0]=u+(1-u)*s,n[1]=e*o*m+i*l,n[2]=e*i*m-o*l,n[3]=0,n[4]=e*o*m-i*l,n[5]=f+(1-f)*s,n[6]=o*i*m+e*l,n[7]=0,n[8]=e*i*m+o*l,n[9]=o*i*m-e*l,n[10]=c+(1-c)*s,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n}function x(r,t,n,e){e=e||new Float32Array(16);var o=t[0],i=t[1],a=t[2],u=Math.sqrt(o*o+i*i+a*a);o/=u,i/=u,a/=u;var f=o*o,c=i*i,s=a*a,l=Math.cos(n),m=Math.sin(n),d=1-l,v=f+(1-f)*l,A=o*i*d+a*m,E=o*a*d-i*m,y=o*i*d-a*m,h=c+(1-c)*l,p=i*a*d+o*m,g=o*a*d+i*m,_=i*a*d-o*m,b=s+(1-s)*l,x=r[0],F=r[1],T=r[2],w=r[3],R=r[4],M=r[5],S=r[6],C=r[7],I=r[8],L=r[9],O=r[10],U=r[11];return e[0]=v*x+A*R+E*I,e[1]=v*F+A*M+E*L,e[2]=v*T+A*S+E*O,e[3]=v*w+A*C+E*U,e[4]=y*x+h*R+p*I,e[5]=y*F+h*M+p*L,e[6]=y*T+h*S+p*O,e[7]=y*w+h*C+p*U,e[8]=g*x+_*R+b*I,e[9]=g*F+_*M+b*L,e[10]=g*T+_*S+b*O,e[11]=g*w+_*C+b*U,r!==e&&(e[12]=r[12],e[13]=r[13],e[14]=r[14],e[15]=r[15]),e}function F(r,t,n,e){return e=e||new Float32Array(16),e[0]=r,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=t,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=n,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}function T(r,t,n,e,o){return o=o||new Float32Array(16),o[0]=t*r[0],o[1]=t*r[1],o[2]=t*r[2],o[3]=t*r[3],o[4]=n*r[4],o[5]=n*r[5],o[6]=n*r[6],o[7]=n*r[7],o[8]=e*r[8],o[9]=e*r[9],o[10]=e*r[10],o[11]=e*r[11],r!==o&&(o[12]=r[12],o[13]=r[13],o[14]=r[14],o[15]=r[15]),o}function w(r,t){t=t||new Float32Array(16);var n=r[0],e=r[1],o=r[2],i=r[3],a=r[4],u=r[5],f=r[6],c=r[7],s=r[8],l=r[9],m=r[10],d=r[11],v=r[12],A=r[13],E=r[14],y=r[15],h=m*y,p=E*d,g=f*y,_=E*c,b=f*d,x=m*c,F=o*y,T=E*i,w=o*d,R=m*i,M=o*c,S=f*i,C=s*A,I=v*l,L=a*A,O=v*u,U=a*l,B=s*u,P=n*A,N=v*e,V=n*l,D=s*e,k=n*u,H=a*e,j=h*u+_*l+b*A-(p*u+g*l+x*A),z=p*e+F*l+R*A-(h*e+T*l+w*A),Y=g*e+T*u+M*A-(_*e+F*u+S*A),G=x*e+w*u+S*l-(b*e+R*u+M*l),X=1/(n*j+a*z+s*Y+v*G);return t[0]=X*j,t[1]=X*z,t[2]=X*Y,t[3]=X*G,t[4]=X*(p*a+g*s+x*v-(h*a+_*s+b*v)),t[5]=X*(h*n+T*s+w*v-(p*n+F*s+R*v)),t[6]=X*(_*n+F*a+S*v-(g*n+T*a+M*v)),t[7]=X*(b*n+R*a+M*s-(x*n+w*a+S*s)),t[8]=X*(C*c+O*d+U*y-(I*c+L*d+B*y)),t[9]=X*(I*i+P*d+D*y-(C*i+N*d+V*y)),t[10]=X*(L*i+N*c+k*y-(O*i+P*c+H*y)),t[11]=X*(B*i+V*c+H*d-(U*i+D*c+k*d)),t[12]=X*(L*m+B*E+I*f-(U*E+C*f+O*m)),t[13]=X*(V*E+C*o+N*m-(P*m+D*E+I*o)),t[14]=X*(P*f+H*E+O*o-(k*E+L*o+N*f)),t[15]=X*(k*m+U*o+D*f-(V*f+H*m+B*o)),t}function R(r,t,n){n=n||new Float32Array(4);for(var e=0;4>e;++e){n[e]=0;for(var o=0;4>o;++o)n[e]+=t[o]*r[4*o+e]}return n}function M(r,t,n){n=n||new Float32Array(3);var e=t[0],o=t[1],i=t[2],a=e*r[3]+o*r[7]+i*r[11]+r[15];return n[0]=(e*r[0]+o*r[4]+i*r[8]+r[12])/a,n[1]=(e*r[1]+o*r[5]+i*r[9]+r[13])/a,n[2]=(e*r[2]+o*r[6]+i*r[10]+r[14])/a,n}function S(r,t,n){n=n||new Float32Array(3);var e=t[0],o=t[1],i=t[2];return n[0]=e*r[0]+o*r[4]+i*r[8],n[1]=e*r[1]+o*r[5]+i*r[9],n[2]=e*r[2]+o*r[6]+i*r[10],n}function C(r,t,n){n=n||new Float32Array(3);var e=w(r),o=t[0],i=t[1],a=t[2];return n[0]=o*e[0]+i*e[1]+a*e[2],n[1]=o*e[4]+i*e[5]+a*e[6],n[2]=o*e[8]+i*e[9]+a*e[10],n}function I(r,t){return t=t||new Float32Array(16),t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],t}return{copy:I,lookAt:s,addVectors:t,subtractVectors:n,distance:u,distanceSq:a,normalize:e,cross:o,dot:i,identity:f,transpose:c,orthographic:m,frustum:d,perspective:l,translation:v,translate:A,xRotation:E,yRotation:h,zRotation:g,xRotate:y,yRotate:p,zRotate:_,axisRotation:b,axisRotate:x,scaling:F,scale:T,multiply:r,inverse:w,transformVector:R,transformPoint:M,transformDirection:S,transformNormal:C}}},20:function(r,t){"use strict";r.exports=function(){function r(r){return r=r||U,r!==r.top}function t(r){U.console&&(U.console.error?U.console.error(r):U.console.log&&U.console.log(r))}function n(r,n,e,o){var i=o||t,a=r.createShader(e);r.shaderSource(a,n),r.compileShader(a);var u=r.getShaderParameter(a,r.COMPILE_STATUS);if(!u){var f=r.getShaderInfoLog(a);return i("*** Error compiling shader '"+a+"':"+f),r.deleteShader(a),null}return a}function e(r,n,e,o,i){var a=i||t,u=r.createProgram();n.forEach(function(t){r.attachShader(u,t)}),e&&e.forEach(function(t,n){r.bindAttribLocation(u,o?o[n]:n,t)}),r.linkProgram(u);var f=r.getProgramParameter(u,r.LINK_STATUS);if(!f){var c=r.getProgramInfoLog(u);return a("Error in program linking:"+c),r.deleteProgram(u),null}return u}function o(r,t,e,o){var i,a="",u=document.getElementById(t);if(!u)throw"*** Error: unknown script element"+t;if(a=u.text,!e)if("x-shader/x-vertex"===u.type)i=r.VERTEX_SHADER;else if("x-shader/x-fragment"===u.type)i=r.FRAGMENT_SHADER;else if(i!==r.VERTEX_SHADER&&i!==r.FRAGMENT_SHADER)throw"*** Error: unknown shader type";return n(r,a,e?e:i,o)}function i(r,t,n,i,a){for(var u=[],f=0;t.length>f;++f)u.push(o(r,t[f],r[B[f]],a));return e(r,u,n,i,a)}function a(r,t,o,i,a){for(var u=[],f=0;t.length>f;++f)u.push(n(r,t[f],r[B[f]],a));return e(r,u,o,i,a)}function u(r,t){return t===r.SAMPLER_2D?r.TEXTURE_2D:t===r.SAMPLER_CUBE?r.TEXTURE_CUBE_MAP:void 0}function f(r,t){function n(t,n){var o=r.getUniformLocation(t,n.name),i=n.type,a=n.size>1&&"[0]"===n.name.substr(-3);if(i===r.FLOAT&&a)return function(t){r.uniform1fv(o,t)};if(i===r.FLOAT)return function(t){r.uniform1f(o,t)};if(i===r.FLOAT_VEC2)return function(t){r.uniform2fv(o,t)};if(i===r.FLOAT_VEC3)return function(t){r.uniform3fv(o,t)};if(i===r.FLOAT_VEC4)return function(t){r.uniform4fv(o,t)};if(i===r.INT&&a)return function(t){r.uniform1iv(o,t)};if(i===r.INT)return function(t){r.uniform1i(o,t)};if(i===r.INT_VEC2)return function(t){r.uniform2iv(o,t)};if(i===r.INT_VEC3)return function(t){r.uniform3iv(o,t)};if(i===r.INT_VEC4)return function(t){r.uniform4iv(o,t)};if(i===r.BOOL)return function(t){r.uniform1iv(o,t)};if(i===r.BOOL_VEC2)return function(t){r.uniform2iv(o,t)};if(i===r.BOOL_VEC3)return function(t){r.uniform3iv(o,t)};if(i===r.BOOL_VEC4)return function(t){r.uniform4iv(o,t)};if(i===r.FLOAT_MAT2)return function(t){r.uniformMatrix2fv(o,!1,t)};if(i===r.FLOAT_MAT3)return function(t){r.uniformMatrix3fv(o,!1,t)};if(i===r.FLOAT_MAT4)return function(t){r.uniformMatrix4fv(o,!1,t)};if((i===r.SAMPLER_2D||i===r.SAMPLER_CUBE)&&a){for(var f=[],c=0;c<info.size;++c)f.push(e++);return function(t,n){return function(e){r.uniform1iv(o,n),e.forEach(function(e,o){r.activeTexture(r.TEXTURE0+n[o]),r.bindTexture(t,e)})}}(u(r,i),f)}if(i===r.SAMPLER_2D||i===r.SAMPLER_CUBE)return function(t,n){return function(e){r.uniform1i(o,n),r.activeTexture(r.TEXTURE0+n),r.bindTexture(t,e)}}(u(r,i),e++);throw"unknown type: 0x"+i.toString(16)}for(var e=0,o={},i=r.getProgramParameter(t,r.ACTIVE_UNIFORMS),a=0;i>a;++a){var f=r.getActiveUniform(t,a);if(!f)break;var c=f.name;"[0]"===c.substr(-3)&&(c=c.substr(0,c.length-3));var s=n(t,f);o[c]=s}return o}function c(r,t){r=r.uniformSetters||r,Object.keys(t).forEach(function(n){var e=r[n];e&&e(t[n])})}function s(r,t){function n(t){return function(n){r.bindBuffer(r.ARRAY_BUFFER,n.buffer),r.enableVertexAttribArray(t),r.vertexAttribPointer(t,n.numComponents||n.size,n.type||r.FLOAT,n.normalize||!1,n.stride||0,n.offset||0)}}for(var e={},o=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES),i=0;o>i;++i){var a=r.getActiveAttrib(t,i);if(!a)break;var u=r.getAttribLocation(t,a.name);e[a.name]=n(u)}return e}function l(r,t){r=r.attribSetters||r,Object.keys(t).forEach(function(n){var e=r[n];e&&e(t[n])})}function m(r,t,n,e){var o=r.createVertexArray();return r.bindVertexArray(o),l(t,n),e&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e),r.bindVertexArray(null),o}function d(r,t,n){return m(r,t.attribSetters||t,n.attribs,n.indices)}function v(r,t,n,e,o){t=t.map(function(r){var t=document.getElementById(r);return t?t.text:r});var i=webglUtils.createProgramFromSources(r,t,n,e,o);if(!i)return null;var a=f(r,i),u=s(r,i);return{program:i,uniformSetters:a,attribSetters:u}}function A(r,t,n){l(t,n.attribs),n.indices&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,n.indices)}function E(r,t){for(var n=0;P.length>n;++n){var e=P[n]+t,o=r.getExtension(e);if(o)return o}}function y(r,t){t=t||1;var n=r.clientWidth*t|0,e=r.clientHeight*t|0;return(r.width!==n||r.height!==e)&&(r.width=n,r.height=e,!0)}function h(r,t){var n=0;return r.push=function(){for(var t=0;arguments.length>t;++t){var e=arguments[t];if(e instanceof Array||e.buffer&&e.buffer instanceof ArrayBuffer)for(var o=0;e.length>o;++o)r[n++]=e[o];else r[n++]=e}},r.reset=function(r){n=r||0},r.numComponents=t,Object.defineProperty(r,"numElements",{get:function(){return this.length/this.numComponents|0}}),r}function p(r,t,n){var e=n||Float32Array;return h(new e(r*t),r)}function g(r,t,n,e){n=n||r.ARRAY_BUFFER;var o=r.createBuffer();return r.bindBuffer(n,o),r.bufferData(n,t,e||r.STATIC_DRAW),o}function _(r){return"indices"!==r}function b(r){var t={};return Object.keys(r).filter(_).forEach(function(r){t["a_"+r]=r}),t}function x(r,t){if(t instanceof Int8Array)return r.BYTE;if(t instanceof Uint8Array)return r.UNSIGNED_BYTE;if(t instanceof Int16Array)return r.SHORT;if(t instanceof Uint16Array)return r.UNSIGNED_SHORT;if(t instanceof Int32Array)return r.INT;if(t instanceof Uint32Array)return r.UNSIGNED_INT;if(t instanceof Float32Array)return r.FLOAT;throw"unsupported typed array type"}function F(r){return r instanceof Int8Array||r instanceof Uint8Array}function T(r){return r.buffer&&r.buffer instanceof ArrayBuffer}function w(r,t){var n;if(n=r.indexOf("coord")<0?r.indexOf("color")<0?3:4:2,t%n>0)throw"can not guess numComponents. You should specify it.";return n}function R(r,t){if(T(r))return r;Array.isArray(r)&&(r={data:r}),r.numComponents||(r.numComponents=w(t,r.length));var n=r.type;n||"indices"===t&&(n=Uint16Array);var e=p(r.numComponents,r.data.length/r.numComponents|0,n);return e.push(r.data),e}function M(r,t,n){var e=n||b(t),o={};return Object.keys(e).forEach(function(n){var i=e[n],a=R(t[i],i);o[n]={buffer:g(r,a),numComponents:a.numComponents||w(i),type:x(r,a),normalize:F(a)}}),o}function S(r){var t=Object.keys(r)[0],n=r[t];return T(n)?n.numElements:n.data.length/n.numComponents}function C(r,t,n){var e={attribs:M(r,t,n)},o=t.indices;return o?(o=R(o,"indices"),e.indices=g(r,o,r.ELEMENT_ARRAY_BUFFER),e.numElements=o.length):e.numElements=S(t),e}function I(r,t){var n={};return Object.keys(t).forEach(function(e){var o="indices"===e?r.ELEMENT_ARRAY_BUFFER:r.ARRAY_BUFFER,i=R(t[e],name);n[e]=g(r,i,o)}),t.indices?n.numElements=t.indices.length:t.position&&(n.numElements=t.position.length/3),n}function L(r,t,n,e,o){var i=t.indices;n=void 0===n?r.TRIANGLES:n;var a=void 0===e?t.numElements:e;o=void 0===o?o:0,i?r.drawElements(n,a,r.UNSIGNED_SHORT,o):r.drawArrays(n,o,a)}function O(r,t){var n=null,e=null;t.forEach(function(t){var o=t.programInfo,i=t.bufferInfo,a=!1;o!==n&&(n=o,r.useProgram(o.program),a=!0),(a||i!==e)&&(e=i,A(r,o.attribSetters,i)),c(o.uniformSetters,t.uniforms),L(r,i)})}var U=this||window;r()||(console.log("%c%s","color:blue;font-weight:bold;","for more about webgl-utils.js see:"),console.log("%c%s","color:blue;font-weight:bold;","http://webglfundamentals.org/webgl/lessons/webgl-boilerplate.html"));var B=["VERTEX_SHADER","FRAGMENT_SHADER"],P=["","MOZ_","OP_","WEBKIT_"],N=!!document.documentMode,V=!N&&!!window.StyleMedia;return V&&(HTMLCanvasElement.prototype.getContext=function(r){return function(){var t=arguments,n=t[0];return"webgl"===n&&(t=[].slice.call(arguments),t[0]="experimental-webgl"),r.apply(this,t)}}(HTMLCanvasElement.prototype.getContext)),{createAugmentedTypedArray:p,createAttribsFromArrays:M,createBuffersFromArrays:I,createBufferInfoFromArrays:C,createAttributeSetters:s,createProgram:e,createProgramFromScripts:i,createProgramFromSources:a,createProgramInfo:v,createUniformSetters:f,createVAOAndSetAttributes:m,createVAOFromBufferInfo:d,drawBufferInfo:L,drawObjectList:O,getExtensionWithKnownPrefixes:E,resizeCanvasToDisplaySize:y,setAttributes:l,setBuffersAndAttributes:A,setUniforms:c}}},45:function(r,t,n){"use strict";function e(r){return r&&r.__esModule?r:{default:r}}var o=n(20),i=e(o),a=n(19),u=e(a),f=document.body||document.head||document,c=document.createElement("script");c.id="drawImage-vertex-shader",c.type="x-shader/x-vertex",c.innerHTML="\n\tattribute vec4 a_position;\n\tattribute vec2 a_texcoord;\n\n\tuniform mat4 u_matrix;\n\tuniform mat4 u_textureMatrix;\n\n\tvarying vec2 v_texcoord;\n\n\tvoid main() {\n\t   gl_Position = u_matrix * a_position;\n\t   v_texcoord = (u_textureMatrix * vec4(a_texcoord, 0, 1)).xy;\n\t}\n",f.appendChild(c);var s=document.createElement("script");s.id="drawImage-fragment-shader",s.type="x-shader/x-fragment",s.innerHTML="\n\tprecision mediump float;\n\n\tvarying vec2 v_texcoord;\n\n\tuniform sampler2D u_texture;\n\n\tvoid main() {\n\t   gl_FragColor = texture2D(u_texture, v_texcoord);\n\t    // vec4 color = texture2D(u_texture, v_texcoord);\n\t    // gl_FragColor = vec4(color.rgb, 0.9 * color.b);\n\t}\n",f.appendChild(s),window.m4=(0,u.default)(),window.webglUtils=(0,i.default)()}})});