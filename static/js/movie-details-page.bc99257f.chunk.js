(this["webpackJsonpgoit-react-hw-05-movies"]=this["webpackJsonpgoit-react-hw-05-movies"]||[]).push([[4],{62:function(e,t,c){e.exports={sectionMovie:"MovieDetailsPage_sectionMovie__3EDPs",overviewMovie:"MovieDetailsPage_overviewMovie__2pH5R"}},68:function(e,t,c){"use strict";c.r(t),c.d(t,"default",(function(){return u}));var s=c(54),i=c(0),n=c(14),j=c.n(n),r=c(3),a=c(9),o=c(53),l=c(58),b=c(1);function h(){var e=Object(r.f)().moviesId,t=Object(i.useState)([]),c=Object(s.a)(t,2),n=c[0],j=c[1];return Object(i.useEffect)((function(){o.c(e).then((function(e){e.results!==[]&&(console.log(e.results),j(Object(l.a)(e.results)))})).catch((function(e){return e.massage}))}),[e]),Object(b.jsx)("section",{children:0===n.length?Object(b.jsx)("p",{children:"We don't have any reviews for this movie"}):Object(b.jsxs)("ul",{children:[Object(b.jsxs)("p",{children:[" ",n.content]}),n&&n.map((function(e){return Object(b.jsxs)("li",{children:[Object(b.jsx)("h4",{children:e.author}),Object(b.jsxs)("p",{children:[" ",e.content]})]},e.id)}))]})})}var O=c(62),d=c.n(O),v=Object(i.lazy)((function(){return c.e(1).then(c.bind(null,69))}));function u(){var e=Object(r.g)(),t=e.url,c=e.path,n=Object(r.f)().moviesId,l=Object(i.useState)(""),O=Object(s.a)(l,2),u=O[0],x=O[1];return Object(i.useEffect)((function(){o.b(n).then(x).catch((function(e){return e.massage}))}),[]),Object(b.jsxs)(b.Fragment,{children:[u&&Object(b.jsxs)("section",{children:[Object(b.jsxs)("div",{className:d.a.sectionMovie,children:[Object(b.jsx)("div",{children:Object(b.jsx)("img",{src:"https://image.tmdb.org/t/p/w300".concat(u.poster_path),alt:u.title})}),Object(b.jsxs)("div",{className:d.a.overviewMovie,children:[Object(b.jsx)("h1",{children:u.title}),Object(b.jsxs)("p",{children:["User Score: ",10*u.vote_average,"%"]}),Object(b.jsx)("h2",{children:"Overview"}),Object(b.jsx)("p",{children:u.overview}),Object(b.jsx)("h3",{children:"Genres"}),Object(b.jsx)("ul",{children:u.genres.map((function(e){return Object(b.jsx)("li",{children:e.name},e.id)}))})]})]}),Object(b.jsx)("hr",{})]}),u&&Object(b.jsxs)("div",{children:[Object(b.jsx)("p",{children:"Additional information"}),Object(b.jsxs)("ul",{children:[Object(b.jsx)("li",{children:Object(b.jsx)(a.b,{to:"".concat(t,"/cast"),className:"",activeClassName:"",children:"Cast"})}),Object(b.jsx)("li",{children:Object(b.jsx)(a.b,{to:"".concat(t,"/reviews"),className:"",activeClassName:"",children:"Reviews"})})]})]}),Object(b.jsx)("hr",{}),Object(b.jsxs)(i.Suspense,{fallback:Object(b.jsx)(j.a,{}),children:[Object(b.jsx)(r.a,{path:"".concat(c,"/cast"),children:Object(b.jsx)(v,{})}),Object(b.jsx)(r.a,{path:"".concat(c,"/reviews"),children:Object(b.jsx)(h,{})})]})]})}}}]);
//# sourceMappingURL=movie-details-page.bc99257f.chunk.js.map