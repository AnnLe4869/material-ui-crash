!function(e){var t={};function r(n){if(t[n])return t[n].exports;var a=t[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(n,a,function(t){return e[t]}.bind(null,a));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s="./src/server.js")}({"./src/server.js":
/*!************************************!*\
  !*** ./src/server.js + 10 modules ***!
  \************************************/
/*! no exports provided */
/*! ModuleConcatenation bailout: Cannot concat with external "@babel/runtime/helpers/defineProperty" (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with external "@babel/runtime/helpers/extends" (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with external "@material-ui/core" (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with external "@material-ui/core/CssBaseline" (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with external "@material-ui/core/colors" (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with external "@material-ui/core/styles" (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with external "@material-ui/icons/Add" (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with external "@material-ui/icons/Delete" (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with external "@material-ui/icons/Edit" (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with external "@material-ui/icons/Menu" (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with external "@material-ui/styles" (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with external "express" (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with external "morgan" (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with external "react" (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with external "react-dom/server" (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with external "uuid/v1" (<- Module is not an ECMAScript module) */function(e,t,r){"use strict";r.r(t);r("core-js/modules/es.regexp.to-string");var n=r("express"),a=r.n(n),o=r("react"),i=r.n(o),l=r("react-dom/server"),s=r.n(l),c=r("@material-ui/styles"),u=r("@material-ui/core/CssBaseline"),m=r.n(u),p=r("morgan"),d=r.n(p),f=(r("core-js/modules/web.dom-collections.iterator"),r("@babel/runtime/helpers/defineProperty")),b=r.n(f);const y=["shoulders","chest","arms","back","legs"],g=[{id:"overhead-press",title:"Overhead Press",description:"Delts exercise...",muscles:"shoulders"},{id:"dips",title:"Dips",description:"Triceps exercise...",muscles:"arms"},{id:"barbell-curls",title:"Barbell Curls",description:"Biceps exercise...",muscles:"arms"},{id:"bench-press",title:"Bench Press",description:"Chest exercise...",muscles:"chest"},{id:"pull-ups",title:"Pull Ups",description:"Back and biceps exercise...",muscles:"back"},{id:"deadlifts",title:"Deadlifts",description:"Back and leg exercise...",muscles:"back"},{id:"squats",title:"Squats",description:"Legs exercise...",muscles:"legs"}];var h=r("@babel/runtime/helpers/extends"),x=r.n(h);const{Provider:E,Consumer:j}=Object(o.createContext)(),v=e=>t=>i.a.createElement(j,null,r=>i.a.createElement(e,x()({},r,t)));var O=r("@material-ui/core"),P=r("@material-ui/icons/Add"),S=r.n(P),w=(r("core-js/modules/es.symbol.description"),r("core-js/modules/es.string.replace"),r("@material-ui/core/styles"));function C(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function k(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?C(Object(r),!0).forEach((function(t){b()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):C(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}const T=Object(w.makeStyles)(e=>({formControlField:{margin:e.spacing(1)},formButton:{margin:e.spacing(1),float:"right"}}));function q({onSubmit:e,muscles:t,exercise:r}){const n=T(),[a,l]=Object(o.useState)(s());function s(){return r||{title:"",description:"",muscles:""}}function c(e){return function({target:{value:t}}){l(k({},a,{[e]:t}))}}return i.a.createElement("form",null,i.a.createElement(O.TextField,{label:"Title",className:n.formControlField,value:a.title,onChange:c("title"),fullWidth:!0}),i.a.createElement(O.FormControl,{className:n.formControlField,fullWidth:!0},i.a.createElement(O.InputLabel,{htmlFor:"muscles"},"Muscles"),i.a.createElement(O.Select,{value:a.muscles,onChange:c("muscles")},t.map(e=>i.a.createElement(O.MenuItem,{key:e,value:e},e)))),i.a.createElement(O.TextField,{fullWidth:!0,label:"Description",className:n.formControlField,multiline:!0,rows:6,value:a.description,onChange:c("description")}),i.a.createElement(O.Button,{className:n.formButton,onClick:function(t){e(k({id:a.title.toLocaleLowerCase().replace(/ /g,"-")},a)),l(s())},color:"primary",variant:"contained",disabled:!a.title||!a.muscles},r?"Edit":"Create"))}var D=v((function(e){const[t,r]=Object(o.useState)(!1),{muscles:n,onCreate:a}=e;function l(){r(!t)}return i.a.createElement(i.a.Fragment,null,i.a.createElement(O.Fab,{color:"secondary",onClick:l,size:"small"},i.a.createElement(S.a,null)),i.a.createElement(O.Dialog,{open:t,onClose:l,maxWidth:"sm",fullWidth:!0},i.a.createElement(O.DialogTitle,null,"Create a new exercise"),i.a.createElement(O.DialogContent,null,i.a.createElement(O.DialogContentText,null,"Please fill out the form below"),i.a.createElement(q,{muscles:n,onSubmit:e=>{a(e),l()}}))))})),B=r("@material-ui/icons/Menu"),M=r.n(B);const N=Object(w.makeStyles)(e=>({root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}}));var F=function(){const e=N();return i.a.createElement("div",{className:e.root},i.a.createElement(O.AppBar,{position:"static"},i.a.createElement(O.Toolbar,null,i.a.createElement(O.IconButton,{edge:"start",className:e.menuButton,color:"inherit"},i.a.createElement(M.a,null)),i.a.createElement(O.Typography,{variant:"h6",className:e.title},"News"),i.a.createElement(D,null))))},I=r("uuid/v1"),L=r.n(I);var A=v((function(e){const{muscles:t,category:r,onCategorySelect:n}=e,a=r?t.findIndex(e=>e===r)+1:0,o=Object(w.useTheme)(),l=Object(O.useMediaQuery)(o.breakpoints.up("sm"));return i.a.createElement(O.Paper,null,i.a.createElement(O.Tabs,{value:a,onChange:function(e,r){n(0===r?"":t[r-1])},variant:l?"fullWidth":"scrollable",centered:!!l,textColor:"secondary",indicatorColor:"secondary",scrollButtons:"auto"},i.a.createElement(O.Tab,{label:"All",key:L()()}),t.map(e=>i.a.createElement(O.Tab,{key:L()(),label:e}))))})),W=r("@material-ui/icons/Delete"),_=r.n(W),G=r("@material-ui/icons/Edit"),R=r.n(G);const z=Object(w.makeStyles)(e=>({"@global":{"html, body, #root":{height:"100%"}},pane:{padding:e.spacing(2),overflowY:"auto",marginBottom:10,[e.breakpoints.up("sm")]:{height:"calc(100% - 10px)",marginTop:5},[e.breakpoints.down("xs")]:{height:"100%",marginTop:5}},container:{[e.breakpoints.up("sm")]:{height:"100%"},[e.breakpoints.down("xs")]:{height:"calc(100% - 56px - 48px)"}},item:{[e.breakpoints.down("xs")]:{height:"50%"}},titleText:{textTransform:"capitalize"},welcomeText:{marginTop:10}}));var Y=v((function(e){const t=z(),{exercisesByMuscles:r,category:n,editMode:a,muscles:o,exercise:l,exercise:{id:s,title:c="Welcome!",description:u="Please select an exercise from the list on the left"},onSelect:m,onDelete:p,onSelectEdit:d,onEdit:f}=e;return i.a.createElement(O.Grid,{container:!0,justify:"space-around",className:t.container},i.a.createElement(O.Grid,{className:t.item,item:!0,xs:12,sm:5},i.a.createElement(O.Paper,{className:t.pane},r.map(([e,r])=>n&&n!==e?null:i.a.createElement(i.a.Fragment,{key:e},i.a.createElement(O.Typography,{variant:"h5",className:t.titleText,color:"secondary"},e),i.a.createElement(O.List,{component:"ul"},r.map(({title:e,id:t})=>i.a.createElement(O.ListItem,{button:!0,onClick:()=>m(t),key:t},i.a.createElement(O.ListItemText,{primary:e}),i.a.createElement(O.ListItemSecondaryAction,null,i.a.createElement(O.IconButton,{onClick:()=>d(t),color:"primary"},i.a.createElement(R.a,null)),i.a.createElement(O.IconButton,{onClick:()=>p(t),color:"primary"},i.a.createElement(_.a,null)))))))))),i.a.createElement(O.Grid,{className:t.item,item:!0,xs:12,sm:5},i.a.createElement(O.Paper,{className:t.pane},a?i.a.createElement(q,{key:s,muscles:o,onSubmit:f,exercise:l}):i.a.createElement(i.a.Fragment,null,i.a.createElement(O.Typography,{variant:"h4",color:"secondary"},c),i.a.createElement(O.Typography,{variant:"subtitle1",className:t.welcomeText},u)))))}));function Q(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var U=function(){const[e,t]=Object(o.useState)(g),[r,n]=Object(o.useState)(""),[a,l]=Object(o.useState)({}),[s,c]=Object(o.useState)(void 0);function u(){const t=y.reduce((e,t)=>(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Q(Object(r),!0).forEach((function(t){b()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Q(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e})({},e,{[t]:[]}),{});return Object.entries(e.reduce((e,t)=>{const{muscles:r}=t;return e[r]=[...e[r],t],e},t))}function m(e){n(e)}function p(t){l(e.find(e=>e.id===t)),c(!1)}function d(r){t([...e,r])}function f(r){t(e.filter(e=>e.id!==r)),l(a.id===r?{}:a),c(a.id!==r&&s)}function h(t){c(!0),l(e.find(e=>e.id===t))}function x(r){t([...e.filter(e=>e.id!==r.id),r]),l(r),c(!1)}return i.a.createElement(E,{value:{muscles:y,exercises:e,exercise:a,category:r,editMode:s,exercisesByMuscles:u(),onCreate:d,onSelect:p,onCategorySelect:m,onEdit:x,onSelectEdit:h,onDelete:f}},i.a.createElement(F,null),i.a.createElement(Y,null),i.a.createElement(A,null))},H=r("@material-ui/core/colors");var J=Object(w.createMuiTheme)({palette:{primary:H.red,secondary:{main:H.amber[200],light:H.purple[100],dark:H.blue[600]},type:"dark"}});const K=a()();K.use(a.a.static("public")),K.use(d()("dev")),K.use((e,t)=>{const r=new c.ServerStyleSheets,n=s.a.renderToString(r.collect(i.a.createElement(c.ThemeProvider,{theme:J},i.a.createElement(m.a,null),i.a.createElement(U,null)))),a=r.toString();t.send('\n    <!DOCTYPE html>\n    <html lang="en">\n      <head>\n        <meta charset="utf-8" />\n        <meta name="viewport" content="width=device-width, initial-scale=1" />\n        <meta name="theme-color" content="#000000" />\n        <link\n          rel="stylesheet"\n          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"\n        />\n        <link\n          rel="stylesheet"\n          href="https://fonts.googleapis.com/icon?family=Material+Icons"\n        />\n        <style id="jss-server-side">'.concat(a,"</style>\n        <title>React App</title>\n      </head>\n      <body>\n        <script src='main.js' async><\/script>\n        <div id=\"root\">").concat(n,"</div>\n      </body>\n    </html>\n").trim())}),K.listen(5e3,()=>console.log("Listen to http://localhost:5000"))},"@babel/runtime/helpers/defineProperty":
/*!********************************************************!*\
  !*** external "@babel/runtime/helpers/defineProperty" ***!
  \********************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,t){e.exports=require("@babel/runtime/helpers/defineProperty")},"@babel/runtime/helpers/extends":
/*!*************************************************!*\
  !*** external "@babel/runtime/helpers/extends" ***!
  \*************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,t){e.exports=require("@babel/runtime/helpers/extends")},"@material-ui/core":
/*!************************************!*\
  !*** external "@material-ui/core" ***!
  \************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,t){e.exports=require("@material-ui/core")},"@material-ui/core/CssBaseline":
/*!************************************************!*\
  !*** external "@material-ui/core/CssBaseline" ***!
  \************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,t){e.exports=require("@material-ui/core/CssBaseline")},"@material-ui/core/colors":
/*!*******************************************!*\
  !*** external "@material-ui/core/colors" ***!
  \*******************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,t){e.exports=require("@material-ui/core/colors")},"@material-ui/core/styles":
/*!*******************************************!*\
  !*** external "@material-ui/core/styles" ***!
  \*******************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,t){e.exports=require("@material-ui/core/styles")},"@material-ui/icons/Add":
/*!*****************************************!*\
  !*** external "@material-ui/icons/Add" ***!
  \*****************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,t){e.exports=require("@material-ui/icons/Add")},"@material-ui/icons/Delete":
/*!********************************************!*\
  !*** external "@material-ui/icons/Delete" ***!
  \********************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,t){e.exports=require("@material-ui/icons/Delete")},"@material-ui/icons/Edit":
/*!******************************************!*\
  !*** external "@material-ui/icons/Edit" ***!
  \******************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,t){e.exports=require("@material-ui/icons/Edit")},"@material-ui/icons/Menu":
/*!******************************************!*\
  !*** external "@material-ui/icons/Menu" ***!
  \******************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,t){e.exports=require("@material-ui/icons/Menu")},"@material-ui/styles":
/*!**************************************!*\
  !*** external "@material-ui/styles" ***!
  \**************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,t){e.exports=require("@material-ui/styles")},"core-js/modules/es.regexp.to-string":
/*!******************************************************!*\
  !*** external "core-js/modules/es.regexp.to-string" ***!
  \******************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,t){e.exports=require("core-js/modules/es.regexp.to-string")},"core-js/modules/es.string.replace":
/*!****************************************************!*\
  !*** external "core-js/modules/es.string.replace" ***!
  \****************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,t){e.exports=require("core-js/modules/es.string.replace")},"core-js/modules/es.symbol.description":
/*!********************************************************!*\
  !*** external "core-js/modules/es.symbol.description" ***!
  \********************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,t){e.exports=require("core-js/modules/es.symbol.description")},"core-js/modules/web.dom-collections.iterator":
/*!***************************************************************!*\
  !*** external "core-js/modules/web.dom-collections.iterator" ***!
  \***************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,t){e.exports=require("core-js/modules/web.dom-collections.iterator")},express:
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,t){e.exports=require("express")},morgan:
/*!*************************!*\
  !*** external "morgan" ***!
  \*************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,t){e.exports=require("morgan")},react:
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,t){e.exports=require("react")},"react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,t){e.exports=require("react-dom/server")},"uuid/v1":
/*!**************************!*\
  !*** external "uuid/v1" ***!
  \**************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,t){e.exports=require("uuid/v1")}});
//# sourceMappingURL=main.js.map