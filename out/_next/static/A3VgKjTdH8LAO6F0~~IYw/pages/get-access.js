(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{HdQS:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/get-access",function(){var e=n("hwBB");return{page:e.default||e}}])},Y038:function(e,t,n){"use strict";var a=n("buZk"),r=n("q1tI"),o=n.n(r),i=n("fMHQ"),s=n("YFqc"),l=n.n(s),c=i.a.div.withConfig({displayName:"Navbar__NavbarContainer",componentId:"sc-1kakccw-0"})(["width:calc(100% - 20px);position:fixed;top:0px;left:10px;height:90px;background:#f94343;display:flex;align-items:center;justify-content:space-between;padding:16px;box-sizing:border-box;z-index:8;@media only screen and (min-width:960px){padding:16px 120px;}"]),f=i.a.a.withConfig({displayName:"Navbar__NavbarBrand",componentId:"sc-1kakccw-1"})(["font-family:'Montserrat',sans-serif;font-weight:800;font-size:1.5rem;color:#fff;background:#f94343;margin:0;cursor:pointer;position:relative;"]),u=i.a.div.withConfig({displayName:"Navbar__NavbarLogo",componentId:"sc-1kakccw-2"})(["height:32px;width:120px;background-image:url('/static/Somm-Logo.png');background-size:cover;background-position:center;display:flex;"]),p=i.a.ul.withConfig({displayName:"Navbar__NavbarItems",componentId:"sc-1kakccw-3"})(["display:flex;align-items:center;flex-flow:row nowrap;padding:0;margin:0;"]),d=i.a.li.withConfig({displayName:"Navbar__NavbarItem",componentId:"sc-1kakccw-4"})(["display:inline-flex;list-style:none;margin-right:16px;font-weight:700;font-size:1rem;font-family:'Source Sans Pro',sans-serif;color:#fff;&:last-of-type{margin-right:0;}"]),h=i.a.a.withConfig({displayName:"Navbar__NavbarButton",componentId:"sc-1kakccw-5"})(["display:inline-flex;align-items:center;justify-content:center;font-size:1rem;font-family:'Source Sans Pro',sans-serif;font-weight:700;border-radius:8px;background:#1f1f1f;color:#fff;cursor:pointer;position:relative;padding:8px 16px;"]);t.a=function(e){return Object(a.a)(e),o.a.createElement(c,null,o.a.createElement(l.a,{href:"/"},o.a.createElement(f,null,o.a.createElement(u,null))),o.a.createElement(p,null,o.a.createElement(d,null,"Features"),o.a.createElement(d,null,"Pricing"),o.a.createElement(d,null,o.a.createElement(l.a,{href:"/get-access"},o.a.createElement(h,null,"Get access")))))}},YFqc:function(e,t,n){e.exports=n("cTJO")},buZk:function(e,t,n){"use strict";function a(e){if(null==e)throw new TypeError("Cannot destructure undefined")}n.d(t,"a",function(){return a})},cTJO:function(e,t,n){"use strict";var a=n("KI45"),r=a(n("9Jkg")),o=a(n("iZP3")),i=a(n("/HRN")),s=a(n("WaGi")),l=a(n("ZDA2")),c=a(n("/+P4")),f=a(n("N9n2")),u=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t},p=function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var d=n("CxY0"),h=u(n("q1tI")),m=(p(n("17x9")),u(n("20a2"))),g=n("Bu4q");var v=function(e){function t(){var e,n,a,r,s;return(0,i.default)(this,t),(e=(0,l.default)(this,(0,c.default)(t).apply(this,arguments))).formatUrls=(n=function(e,t){return{href:e&&"object"===(0,o.default)(e)?d.format(e):e,as:t&&"object"===(0,o.default)(t)?d.format(t):t}},a=null,r=null,s=null,function(e,t){if(e===a&&t===r)return s;var o=n(e,t);return a=e,r=t,s=o,o}),e.linkClicked=function(t){var n=t.currentTarget,a=n.nodeName,r=n.target;if("A"!==a||!(r&&"_self"!==r||t.metaKey||t.ctrlKey||t.shiftKey||t.nativeEvent&&2===t.nativeEvent.which)){var o=e.formatUrls(e.props.href,e.props.as),i=o.href,s=o.as;if(function(e){var t=d.parse(e,!1,!0),n=d.parse(g.getLocationOrigin(),!1,!0);return!t.host||t.protocol===n.protocol&&t.host===n.host}(i)){var l=window.location.pathname;i=d.resolve(l,i),s=s?d.resolve(l,s):i,t.preventDefault();var c=e.props.scroll;null==c&&(c=s.indexOf("#")<0),m.default[e.props.replace?"replace":"push"](i,s,{shallow:e.props.shallow}).then(function(e){e&&c&&(window.scrollTo(0,0),document.body.focus())}).catch(function(t){e.props.onError&&e.props.onError(t)})}}},e}return(0,f.default)(t,e),(0,s.default)(t,[{key:"componentDidMount",value:function(){this.prefetch()}},{key:"componentDidUpdate",value:function(e){(0,r.default)(this.props.href)!==(0,r.default)(e.href)&&this.prefetch()}},{key:"prefetch",value:function(){if(this.props.prefetch&&"undefined"!=typeof window){var e=window.location.pathname,t=this.formatUrls(this.props.href,this.props.as).href,n=d.resolve(e,t);m.default.prefetch(n)}}},{key:"render",value:function(){var e=this,t=this.props.children,n=this.formatUrls(this.props.href,this.props.as),a=n.href,r=n.as;"string"==typeof t&&(t=h.default.createElement("a",null,t));var o=h.Children.only(t),i={onClick:function(t){o.props&&"function"==typeof o.props.onClick&&o.props.onClick(t),t.defaultPrevented||e.linkClicked(t)}};return!this.props.passHref&&("a"!==o.type||"href"in o.props)||(i.href=r||a),i.href&&"undefined"!=typeof __NEXT_DATA__&&__NEXT_DATA__.nextExport&&(i.href=m.Router._rewriteUrlForNextExport(i.href)),h.default.cloneElement(o,i)}}]),t}(h.Component);t.default=v},hwBB:function(e,t,n){"use strict";n.r(t);var a=n("9Jkg"),r=n.n(a),o=n("0iUn"),i=n("sLSF"),s=n("MI3g"),l=n("a7VT"),c=n("Tit0"),f=n("q1tI"),u=n.n(f),p=n("fMHQ"),d=n("PgRs"),h=n.n(d),m=n("vDqi"),g=n.n(m),v=n("U6Nr"),w=n("Y038"),x=p.a.div.withConfig({displayName:"get-access__PageWrapper",componentId:"sc-1nj7fnu-0"})(["padding:156px 24px 24px;box-sizing:border-box;border:10px solid #1f1f1f;min-height:100vh;display:flex;flex-flow:column nowrap;align-items:center;@media only screen and (min-width:960px){padding:156px 16px 16px;}"]),y=p.a.h1.withConfig({displayName:"get-access__PageTitle",componentId:"sc-1nj7fnu-1"})(["font-size:2rem;font-weight:700;font-family:'Montserrat',sans-serif;color:#1f1f1f;position:relative;margin:0 auto 16px;display:inline-flex;&:after{content:\"\";width:100%;height:8px;background:#f94343;display:block;position:absolute;bottom:0px;left:4px;z-index:-1;}"]),b=function(e){function t(e){var n;return Object(o.default)(this,t),(n=Object(s.default)(this,Object(l.default)(t).call(this,e))).state={accessStatus:null,email:"",name:""},n}return Object(c.default)(t,e),Object(i.default)(t,[{key:"handleAccess",value:function(e){var t=this;e.preventDefault();var n=this.state,a=n.email,o=n.name,i=_.split(o," ",2),s={email:a,firstName:i[0],lastName:i[1]},l=r()(s);console.log(l),g()({method:"post",url:"https://wt-2c136a182f9df0f639eceee9aa700a3d-0.sandbox.auth0-extend.com/somm-mailchimp",data:l,headers:{"Access-Control-Allow-Credentials":!0,"Access-Control-Allow-Origin":"http://localhost:3000","Access-Control-Expose-Headers":"x-auth0-proxy-stats, x-auth0-stats, x-wt-response-source, location","Content-Type":"application/json"}}).then(function(e){console.log(e),t.setState({accessStatus:"success"})}).catch(function(e){console.log(e.response.data),t.setState({accessStatus:e.response.data.details.title})})}},{key:"render",value:function(){var e=this;return u.a.createElement(x,null,u.a.createElement(h.a,null,u.a.createElement("title",null,"Get access | Somm | Your menu's personal assistant")),u.a.createElement(w.a,null),u.a.createElement(y,null,"Get access"),u.a.createElement(v.a,{handleAccess:function(t){return e.handleAccess(t)},email:this.state.email,handleEmail:function(t){return e.setState({email:t})},name:this.state.name,handleName:function(t){return e.setState({name:t})},accessStatus:this.state.accessStatus,handleClear:function(){return e.setState({accessStatus:"",name:"",email:""})}}))}}]),t}(f.Component);t.default=b}},[["HdQS",1,0]]]);