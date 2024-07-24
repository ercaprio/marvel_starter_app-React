"use strict";(self.webpackChunkmarvel=self.webpackChunkmarvel||[]).push([[397],{772:(t,e,n)=>{n.d(e,{A:()=>N});var r=n(168),s=n(587),i=n(540);function o(t,e){return t.replace(new RegExp("(^|\\s)"+e+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}var a=n(43),l=n(950);const u=!1;var p=n(726),c=function(t){return t.scrollTop},d="unmounted",f="exited",h="entering",E="entered",m="exiting",x=function(t){function e(e,n){var r;r=t.call(this,e,n)||this;var s,i=n&&!n.isMounting?e.enter:e.appear;return r.appearStatus=null,e.in?i?(s=f,r.appearStatus=h):s=E:s=e.unmountOnExit||e.mountOnEnter?d:f,r.state={status:s},r.nextCallback=null,r}(0,i.A)(e,t),e.getDerivedStateFromProps=function(t,e){return t.in&&e.status===d?{status:f}:null};var n=e.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(t){var e=null;if(t!==this.props){var n=this.state.status;this.props.in?n!==h&&n!==E&&(e=h):n!==h&&n!==E||(e=m)}this.updateStatus(!1,e)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var t,e,n,r=this.props.timeout;return t=e=n=r,null!=r&&"number"!==typeof r&&(t=r.exit,e=r.enter,n=void 0!==r.appear?r.appear:e),{exit:t,enter:e,appear:n}},n.updateStatus=function(t,e){if(void 0===t&&(t=!1),null!==e)if(this.cancelNextCallback(),e===h){if(this.props.unmountOnExit||this.props.mountOnEnter){var n=this.props.nodeRef?this.props.nodeRef.current:l.findDOMNode(this);n&&c(n)}this.performEnter(t)}else this.performExit();else this.props.unmountOnExit&&this.state.status===f&&this.setState({status:d})},n.performEnter=function(t){var e=this,n=this.props.enter,r=this.context?this.context.isMounting:t,s=this.props.nodeRef?[r]:[l.findDOMNode(this),r],i=s[0],o=s[1],a=this.getTimeouts(),p=r?a.appear:a.enter;!t&&!n||u?this.safeSetState({status:E},(function(){e.props.onEntered(i)})):(this.props.onEnter(i,o),this.safeSetState({status:h},(function(){e.props.onEntering(i,o),e.onTransitionEnd(p,(function(){e.safeSetState({status:E},(function(){e.props.onEntered(i,o)}))}))})))},n.performExit=function(){var t=this,e=this.props.exit,n=this.getTimeouts(),r=this.props.nodeRef?void 0:l.findDOMNode(this);e&&!u?(this.props.onExit(r),this.safeSetState({status:m},(function(){t.props.onExiting(r),t.onTransitionEnd(n.exit,(function(){t.safeSetState({status:f},(function(){t.props.onExited(r)}))}))}))):this.safeSetState({status:f},(function(){t.props.onExited(r)}))},n.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(t,e){e=this.setNextCallback(e),this.setState(t,e)},n.setNextCallback=function(t){var e=this,n=!0;return this.nextCallback=function(r){n&&(n=!1,e.nextCallback=null,t(r))},this.nextCallback.cancel=function(){n=!1},this.nextCallback},n.onTransitionEnd=function(t,e){this.setNextCallback(e);var n=this.props.nodeRef?this.props.nodeRef.current:l.findDOMNode(this),r=null==t&&!this.props.addEndListener;if(n&&!r){if(this.props.addEndListener){var s=this.props.nodeRef?[this.nextCallback]:[n,this.nextCallback],i=s[0],o=s[1];this.props.addEndListener(i,o)}null!=t&&setTimeout(this.nextCallback,t)}else setTimeout(this.nextCallback,0)},n.render=function(){var t=this.state.status;if(t===d)return null;var e=this.props,n=e.children,r=(e.in,e.mountOnEnter,e.unmountOnExit,e.appear,e.enter,e.exit,e.timeout,e.addEndListener,e.onEnter,e.onEntering,e.onEntered,e.onExit,e.onExiting,e.onExited,e.nodeRef,(0,s.A)(e,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]));return a.createElement(p.A.Provider,{value:null},"function"===typeof n?n(t,r):a.cloneElement(a.Children.only(n),r))},e}(a.Component);function v(){}x.contextType=p.A,x.propTypes={},x.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:v,onEntering:v,onEntered:v,onExit:v,onExiting:v,onExited:v},x.UNMOUNTED=d,x.EXITED=f,x.ENTERING=h,x.ENTERED=E,x.EXITING=m;const g=x;var C=function(t,e){return t&&e&&e.split(" ").forEach((function(e){return r=e,void((n=t).classList?n.classList.remove(r):"string"===typeof n.className?n.className=o(n.className,r):n.setAttribute("class",o(n.className&&n.className.baseVal||"",r)));var n,r}))},b=function(t){function e(){for(var e,n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))||this).appliedClasses={appear:{},enter:{},exit:{}},e.onEnter=function(t,n){var r=e.resolveArguments(t,n),s=r[0],i=r[1];e.removeClasses(s,"exit"),e.addClass(s,i?"appear":"enter","base"),e.props.onEnter&&e.props.onEnter(t,n)},e.onEntering=function(t,n){var r=e.resolveArguments(t,n),s=r[0],i=r[1]?"appear":"enter";e.addClass(s,i,"active"),e.props.onEntering&&e.props.onEntering(t,n)},e.onEntered=function(t,n){var r=e.resolveArguments(t,n),s=r[0],i=r[1]?"appear":"enter";e.removeClasses(s,i),e.addClass(s,i,"done"),e.props.onEntered&&e.props.onEntered(t,n)},e.onExit=function(t){var n=e.resolveArguments(t)[0];e.removeClasses(n,"appear"),e.removeClasses(n,"enter"),e.addClass(n,"exit","base"),e.props.onExit&&e.props.onExit(t)},e.onExiting=function(t){var n=e.resolveArguments(t)[0];e.addClass(n,"exit","active"),e.props.onExiting&&e.props.onExiting(t)},e.onExited=function(t){var n=e.resolveArguments(t)[0];e.removeClasses(n,"exit"),e.addClass(n,"exit","done"),e.props.onExited&&e.props.onExited(t)},e.resolveArguments=function(t,n){return e.props.nodeRef?[e.props.nodeRef.current,t]:[t,n]},e.getClassNames=function(t){var n=e.props.classNames,r="string"===typeof n,s=r?""+(r&&n?n+"-":"")+t:n[t];return{baseClassName:s,activeClassName:r?s+"-active":n[t+"Active"],doneClassName:r?s+"-done":n[t+"Done"]}},e}(0,i.A)(e,t);var n=e.prototype;return n.addClass=function(t,e,n){var r=this.getClassNames(e)[n+"ClassName"],s=this.getClassNames("enter").doneClassName;"appear"===e&&"done"===n&&s&&(r+=" "+s),"active"===n&&t&&c(t),r&&(this.appliedClasses[e][n]=r,function(t,e){t&&e&&e.split(" ").forEach((function(e){return r=e,void((n=t).classList?n.classList.add(r):function(t,e){return t.classList?!!e&&t.classList.contains(e):-1!==(" "+(t.className.baseVal||t.className)+" ").indexOf(" "+e+" ")}(n,r)||("string"===typeof n.className?n.className=n.className+" "+r:n.setAttribute("class",(n.className&&n.className.baseVal||"")+" "+r)));var n,r}))}(t,r))},n.removeClasses=function(t,e){var n=this.appliedClasses[e],r=n.base,s=n.active,i=n.done;this.appliedClasses[e]={},r&&C(t,r),s&&C(t,s),i&&C(t,i)},n.render=function(){var t=this.props,e=(t.classNames,(0,s.A)(t,["classNames"]));return a.createElement(g,(0,r.A)({},e,{onEnter:this.onEnter,onEntered:this.onEntered,onEntering:this.onEntering,onExit:this.onExit,onExiting:this.onExiting,onExited:this.onExited}))},e}(a.Component);b.defaultProps={classNames:""},b.propTypes={};const N=b},523:(t,e,n)=>{n.d(e,{A:()=>f});var r=n(587),s=n(168);var i=n(540),o=n(43),a=n(726);function l(t,e){var n=Object.create(null);return t&&o.Children.map(t,(function(t){return t})).forEach((function(t){n[t.key]=function(t){return e&&(0,o.isValidElement)(t)?e(t):t}(t)})),n}function u(t,e,n){return null!=n[e]?n[e]:t.props[e]}function p(t,e,n){var r=l(t.children),s=function(t,e){function n(n){return n in e?e[n]:t[n]}t=t||{},e=e||{};var r,s=Object.create(null),i=[];for(var o in t)o in e?i.length&&(s[o]=i,i=[]):i.push(o);var a={};for(var l in e){if(s[l])for(r=0;r<s[l].length;r++){var u=s[l][r];a[s[l][r]]=n(u)}a[l]=n(l)}for(r=0;r<i.length;r++)a[i[r]]=n(i[r]);return a}(e,r);return Object.keys(s).forEach((function(i){var a=s[i];if((0,o.isValidElement)(a)){var l=i in e,p=i in r,c=e[i],d=(0,o.isValidElement)(c)&&!c.props.in;!p||l&&!d?p||!l||d?p&&l&&(0,o.isValidElement)(c)&&(s[i]=(0,o.cloneElement)(a,{onExited:n.bind(null,a),in:c.props.in,exit:u(a,"exit",t),enter:u(a,"enter",t)})):s[i]=(0,o.cloneElement)(a,{in:!1}):s[i]=(0,o.cloneElement)(a,{onExited:n.bind(null,a),in:!0,exit:u(a,"exit",t),enter:u(a,"enter",t)})}})),s}var c=Object.values||function(t){return Object.keys(t).map((function(e){return t[e]}))},d=function(t){function e(e,n){var r,s=(r=t.call(this,e,n)||this).handleExited.bind(function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(r));return r.state={contextValue:{isMounting:!0},handleExited:s,firstRender:!0},r}(0,i.A)(e,t);var n=e.prototype;return n.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},n.componentWillUnmount=function(){this.mounted=!1},e.getDerivedStateFromProps=function(t,e){var n,r,s=e.children,i=e.handleExited;return{children:e.firstRender?(n=t,r=i,l(n.children,(function(t){return(0,o.cloneElement)(t,{onExited:r.bind(null,t),in:!0,appear:u(t,"appear",n),enter:u(t,"enter",n),exit:u(t,"exit",n)})}))):p(t,s,i),firstRender:!1}},n.handleExited=function(t,e){var n=l(this.props.children);t.key in n||(t.props.onExited&&t.props.onExited(e),this.mounted&&this.setState((function(e){var n=(0,s.A)({},e.children);return delete n[t.key],{children:n}})))},n.render=function(){var t=this.props,e=t.component,n=t.childFactory,s=(0,r.A)(t,["component","childFactory"]),i=this.state.contextValue,l=c(this.state.children).map(n);return delete s.appear,delete s.enter,delete s.exit,null===e?o.createElement(a.A.Provider,{value:i},l):o.createElement(a.A.Provider,{value:i},o.createElement(e,s,l))},e}(o.Component);d.propTypes={},d.defaultProps={component:"div",childFactory:function(t){return t}};const f=d},726:(t,e,n)=>{n.d(e,{A:()=>r});const r=n(43).createContext(null)},168:(t,e,n)=>{function r(){return r=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)({}).hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},r.apply(null,arguments)}n.d(e,{A:()=>r})},540:(t,e,n)=>{function r(t,e){return r=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},r(t,e)}function s(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,r(t,e)}n.d(e,{A:()=>s})},587:(t,e,n)=>{function r(t,e){if(null==t)return{};var n={};for(var r in t)if({}.hasOwnProperty.call(t,r)){if(e.indexOf(r)>=0)continue;n[r]=t[r]}return n}n.d(e,{A:()=>r})}}]);
//# sourceMappingURL=397.15e10524.chunk.js.map