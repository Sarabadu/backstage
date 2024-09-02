/*! For license information please see 99c9464d.2d8025bc.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[136323],{607566:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>u,contentTitle:()=>p,default:()=>s,frontMatter:()=>o,metadata:()=>r,toc:()=>g});var i=t(785893),a=t(511151);const o={id:"plugin-app.appplugin",title:"appPlugin",description:"API reference for appPlugin"},p=void 0,r={id:"reference/plugin-app.appplugin",title:"appPlugin",description:"API reference for appPlugin",source:"@site/../docs/reference/plugin-app.appplugin.md",sourceDirName:"reference",slug:"/reference/plugin-app.appplugin",permalink:"/docs/reference/plugin-app.appplugin",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-app.appplugin.md",tags:[],version:"current",frontMatter:{id:"plugin-app.appplugin",title:"appPlugin",description:"API reference for appPlugin"}},u={},g=[];function c(n){const e={a:"a",code:"code",p:"p",pre:"pre",strong:"strong",...(0,a.a)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.a,{href:"/docs/reference/",children:"Home"})," > ",(0,i.jsx)(e.a,{href:"/docs/reference/plugin-app",children:(0,i.jsx)(e.code,{children:"@backstage/plugin-app"})})," > ",(0,i.jsx)(e.a,{href:"/docs/reference/plugin-app.appplugin",children:(0,i.jsx)(e.code,{children:"appPlugin"})})]}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"Signature:"})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-typescript",children:'appPlugin: import("@backstage/frontend-plugin-api").FrontendPlugin<{}, {}, {\n    [x: `component:app/${string}`]: import("@backstage/frontend-plugin-api").ExtensionDefinition<{\n        config: {};\n        configInput: {};\n        output: import("@backstage/frontend-plugin-api").ConfigurableExtensionDataRef<{\n            ref: import("@backstage/frontend-plugin-api").ComponentRef;\n            impl: import("react").ComponentType;\n        }, "core.component.component", {}>;\n        inputs: {\n            [x: string]: import("@backstage/frontend-plugin-api").ExtensionInput<import("@backstage/frontend-plugin-api").AnyExtensionDataRef, {\n                optional: boolean;\n                singleton: boolean;\n            }>;\n        };\n        kind: "component";\n        namespace: string;\n        name: string;\n    }>;\n    app: import("@backstage/frontend-plugin-api").ExtensionDefinition<{\n        config: {};\n        configInput: {};\n        output: import("@backstage/frontend-plugin-api").ConfigurableExtensionDataRef<import("react").JSX.Element, "core.reactElement", {}>;\n        inputs: {\n            root: import("@backstage/frontend-plugin-api").ExtensionInput<import("@backstage/frontend-plugin-api").ConfigurableExtensionDataRef<import("react").JSX.Element, "core.reactElement", {}>, {\n                singleton: true;\n                optional: false;\n            }>;\n        };\n        kind: undefined;\n        namespace: undefined;\n        name: undefined;\n    }>;\n    "api:app/app-language": import("@backstage/frontend-plugin-api").ExtensionDefinition<{\n        kind: "api";\n        namespace: undefined;\n        name: "app-language";\n        config: {};\n        configInput: {};\n        output: import("@backstage/frontend-plugin-api").ConfigurableExtensionDataRef<import("@backstage/frontend-plugin-api").AnyApiFactory, "core.api.factory", {}>;\n        inputs: {};\n    }>;\n    "app/layout": import("@backstage/frontend-plugin-api").ExtensionDefinition<{\n        config: {};\n        configInput: {};\n        output: import("@backstage/frontend-plugin-api").ConfigurableExtensionDataRef<import("react").JSX.Element, "core.reactElement", {}>;\n        inputs: {\n            nav: import("@backstage/frontend-plugin-api").ExtensionInput<import("@backstage/frontend-plugin-api").ConfigurableExtensionDataRef<import("react").JSX.Element, "core.reactElement", {}>, {\n                singleton: true;\n                optional: false;\n            }>;\n            content: import("@backstage/frontend-plugin-api").ExtensionInput<import("@backstage/frontend-plugin-api").ConfigurableExtensionDataRef<import("react").JSX.Element, "core.reactElement", {}>, {\n                singleton: true;\n                optional: false;\n            }>;\n        };\n        kind: undefined;\n        namespace: undefined;\n        name: "layout";\n    }>;\n    "app/nav": import("@backstage/frontend-plugin-api").ExtensionDefinition<{\n        config: {};\n        configInput: {};\n        output: import("@backstage/frontend-plugin-api").ConfigurableExtensionDataRef<import("react").JSX.Element, "core.reactElement", {}>;\n        inputs: {\n            items: import("@backstage/frontend-plugin-api").ExtensionInput<import("@backstage/frontend-plugin-api").ConfigurableExtensionDataRef<{\n                title: string;\n                icon: import("@backstage/core-plugin-api").IconComponent;\n                routeRef: import("@backstage/frontend-plugin-api").RouteRef<undefined>;\n            }, "core.nav-item.target", {}>, {\n                singleton: false;\n                optional: false;\n            }>;\n            logos: import("@backstage/frontend-plugin-api").ExtensionInput<import("@backstage/frontend-plugin-api").ConfigurableExtensionDataRef<{\n                logoIcon?: JSX.Element | undefined;\n                logoFull?: JSX.Element | undefined;\n            }, "core.nav-logo.logo-elements", {}>, {\n                singleton: true;\n                optional: true;\n            }>;\n        };\n        kind: undefined;\n        namespace: undefined;\n        name: "nav";\n    }>;\n    "app/root": import("@backstage/frontend-plugin-api").ExtensionDefinition<{\n        config: {};\n        configInput: {};\n        output: import("@backstage/frontend-plugin-api").ConfigurableExtensionDataRef<import("react").JSX.Element, "core.reactElement", {}>;\n        inputs: {\n            router: import("@backstage/frontend-plugin-api").ExtensionInput<import("@backstage/frontend-plugin-api").ConfigurableExtensionDataRef<import("react").ComponentType<{\n                children?: import("react").ReactNode;\n            }>, "app.router.wrapper", {}>, {\n                singleton: true;\n                optional: true;\n            }>;\n            signInPage: import("@backstage/frontend-plugin-api").ExtensionInput<import("@backstage/frontend-plugin-api").ConfigurableExtensionDataRef<import("react").ComponentType<import("@backstage/core-plugin-api").SignInPageProps>, "core.sign-in-page.component", {}>, {\n                singleton: true;\n                optional: true;\n            }>;\n            children: import("@backstage/frontend-plugin-api").ExtensionInput<import("@backstage/frontend-plugin-api").ConfigurableExtensionDataRef<import("react").JSX.Element, "core.reactElement", {}>, {\n                singleton: true;\n                optional: false;\n            }>;\n            elements: import("@backstage/frontend-plugin-api").ExtensionInput<import("@backstage/frontend-plugin-api").ConfigurableExtensionDataRef<import("react").JSX.Element, "core.reactElement", {}>, {\n                singleton: false;\n                optional: false;\n            }>;\n            wrappers: import("@backstage/frontend-plugin-api").ExtensionInput<import("@backstage/frontend-plugin-api").ConfigurableExtensionDataRef<import("react").ComponentType<{\n                children?: import("react").ReactNode;\n            }>, "app.root.wrapper", {}>, {\n                singleton: false;\n                optional: false;\n            }>;\n        };\n        kind: undefined;\n        namespace: undefined;\n        name: "root";\n    }>;\n    "app/routes": import("@backstage/frontend-plugin-api").ExtensionDefinition<{\n        config: {};\n        configInput: {};\n        output: import("@backstage/frontend-plugin-api").ConfigurableExtensionDataRef<import("react").JSX.Element, "core.reactElement", {}>;\n        inputs: {\n            routes: import("@backstage/frontend-plugin-api").ExtensionInput<import("@backstage/frontend-plugin-api").ConfigurableExtensionDataRef<import("react").JSX.Element, "core.reactElement", {}> | import("@backstage/frontend-plugin-api").ConfigurableExtensionDataRef<string, "core.routing.path", {}> | import("@backstage/frontend-plugin-api").ConfigurableExtensionDataRef<import("@backstage/frontend-plugin-api").RouteRef<import("@backstage/frontend-plugin-api").AnyRouteRefParams>, "core.routing.ref", {\n                optional: true;\n            }>, {\n                singleton: false;\n                optional: false;\n            }>;\n        };\n        kind: undefined;\n        namespace: undefined;\n        name: "routes";\n    }>;\n    "api:app/app-theme": import("@backstage/frontend-plugin-api").ExtensionDefinition<{\n        config: {};\n        configInput: {};\n        output: import("@backstage/frontend-plugin-api").ConfigurableExtensionDataRef<import("@backstage/frontend-plugin-api").AnyApiFactory, "core.api.factory", {}>;\n        inputs: {\n            themes: import("@backstage/frontend-plugin-api").ExtensionInput<import("@backstage/frontend-plugin-api").ConfigurableExtensionDataRef<import("@backstage/frontend-plugin-api").AppTheme, "core.theme.theme", {}>, {\n                singleton: false;\n                optional: false;\n            }>;\n        };\n        kind: "api";\n        namespace: undefined;\n        name: "app-theme";\n    }>;\n    "theme:app/light": import("@backstage/frontend-plugin-api").ExtensionDefinition<{\n        kind: "theme";\n        namespace: undefined;\n        name: "light";\n        config: {};\n        configInput: {};\n        output: import("@backstage/frontend-plugin-api").ConfigurableExtensionDataRef<import("@backstage/frontend-plugin-api").AppTheme, "core.theme.theme", {}>;\n        inputs: {};\n    }>;\n    "theme:app/dark": import("@backstage/frontend-plugin-api").ExtensionDefinition<{\n        kind: "theme";\n        namespace: undefined;\n        name: "dark";\n        config: {};\n        configInput: {};\n        output: import("@backstage/frontend-plugin-api").ConfigurableExtensionDataRef<import("@backstage/frontend-plugin-api").AppTheme, "core.theme.theme", {}>;\n        inputs: {};\n    }>;\n    "api:app/components": import("@backstage/frontend-plugin-api").ExtensionDefinition<{\n        config: {};\n        configInput: {};\n        output: import("@backstage/frontend-plugin-api").ConfigurableExtensionDataRef<import("@backstage/frontend-plugin-api").AnyApiFactory, "core.api.factory", {}>;\n        inputs: {\n            components: import("@backstage/frontend-plugin-api").ExtensionInput<import("@backstage/frontend-plugin-api").ConfigurableExtensionDataRef<{\n                ref: import("@backstage/frontend-plugin-api").ComponentRef;\n                impl: import("react").ComponentType;\n            }, "core.component.component", {}>, {\n                singleton: false;\n                optional: false;\n            }>;\n        };\n        kind: "api";\n        namespace: undefined;\n        name: "components";\n    }>;\n    "api:app/icons": import("@backstage/frontend-plugin-api").ExtensionDefinition<{\n        config: {};\n        configInput: {};\n        output: import("@backstage/frontend-plugin-api").ConfigurableExtensionDataRef<import("@backstage/frontend-plugin-api").AnyApiFactory, "core.api.factory", {}>;\n        inputs: {\n            icons: import("@backstage/frontend-plugin-api").ExtensionInput<import("@backstage/frontend-plugin-api").ConfigurableExtensionDataRef<{\n                [x: string]: import("@backstage/frontend-plugin-api").IconComponent;\n            }, "core.icons", {}>, {\n                singleton: false;\n                optional: false;\n            }>;\n        };\n        kind: "api";\n        namespace: undefined;\n        name: "icons";\n    }>;\n    "api:app/feature-flags": import("@backstage/frontend-plugin-api").ExtensionDefinition<{\n        kind: "api";\n        namespace: undefined;\n        name: "feature-flags";\n        config: {};\n        configInput: {};\n        output: import("@backstage/frontend-plugin-api").ConfigurableExtensionDataRef<import("@backstage/frontend-plugin-api").AnyApiFactory, "core.api.factory", {}>;\n        inputs: {};\n    }>;\n    "api:app/translations": import("@backstage/frontend-plugin-api").ExtensionDefinition<{\n        config: {};\n        configInput: {};\n        output: import("@backstage/frontend-plugin-api").ConfigurableExtensionDataRef<import("@backstage/frontend-plugin-api").AnyApiFactory, "core.api.factory", {}>;\n        inputs: {\n            translations: import("@backstage/frontend-plugin-api").ExtensionInput<import("@backstage/frontend-plugin-api").ConfigurableExtensionDataRef<import("@backstage/frontend-plugin-api").TranslationResource<string> | import("@backstage/frontend-plugin-api").TranslationMessages<string, {\n                [x: string]: string;\n            }, boolean>, "core.translation.translation", {}>, {\n                singleton: false;\n                optional: false;\n            }>;\n        };\n        kind: "api";\n        namespace: undefined;\n        name: "translations";\n    }>;\n    "app-root-element:app/oauth-request-dialog": import("@backstage/frontend-plugin-api").ExtensionDefinition<{\n        kind: "app-root-element";\n        namespace: undefined;\n        name: "oauth-request-dialog";\n        config: {};\n        configInput: {};\n        output: import("@backstage/frontend-plugin-api").ConfigurableExtensionDataRef<import("react").JSX.Element, "core.reactElement", {}>;\n        inputs: {};\n    }>;\n    "app-root-element:app/alert-display": import("@backstage/frontend-plugin-api").ExtensionDefinition<{\n        config: {\n            transientTimeoutMs: number;\n            anchorOrigin: {\n                horizontal: "center" | "left" | "right";\n                vertical: "top" | "bottom";\n            };\n        };\n        configInput: {\n            anchorOrigin?: {\n                horizontal?: "center" | "left" | "right" | undefined;\n                vertical?: "top" | "bottom" | undefined;\n            } | undefined;\n            transientTimeoutMs?: number | undefined;\n        };\n        output: import("@backstage/frontend-plugin-api").ConfigurableExtensionDataRef<import("react").JSX.Element, "core.reactElement", {}>;\n        inputs: {\n            [x: string]: import("@backstage/frontend-plugin-api").ExtensionInput<import("@backstage/frontend-plugin-api").AnyExtensionDataRef, {\n                optional: boolean;\n                singleton: boolean;\n            }>;\n        };\n        kind: "app-root-element";\n        namespace: undefined;\n        name: "alert-display";\n    }>;\n    "api:app/discovery": import("@backstage/frontend-plugin-api").ExtensionDefinition<{\n        kind: "api";\n        namespace: undefined;\n        name: "discovery";\n        config: {};\n        configInput: {};\n        output: import("@backstage/frontend-plugin-api").ConfigurableExtensionDataRef<import("@backstage/frontend-plugin-api").AnyApiFactory, "core.api.factory", {}>;\n        inputs: {};\n    }>;\n    "api:app/alert": import("@backstage/frontend-plugin-api").ExtensionDefinition<{\n        kind: "api";\n        namespace: undefined;\n        name: "alert";\n        config: {};\n        configInput: {};\n        output: import("@backstage/frontend-plugin-api").ConfigurableExtensionDataRef<import("@backstage/frontend-plugin-api").AnyApiFactory, "core.api.factory", {}>;\n        inputs: {};\n    }>;\n    "api:app/analytics": import("@backstage/frontend-plugin-api").ExtensionDefinition<{\n        kind: "api";\n        namespace: undefined;\n        name: "analytics";\n        config: {};\n        configInput: {};\n        output: import("@backstage/frontend-plugin-api").ConfigurableExtensionDataRef<import("@backstage/frontend-plugin-api").AnyApiFactory, "core.api.factory", {}>;\n        inputs: {};\n    }>;\n    "api:app/error": import("@backstage/frontend-plugin-api").ExtensionDefinition<{\n        kind: "api";\n        namespace: undefined;\n        name: "error";\n        config: {};\n        configInput: {};\n        output: import("@backstage/frontend-plugin-api").ConfigurableExtensionDataRef<import("@backstage/frontend-plugin-api").AnyApiFactory, "core.api.factory", {}>;\n        inputs: {};\n    }>;\n    "api:app/storage": import("@backstage/frontend-plugin-api").ExtensionDefinition<{\n        kind: "api";\n        namespace: undefined;\n        name: "storage";\n        config: {};\n        configInput: {};\n        output: import("@backstage/frontend-plugin-api").ConfigurableExtensionDataRef<import("@backstage/frontend-plugin-api").AnyApiFactory, "core.api.factory", {}>;\n        inputs: {};\n    }>;\n    "api:app/fetch": import("@backstage/frontend-plugin-api").ExtensionDefinition<{\n        kind: "api";\n        namespace: undefined;\n        name: "fetch";\n        config: {};\n        configInput: {};\n        output: import("@backstage/frontend-plugin-api").ConfigurableExtensionDataRef<import("@backstage/frontend-plugin-api").AnyApiFactory, "core.api.factory", {}>;\n        inputs: {};\n    }>;\n    "api:app/oauth-request": import("@backstage/frontend-plugin-api").ExtensionDefinition<{\n        kind: "api";\n        namespace: undefined;\n        name: "oauth-request";\n        config: {};\n        configInput: {};\n        output: import("@backstage/frontend-plugin-api").ConfigurableExtensionDataRef<import("@backstage/frontend-plugin-api").AnyApiFactory, "core.api.factory", {}>;\n        inputs: {};\n    }>;\n    "api:app/google-auth": import("@backstage/frontend-plugin-api").ExtensionDefinition<{\n        kind: "api";\n        namespace: undefined;\n        name: "google-auth";\n        config: {};\n        configInput: {};\n        output: import("@backstage/frontend-plugin-api").ConfigurableExtensionDataRef<import("@backstage/frontend-plugin-api").AnyApiFactory, "core.api.factory", {}>;\n        inputs: {};\n    }>;\n    "api:app/microsoft-auth": import("@backstage/frontend-plugin-api").ExtensionDefinition<{\n        kind: "api";\n        namespace: undefined;\n        name: "microsoft-auth";\n        config: {};\n        configInput: {};\n        output: import("@backstage/frontend-plugin-api").ConfigurableExtensionDataRef<import("@backstage/frontend-plugin-api").AnyApiFactory, "core.api.factory", {}>;\n        inputs: {};\n    }>;\n    "api:app/github-auth": import("@backstage/frontend-plugin-api").ExtensionDefinition<{\n        kind: "api";\n        namespace: undefined;\n        name: "github-auth";\n        config: {};\n        configInput: {};\n        output: import("@backstage/frontend-plugin-api").ConfigurableExtensionDataRef<import("@backstage/frontend-plugin-api").AnyApiFactory, "core.api.factory", {}>;\n        inputs: {};\n    }>;\n    "api:app/okta-auth": import("@backstage/frontend-plugin-api").ExtensionDefinition<{\n        kind: "api";\n        namespace: undefined;\n        name: "okta-auth";\n        config: {};\n        configInput: {};\n        output: import("@backstage/frontend-plugin-api").ConfigurableExtensionDataRef<import("@backstage/frontend-plugin-api").AnyApiFactory, "core.api.factory", {}>;\n        inputs: {};\n    }>;\n    "api:app/gitlab-auth": import("@backstage/frontend-plugin-api").ExtensionDefinition<{\n        kind: "api";\n        namespace: undefined;\n        name: "gitlab-auth";\n        config: {};\n        configInput: {};\n        output: import("@backstage/frontend-plugin-api").ConfigurableExtensionDataRef<import("@backstage/frontend-plugin-api").AnyApiFactory, "core.api.factory", {}>;\n        inputs: {};\n    }>;\n    "api:app/onelogin-auth": import("@backstage/frontend-plugin-api").ExtensionDefinition<{\n        kind: "api";\n        namespace: undefined;\n        name: "onelogin-auth";\n        config: {};\n        configInput: {};\n        output: import("@backstage/frontend-plugin-api").ConfigurableExtensionDataRef<import("@backstage/frontend-plugin-api").AnyApiFactory, "core.api.factory", {}>;\n        inputs: {};\n    }>;\n    "api:app/bitbucket-auth": import("@backstage/frontend-plugin-api").ExtensionDefinition<{\n        kind: "api";\n        namespace: undefined;\n        name: "bitbucket-auth";\n        config: {};\n        configInput: {};\n        output: import("@backstage/frontend-plugin-api").ConfigurableExtensionDataRef<import("@backstage/frontend-plugin-api").AnyApiFactory, "core.api.factory", {}>;\n        inputs: {};\n    }>;\n    "api:app/bitbucket-server-auth": import("@backstage/frontend-plugin-api").ExtensionDefinition<{\n        kind: "api";\n        namespace: undefined;\n        name: "bitbucket-server-auth";\n        config: {};\n        configInput: {};\n        output: import("@backstage/frontend-plugin-api").ConfigurableExtensionDataRef<import("@backstage/frontend-plugin-api").AnyApiFactory, "core.api.factory", {}>;\n        inputs: {};\n    }>;\n    "api:app/atlassian-auth": import("@backstage/frontend-plugin-api").ExtensionDefinition<{\n        kind: "api";\n        namespace: undefined;\n        name: "atlassian-auth";\n        config: {};\n        configInput: {};\n        output: import("@backstage/frontend-plugin-api").ConfigurableExtensionDataRef<import("@backstage/frontend-plugin-api").AnyApiFactory, "core.api.factory", {}>;\n        inputs: {};\n    }>;\n    "api:app/vmware-cloud-auth": import("@backstage/frontend-plugin-api").ExtensionDefinition<{\n        kind: "api";\n        namespace: undefined;\n        name: "vmware-cloud-auth";\n        config: {};\n        configInput: {};\n        output: import("@backstage/frontend-plugin-api").ConfigurableExtensionDataRef<import("@backstage/frontend-plugin-api").AnyApiFactory, "core.api.factory", {}>;\n        inputs: {};\n    }>;\n    "api:app/permission": import("@backstage/frontend-plugin-api").ExtensionDefinition<{\n        kind: "api";\n        namespace: undefined;\n        name: "permission";\n        config: {};\n        configInput: {};\n        output: import("@backstage/frontend-plugin-api").ConfigurableExtensionDataRef<import("@backstage/frontend-plugin-api").AnyApiFactory, "core.api.factory", {}>;\n        inputs: {};\n    }>;\n}>\n'})})]})}function s(n={}){const{wrapper:e}={...(0,a.a)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(c,{...n})}):c(n)}},675251:(n,e,t)=>{var i=t(667294),a=Symbol.for("react.element"),o=Symbol.for("react.fragment"),p=Object.prototype.hasOwnProperty,r=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function g(n,e,t){var i,o={},g=null,c=null;for(i in void 0!==t&&(g=""+t),void 0!==e.key&&(g=""+e.key),void 0!==e.ref&&(c=e.ref),e)p.call(e,i)&&!u.hasOwnProperty(i)&&(o[i]=e[i]);if(n&&n.defaultProps)for(i in e=n.defaultProps)void 0===o[i]&&(o[i]=e[i]);return{$$typeof:a,type:n,key:g,ref:c,props:o,_owner:r.current}}e.Fragment=o,e.jsx=g,e.jsxs=g},785893:(n,e,t)=>{n.exports=t(675251)},511151:(n,e,t)=>{t.d(e,{Z:()=>r,a:()=>p});var i=t(667294);const a={},o=i.createContext(a);function p(n){const e=i.useContext(o);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(a):n.components||a:p(n.components),i.createElement(o.Provider,{value:e},n.children)}}}]);