(this.webpackJsonpcalc=this.webpackJsonpcalc||[]).push([[0],{14:function(e,_,t){},3:function(module,__webpack_exports__,__webpack_require__){"use strict";var C_Users_SAAD_Desktop_react_calc_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(4),C_Users_SAAD_Desktop_react_calc_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(5),C_Users_SAAD_Desktop_react_calc_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(7),C_Users_SAAD_Desktop_react_calc_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(6),react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__),_App_css__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(14),_App_css__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_5__),Button=function(e){return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div",{onClick:function(){return e.onClick(e.value)},className:"normal   d-flex justify-content-center align-items-center"},e.value)},ResultButton=function(e){return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div",{onClick:function(){return e.onClick()},className:"result  d-flex justify-content-center align-items-center"},e.value)},ResetButton=function(e){return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div",{onClick:function(){return e.onClick()},className:"reset d-flex justify-content-center align-items-center"},e.value)},App=function(_React$Component){Object(C_Users_SAAD_Desktop_react_calc_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__.a)(App,_React$Component);var _super=Object(C_Users_SAAD_Desktop_react_calc_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__.a)(App);function App(){var _this;Object(C_Users_SAAD_Desktop_react_calc_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.a)(this,App);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];return _this=_super.call.apply(_super,[this].concat(args)),_this.state={currentVal:"0",result:0,preVal:"0",evaluated:!0},_this.onClick=function(e){if(_this.state.evaluated){var _=_this.state.currentVal.replace(/x/g,"*");"0"===_this.state.currentVal?_this.setState({currentVal:e}):/[*/+]$/g.test(_)&&("/"===e||"x"===e||"+"===e)||/[-]$/g.test(_)&&("/"===e||"x"===e||"+"===e||"-"===e)?(_=_.slice(0,-1),_this.setState({currentVal:_+e})):_this.setState({currentVal:_this.state.currentVal+e})}18===_this.state.currentVal.length&&(_this.setState({currentVal:"Limit Exceeded",preVal:_this.state.currentVal,evaluated:!_this.state.evaluated}),setTimeout((function(){return _this.setState({currentVal:_this.state.preVal,evaluated:!_this.state.evaluated})}),250))},_this.reset=function(){_this.setState({currentVal:"0",result:0})},_this.calculate=function(){var expression=_this.state.currentVal.replace(/x/g,"*"),operatorsEnd=/\w[*/+-]+$/g;operatorsEnd.test(expression)?(expression=expression.replace(/[+-/*]+$/,""),_this.setState({currentVal:eval(expression).toString(),result:expression+"="+eval(expression).toString()})):/^[+-/*]+$/g.test(expression)?_this.setState({result:"0",currentVal:"0"}):/^[/*]+/g.test(expression)?(expression=expression.replace(/^[/*]+/g,""),_this.setState({currentVal:eval(expression).toString()})):_this.setState({result:expression+"="+eval(expression).toString(),currentVal:eval(expression).toString()})},_this}return Object(C_Users_SAAD_Desktop_react_calc_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.a)(App,[{key:"render",value:function(){return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div",{className:"d-flex justify-content-center align-items-center ",style:{background:"black",height:"100vh"}},react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("h1",{className:"text-light display-1"},"Try out my Calculator!")),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div",{className:"container bg-dark my-5",style:{width:"350px",color:"white",border:"3px purple solid",borderRadius:"10px"}},react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div",{className:"resultDisplay mt-2 pl-2 d-block"},this.state.result),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div",{className:"display pl-2 d-block"},this.state.currentVal),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div",{className:"row px-2 pt-2"},react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div",{className:"col-6 p-0"},react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(ResetButton,{value:"AC",onClick:this.reset})),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div",{className:"col p-0"},react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(Button,{value:"/",onClick:this.onClick})),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div",{className:"col p-0"},react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(Button,{value:"x",onClick:this.onClick}))),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div",{className:"row px-2"},react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div",{className:"col p-0"},react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(Button,{value:"7",onClick:this.onClick})),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div",{className:"col p-0"},react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(Button,{value:"8",onClick:this.onClick})),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div",{className:"col p-0"},react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(Button,{value:"9",onClick:this.onClick})),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div",{className:"col p-0"},react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(Button,{value:"-",onClick:this.onClick}))),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div",{className:"row px-2"},react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div",{className:"col p-0"},react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(Button,{value:"4",onClick:this.onClick})),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div",{className:"col p-0"},react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(Button,{value:"5",onClick:this.onClick})),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div",{className:"col p-0"},react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(Button,{value:"6",onClick:this.onClick})),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div",{className:"col p-0"},react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(Button,{value:"+",onClick:this.onClick}))),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div",{className:"row px-2"},react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div",{className:"col-9"},react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div",{className:"row"},react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div",{className:"col p-0"},react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(Button,{value:"1",onClick:this.onClick})),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div",{className:"col p-0"},react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(Button,{value:"2",onClick:this.onClick})),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div",{className:"col p-0"},react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(Button,{value:"3",onClick:this.onClick}))),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div",{className:"row"},react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div",{className:"col-8 p-0"},react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(Button,{value:"0",onClick:this.onClick})),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div",{className:"col p-0"},react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(Button,{value:".",onClick:this.onClick})))),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div",{className:"col-3 pb-2 p-0"},react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(ResultButton,{onClick:this.calculate,value:"="}))))))}}]),App}(react__WEBPACK_IMPORTED_MODULE_4___default.a.Component);__webpack_exports__.a=App},8:function(e,_,t){e.exports=t(9)},9:function(e,_,t){"use strict";t.r(_);var a=t(0),l=t.n(a),r=t(2),c=t.n(r),s=t(3);c.a.render(l.a.createElement(s.a,null),document.querySelector("#root"))}},[[8,1,2]]]);
//# sourceMappingURL=main.945a1dcf.chunk.js.map