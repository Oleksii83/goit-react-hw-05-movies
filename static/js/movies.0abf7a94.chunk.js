(this["webpackJsonpgoit-react-hw-05-movies"]=this["webpackJsonpgoit-react-hw-05-movies"]||[]).push([[5],{65:function(e,t,a){e.exports={Searchbar:"Searchbar_Searchbar__nCUIQ",SearchForm:"Searchbar_SearchForm__1CYvu",SearchFormButton:"Searchbar_SearchFormButton__3gVJD",SearchFormButtonLabel:"Searchbar_SearchFormButtonLabel__1dRmt",SearchFormInput:"Searchbar_SearchFormInput__l75-0"}},71:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return v}));var n=a(55),r=a(56),c=a(59),o=a(57),s=a(0),u=a(62),i=a(65),h=a.n(i),l=a(1),b=function(e){Object(c.a)(a,e);var t=Object(o.a)(a);function a(){var e;Object(n.a)(this,a);for(var r=arguments.length,c=new Array(r),o=0;o<r;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).state={value:""},e.handleNameChange=function(t){e.setState({value:t.currentTarget.value.toLowerCase()})},e.handleSubmit=function(t){if(t.preventDefault(),""===e.state.value.trim())return u.b.error("Enter query to search");e.props.onSubmit(e.state.value),e.setState({value:""})},e}return Object(r.a)(a,[{key:"render",value:function(){return Object(l.jsxs)("form",{onSubmit:this.handleSubmit,className:h.a.form,children:[Object(l.jsx)("input",{className:h.a.input,type:"text",autoComplete:"off",autoFocus:!0,value:this.state.value,onChange:this.handleNameChange,placeholder:"Enter a movie name"}),Object(l.jsx)("button",{type:"submit",className:h.a.button,children:"Search"})]})}}]),a}(s.Component),m=(a(66),a(9)),p=function(e){Object(c.a)(a,e);var t=Object(o.a)(a);function a(){var e;Object(n.a)(this,a);for(var r=arguments.length,c=new Array(r),o=0;o<r;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).state={movies:[]},e}return Object(r.a)(a,[{key:"componentDidUpdate",value:function(e,t){var a=this,n=e.value,r=this.props.value;n!==r&&fetch("https://api.themoviedb.org/3/search/movie?api_key=aa3c597c43c8e27f94ec1708817abf2a&language=en-US&page=1&include_adult=false)&query=".concat(r)).then((function(e){return e.json()})).then(console.log).then((function(e){a.setState({movies:e.results})}))}},{key:"render",value:function(){var e=this;return Object(l.jsxs)("div",{children:[Object(l.jsx)("h2",{children:this.props.value}),Object(l.jsx)("ul",{children:this.state.movies&&this.state.movies.map((function(t){return Object(l.jsx)("li",{children:Object(l.jsx)(m.b,{to:{pathname:"".concat(e.props.match.path,"/").concat(t.id),state:{from:e.props.location}},children:t.title})},t.id)}))})]})}}]),a}(s.Component),v=function(e){Object(c.a)(a,e);var t=Object(o.a)(a);function a(){var e;Object(n.a)(this,a);for(var r=arguments.length,c=new Array(r),o=0;o<r;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).state={value:""},e.handleFormSubmit=function(t){e.setState({value:t})},e}return Object(r.a)(a,[{key:"render",value:function(){return Object(l.jsxs)("div",{className:"",children:[Object(l.jsx)(b,{onSubmit:this.handleFormSubmit}),Object(l.jsx)(p,{value:this.state.value}),Object(l.jsx)(u.a,{autoClose:3e3,position:"top-left"})]})}}]),a}(s.Component)}}]);
//# sourceMappingURL=movies.0abf7a94.chunk.js.map