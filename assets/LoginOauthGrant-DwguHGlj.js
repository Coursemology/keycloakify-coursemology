import{j as s}from"./index-thnRO-h7.js";import{c as m}from"./useGetClassName-C6T3rAQ4.js";import{u as g}from"./useGetClassName-_ZD4vPkB.js";function v(u){const{kcContext:t,i18n:c,doUseDefaultCss:n,classes:i,Template:j}=u,{url:x,oauth:o,client:a}=t,{msg:l,msgStr:r,advancedMsg:p,advancedMsgStr:h}=c,{getClassName:e}=g({doUseDefaultCss:n,classes:i});return s.jsx(j,Object.assign({},{kcContext:t,i18n:c,doUseDefaultCss:n,classes:i},{headerNode:l("oauthGrantTitle",a.name?h(a.name):a.clientId)},{children:s.jsxs("div",Object.assign({id:"kc-oauth",className:"content-area"},{children:[s.jsx("h3",{children:l("oauthGrantRequest")}),s.jsx("ul",{children:o.clientScopesRequested.map(d=>s.jsx("li",{children:s.jsx("span",{children:p(d.consentScreenText)})},d.consentScreenText))}),s.jsxs("form",Object.assign({className:"form-actions",action:x.oauthAction,method:"POST"},{children:[s.jsx("input",{type:"hidden",name:"code",value:o.code}),s.jsxs("div",Object.assign({className:e("kcFormGroupClass")},{children:[s.jsx("div",Object.assign({id:"kc-form-options"},{children:s.jsx("div",{className:e("kcFormOptionsWrapperClass")})})),s.jsx("div",Object.assign({id:"kc-form-buttons"},{children:s.jsxs("div",Object.assign({className:e("kcFormButtonsWrapperClass")},{children:[s.jsx("input",{className:m(e("kcButtonClass"),e("kcButtonPrimaryClass"),e("kcButtonLargeClass")),name:"accept",id:"kc-login",type:"submit",value:r("doYes")}),s.jsx("input",{className:m(e("kcButtonClass"),e("kcButtonDefaultClass"),e("kcButtonLargeClass")),name:"cancel",id:"kc-cancel",type:"submit",value:r("doNo")})]}))}))]}))]})),s.jsx("div",{className:"clearfix"})]}))}))}export{v as default};
//# sourceMappingURL=LoginOauthGrant-DwguHGlj.js.map
