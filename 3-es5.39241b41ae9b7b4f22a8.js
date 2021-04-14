!function(){function n(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function t(n,t){for(var e=0;e<t.length;e++){var r=t[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}function e(n,e,r){return e&&t(n.prototype,e),r&&t(n,r),n}(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"1nNA":function(t,r,o){"use strict";o.r(r),o.d(r,"ROUTES",function(){return R}),o.d(r,"ErrorRoutingModule",function(){return D});var c,i,a,u,b,f,s,l=o("tyNb"),d=o("ofXK"),p=o("3Pt+"),v=o("NMtB"),h=o("hex+"),m=o("LRne"),O=o("fXoL"),y=[(i=function(){function t(){n(this,t)}return e(t,[{key:"canActivate",value:function(){return Object(m.a)(!0)}}]),t}(),i.\u0275fac=function(n){return new(n||i)},i.\u0275prov=O.Fb({token:i,factory:i.\u0275fac}),i)],g=[(c=function(){function t(){n(this,t)}return e(t,[{key:"getError$",value:function(){return Object(m.a)({})}}]),t}(),c.\u0275fac=function(n){return new(n||c)},c.\u0275prov=O.Fb({token:c,factory:c.\u0275fac}),c)],N=o("biH8"),w=o("6NWb"),k=function(){return["fas","arrow-left"]},j=((a=function(){function t(){n(this,t)}return e(t,[{key:"ngOnInit",value:function(){}}]),t}()).\u0275fac=function(n){return new(n||a)},a.\u0275cmp=O.Db({type:a,selectors:[["sb-error-401"]],decls:14,vars:2,consts:[[1,"container"],[1,"row","justify-content-center"],[1,"col-lg-6"],[1,"text-center","mt-4"],[1,"display-1"],[1,"lead"],["routerLink","/"],[1,"mr-1",3,"icon"]],template:function(n,t){1&n&&(O.Ob(0,"sb-layout-error"),O.Ob(1,"div",0),O.Ob(2,"div",1),O.Ob(3,"div",2),O.Ob(4,"div",3),O.Ob(5,"h1",4),O.zc(6,"401"),O.Nb(),O.Ob(7,"p",5),O.zc(8,"Unauthorized"),O.Nb(),O.Ob(9,"p"),O.zc(10,"Access to this resource is denied."),O.Nb(),O.Ob(11,"a",6),O.Kb(12,"fa-icon",7),O.zc(13,"Return Home"),O.Nb(),O.Nb(),O.Nb(),O.Nb(),O.Nb(),O.Nb()),2&n&&(O.xb(12),O.gc("icon",O.jc(1,k)))},directives:[N.a,l.f,w.a],styles:[""],changeDetection:0}),a),z=function(){return["fas","arrow-left"]},A=((u=function(){function t(){n(this,t)}return e(t,[{key:"ngOnInit",value:function(){}}]),t}()).\u0275fac=function(n){return new(n||u)},u.\u0275cmp=O.Db({type:u,selectors:[["sb-error-404"]],decls:11,vars:2,consts:[[1,"container"],[1,"row","justify-content-center"],[1,"col-lg-6"],[1,"text-center","mt-4"],["src","assets/img/error-404-monochrome.svg",1,"mb-4","img-error"],[1,"lead"],["routerLink","/"],[1,"mr-1",3,"icon"]],template:function(n,t){1&n&&(O.Ob(0,"sb-layout-error"),O.Ob(1,"div",0),O.Ob(2,"div",1),O.Ob(3,"div",2),O.Ob(4,"div",3),O.Kb(5,"img",4),O.Ob(6,"p",5),O.zc(7,"This requested URL was not found on this server."),O.Nb(),O.Ob(8,"a",6),O.Kb(9,"fa-icon",7),O.zc(10,"Return Home"),O.Nb(),O.Nb(),O.Nb(),O.Nb(),O.Nb(),O.Nb()),2&n&&(O.xb(9),O.gc("icon",O.jc(1,z)))},directives:[N.a,l.f,w.a],styles:[""],changeDetection:0}),u),E=function(){return["fas","arrow-left"]},x=((f=function(){function t(){n(this,t)}return e(t,[{key:"ngOnInit",value:function(){}}]),t}()).\u0275fac=function(n){return new(n||f)},f.\u0275cmp=O.Db({type:f,selectors:[["sb-error-500"]],decls:12,vars:2,consts:[[1,"container"],[1,"row","justify-content-center"],[1,"col-lg-6"],[1,"text-center","mt-4"],[1,"display-1"],[1,"lead"],["routerLink","/"],[1,"mr-1",3,"icon"]],template:function(n,t){1&n&&(O.Ob(0,"sb-layout-error"),O.Ob(1,"div",0),O.Ob(2,"div",1),O.Ob(3,"div",2),O.Ob(4,"div",3),O.Ob(5,"h1",4),O.zc(6,"500"),O.Nb(),O.Ob(7,"p",5),O.zc(8,"Internal Server Error"),O.Nb(),O.Ob(9,"a",6),O.Kb(10,"fa-icon",7),O.zc(11,"Return Home"),O.Nb(),O.Nb(),O.Nb(),O.Nb(),O.Nb(),O.Nb()),2&n&&(O.xb(10),O.gc("icon",O.jc(1,E)))},directives:[N.a,l.f,w.a],styles:[""],changeDetection:0}),f),B=((b=function t(){n(this,t)}).\u0275mod=O.Hb({type:b}),b.\u0275inj=O.Gb({factory:function(n){return new(n||b)},providers:[].concat(g,y),imports:[[d.c,l.g,p.e,p.a,v.a,h.a]]}),b),R=[{path:"",pathMatch:"full",redirectTo:"404"},{path:"401",canActivate:[],component:j,data:{title:"Error 401 - SB Clean Blog Angular"}},{path:"404",canActivate:[],component:A,data:{title:"Error 404 - SB Clean Blog Angular"}},{path:"500",canActivate:[],component:x,data:{title:"Error 500 - SB Clean Blog Angular"}},{path:"**",pathMatch:"full",component:A}],D=((s=function t(){n(this,t)}).\u0275mod=O.Hb({type:s}),s.\u0275inj=O.Gb({factory:function(n){return new(n||s)},imports:[[B,l.g.forChild(R)],l.g]}),s)}}])}();