(this.webpackJsonptesttask=this.webpackJsonptesttask||[]).push([[0],{10:function(e,t,a){e.exports={pagUl:"MoviesSearchForm_pagUl__2mW_e",pagLi:"MoviesSearchForm_pagLi__1JLTs",pagLiActive:"MoviesSearchForm_pagLiActive__FSiiE"}},15:function(e,t,a){e.exports={wrap:"App_wrap__3j9up",appTitle:"App_appTitle__FTd5j"}},2:function(e,t,a){e.exports={li:"FilmElement_li__3pteV",movie:"FilmElement_movie__wQ0B9",fakeBackground:"FilmElement_fakeBackground__3h07k",img:"FilmElement_img__1GCBc",movieInfo:"FilmElement_movieInfo__3W3cN",mb10px:"FilmElement_mb10px__3Pij8",darkText:"FilmElement_darkText__iECYh",title:"FilmElement_title__2FCXS",language:"FilmElement_language__1JPO5",blockInfo:"FilmElement_blockInfo__2HUn4",icon:"FilmElement_icon__PaJiS",rating:"FilmElement_rating__2FF84",clock:"FilmElement_clock__3aWDb"}},60:function(e,t,a){},61:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),i=a(9),s=a(4),r=a(7),l=a(26),o=a(29),m=a(5),j="SET_MOVIES",u="SET_PAGE_NUMBER",_="SET_MOVIES_COUNT",b={movies:[],movie_count:0,page_number:1,movies_comments:[]},p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case j:return Object(m.a)(Object(m.a)({},e),{},{movies:Object(o.a)(n)});case _:return Object(m.a)(Object(m.a)({},e),{},{movie_count:n});case u:return Object(m.a)(Object(m.a)({},e),{},{page_number:n});default:return e}},d=Object(r.b)({movies:p}),g=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||r.c,v=Object(r.d)(d,g(Object(r.a)(l.a))),O=a(2),f=a.n(O),h=a(1),x=function(e){var t=e.m,a="white";return a=t.rating>=0&&t.rating<=4?"#fe2d2d":t.rating>4&&t.rating<=6?"#e9ef36":"#1afa25",Object(h.jsx)("li",{onClick:function(){},className:f.a.li,children:Object(h.jsx)("a",{href:t.url,children:Object(h.jsxs)("div",{className:f.a.movie,children:[Object(h.jsx)("div",{className:f.a.fakeBackground,children:Object(h.jsx)("div",{style:{backgroundImage:"URL(".concat(t.medium_cover_image,")")},className:f.a.img})}),Object(h.jsxs)("div",{className:f.a.movieInfo,children:[Object(h.jsx)("h2",{className:f.a.title,children:t.title_english}),Object(h.jsx)("p",{className:f.a.tags+" "+f.a.mb10px,children:t.genres.join(", ")}),Object(h.jsxs)("p",{className:f.a.mb10px,children:["Year: ",Object(h.jsx)("span",{className:f.a.darkText,children:t.year})]}),Object(h.jsx)("p",{}),Object(h.jsxs)("p",{className:f.a.language,children:["language: ",Object(h.jsx)("span",{className:f.a.darkText,children:t.language})]}),Object(h.jsxs)("div",{className:f.a.blockInfo,children:[Object(h.jsxs)("div",{style:{color:a},className:f.a.rating,children:[Object(h.jsx)("img",{className:f.a.icon,src:"https://img.icons8.com/fluent/24/000000/star.png",alt:"star icon"}),t.rating,"/10"]}),Object(h.jsxs)("div",{className:f.a.clock,children:[Object(h.jsx)("img",{className:f.a.icon,src:"https://img.icons8.com/material-outlined/24/def1ff/wall-clock.png",alt:"clock icon"}),"\xa0",t.runtime]})]})]})]})})})},k=a(6),E=a.n(k),F=a(14),N=a(27),S=a.n(N).a.create({baseURL:"https://yts.mx/api/v2/"}),T={getMovies:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return S.get("list_movies.json?limit=20&page=".concat(e)).then((function(e){return e.data}))}},y=function(e){return{type:j,payload:e}},w=function(){var e=Object(s.c)((function(e){return e.movies.page_number})),t=Object(s.b)();Object(n.useEffect)((function(){t(function(e){return function(){var t=Object(F.a)(E.a.mark((function t(a){var n;return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,T.getMovies(e);case 2:"ok"===(n=t.sent).status&&(a((c=n.data.movie_count,{type:_,payload:c})),a(y(n.data.movies)));case 4:case"end":return t.stop()}var c}),t)})));return function(e){return t.apply(this,arguments)}}()}(e))}),[e]);var a=Object(s.c)((function(e){return e.movies.movies}));return Object(h.jsx)("div",{children:Object(h.jsx)("ul",{children:a.map((function(e){return Object(h.jsx)(x,{m:e},e.id)}))})})},C=a(28),I=a.n(C),L=a(10),M=a.n(L),P=function(){var e=Object(s.c)((function(e){return e.movies.limit})),t=Object(s.c)((function(e){return e.movies.movie_count})),a=Object(s.c)((function(e){return e.movies.page_number})),n=Object(s.b)();return Object(h.jsx)("div",{children:Object(h.jsx)(I.a,{totalItemsCount:t,activePage:a,itemsCountPerPage:e,onChange:function(e){n({type:u,payload:e})},hideFirstLastPages:!0,innerClass:M.a.pagUl,linkClass:M.a.pagLi,activeLinkClass:M.a.pagLiActive})})},U=a(15),B=a.n(U);var A=function(){return Object(h.jsx)(s.a,{store:v,children:Object(h.jsxs)("div",{className:B.a.wrap,children:[Object(h.jsx)("h1",{className:B.a.appTitle,children:"Films"}),Object(h.jsx)(P,{}),Object(h.jsx)(w,{})]})})};a(60);Object(i.render)(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(A,{})}),document.getElementById("root"))}},[[61,1,2]]]);
//# sourceMappingURL=main.321a9b67.chunk.js.map