/*! For license information please see 875a1f89.6830ef87.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[699744],{227399:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>l,frontMatter:()=>s,metadata:()=>o,toc:()=>d});var r=t(785893),i=t(511151);const s={id:"frontend-plugin-api.extensionblueprint.make_1",title:"ExtensionBlueprint.make()",description:"API reference for ExtensionBlueprint.make()"},a=void 0,o={id:"reference/frontend-plugin-api.extensionblueprint.make_1",title:"ExtensionBlueprint.make()",description:"API reference for ExtensionBlueprint.make()",source:"@site/../docs/reference/frontend-plugin-api.extensionblueprint.make_1.md",sourceDirName:"reference",slug:"/reference/frontend-plugin-api.extensionblueprint.make_1",permalink:"/docs/reference/frontend-plugin-api.extensionblueprint.make_1",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/frontend-plugin-api.extensionblueprint.make_1.md",tags:[],version:"current",frontMatter:{id:"frontend-plugin-api.extensionblueprint.make_1",title:"ExtensionBlueprint.make()",description:"API reference for ExtensionBlueprint.make()"}},c={},d=[{value:"Parameters",id:"parameters",level:2}];function p(e){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/reference/",children:"Home"})," > ",(0,r.jsx)(n.a,{href:"/docs/reference/frontend-plugin-api",children:(0,r.jsx)(n.code,{children:"@backstage/frontend-plugin-api"})})," > ",(0,r.jsx)(n.a,{href:"/docs/reference/frontend-plugin-api.extensionblueprint",children:(0,r.jsx)(n.code,{children:"ExtensionBlueprint"})})," > ",(0,r.jsx)(n.a,{href:"/docs/reference/frontend-plugin-api.extensionblueprint.make_1",children:(0,r.jsx)(n.code,{children:"make"})})]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"Warning: This API is now obsolete."}),"\n",(0,r.jsxs)(n.p,{children:["namespace is no longer required, you can safely remove this option and it will default to the ",(0,r.jsx)(n.code,{children:"pluginId"}),". It will be removed in a future release."]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Signature:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"make<TNewNamespace extends string | undefined, TNewName extends string | undefined>(args: {\n        namespace?: TNewNamespace;\n        name?: TNewName;\n        attachTo?: {\n            id: string;\n            input: string;\n        };\n        disabled?: boolean;\n        params: T['params'];\n    }): ExtensionDefinition<{\n        kind: T['kind'];\n        namespace: string | undefined extends TNewNamespace ? T['namespace'] : TNewNamespace;\n        name: string | undefined extends TNewName ? T['name'] : TNewName;\n        config: T['config'];\n        configInput: T['configInput'];\n        output: T['output'];\n        inputs: T['inputs'];\n    }>;\n"})}),"\n",(0,r.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameter"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"args"}),(0,r.jsx)(n.td,{children:"{ namespace?: TNewNamespace; name?: TNewName; attachTo?: { id: string; input: string; }; disabled?: boolean; params: T['params']; }"}),(0,r.jsx)(n.td,{})]})})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Returns:"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/reference/frontend-plugin-api.extensiondefinition",children:"ExtensionDefinition"}),"<{ kind: T['kind']; namespace: string | undefined extends TNewNamespace ? T['namespace'] : TNewNamespace; name: string | undefined extends TNewName ? T['name'] : TNewName; config: T['config']; configInput: T['configInput']; output: T['output']; inputs: T['inputs']; }>"]})]})}function l(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},675251:(e,n,t)=>{var r=t(667294),i=Symbol.for("react.element"),s=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,o=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function d(e,n,t){var r,s={},d=null,p=null;for(r in void 0!==t&&(d=""+t),void 0!==n.key&&(d=""+n.key),void 0!==n.ref&&(p=n.ref),n)a.call(n,r)&&!c.hasOwnProperty(r)&&(s[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===s[r]&&(s[r]=n[r]);return{$$typeof:i,type:e,key:d,ref:p,props:s,_owner:o.current}}n.Fragment=s,n.jsx=d,n.jsxs=d},785893:(e,n,t)=>{e.exports=t(675251)},511151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>a});var r=t(667294);const i={},s=r.createContext(i);function a(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);