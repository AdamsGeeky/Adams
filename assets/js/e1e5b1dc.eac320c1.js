"use strict";(self.webpackChunkGeek_ink=self.webpackChunkGeek_ink||[]).push([[10],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>h});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=r.createContext({}),l=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=l(e.components);return r.createElement(u.Provider,{value:n},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=l(t),m=a,h=c["".concat(u,".").concat(m)]||c[m]||d[m]||o;return t?r.createElement(h,i(i({ref:n},p),{},{components:t})):r.createElement(h,i({ref:n},p))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=m;var s={};for(var u in n)hasOwnProperty.call(n,u)&&(s[u]=n[u]);s.originalType=e,s[c]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},3576:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=t(7462),a=(t(7294),t(3905));const o={sidebar_position:7},i="Functions and Creativity",s={unversionedId:"python/Day6",id:"python/Day6",title:"Functions and Creativity",description:"explore modular programming concepts in Python with some code examples.",source:"@site/docs/python/Day6.mdx",sourceDirName:"python",slug:"/python/Day6",permalink:"/docs/python/Day6",draft:!1,editUrl:"https://github.com/AdamsGeeky/docs/python/Day6.mdx",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Functions and Creativity (Day 5)",permalink:"/docs/python/Day5"},next:{title:"The Journey Forward",permalink:"/docs/python/forward"}},u={},l=[],p={toc:l},c="wrapper";function d(e){let{components:n,...t}=e;return(0,a.kt)(c,(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"functions-and-creativity"},"Functions and Creativity"),(0,a.kt)("p",null,"explore modular programming concepts in Python with some code examples."),(0,a.kt)("h1",{id:"module-design"},"Module Design:"),(0,a.kt)("p",null,"Suppose you're working on a simple project that involves handling user authentication and generating secure tokens. You can break down this project into two modules: one for authentication and one for token generation."),(0,a.kt)("p",null,"auth_module.py:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'def authenticate(username, password):\n    # Authentication logic\n    if username == "user" and password == "pass":\n        return True\n    return False\n')),(0,a.kt)("p",null,"token_module.py:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"import random\nimport string\n\ndef generate_token(length=16):\n    characters = string.ascii_letters + string.digits\n    token = ''.join(random.choice(characters) for _ in range(length))\n    return token\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Dependency Management:")),(0,a.kt)("p",null,"Let's say the token generation module depends on the authentication module. Here's how you can use the auth_module in the token_module:"),(0,a.kt)("p",null,"token_module.py:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"import auth_module\n\ndef generate_token_if_authenticated(username, password, length=16):\n    if auth_module.authenticate(username, password):\n        token = generate_token(length)\n        return token\n    else:\n        return None\n")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Encapsulation:")),(0,a.kt)("p",null,"Ensure that your modules encapsulate their internal details. Only expose what's necessary. For instance, users of the auth_module should only interact with the authenticate function:"),(0,a.kt)("p",null,"auth_module.py:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'def authenticate(username, password):\n    # Authentication logic\n    if username == "user" and password == "pass":\n        return True\n    return False\n')),(0,a.kt)("h1",{id:"internal-function-not-exposed-to-users"},"Internal function not exposed to users"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py"},"def _internal_helper():\n    pass\n4. Code Organization:\n\nOrganize your project structure to reflect the modular design:\n\n```css\nproject/\n\u2502\n\u251c\u2500\u2500 auth_module.py\n\u251c\u2500\u2500 token_module.py\n\u2514\u2500\u2500 main.py\n")),(0,a.kt)("p",null,"main.py:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'import auth_module\nimport token_module\n\ndef main():\n    username = input("Username: ")\n    password = input("Password: ")\n\n    if auth_module.authenticate(username, password):\n        token = token_module.generate_token()\n        print(f"Token: {token}")\n    else:\n        print("Authentication failed.")\n\nif __name__ == "__main__":\n    main()\n')),(0,a.kt)("ol",{start:5},(0,a.kt)("li",{parentName:"ol"},"Testing and Validation:")),(0,a.kt)("p",null,"Write unit tests to ensure each module functions correctly. Here's a basic example using Python's built-in unittest framework:"),(0,a.kt)("p",null,"test_auth_module.py:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'\nimport unittest\nimport auth_module\n\nclass TestAuthModule(unittest.TestCase):\n    def test_authentication_success(self):\n        self.assertTrue(auth_module.authenticate("user", "pass"))\n\n    def test_authentication_failure(self):\n        self.assertFalse(auth_module.authenticate("user", "wrongpass"))\n\nif __name__ == "__main__":\n    unittest.main()\nThese examples demonstrate how you can apply modular programming concepts in Python. By breaking down your project into modular components with clear interfaces and encapsulation, you make your codebase more manageable, scalable, and collaborative.\n')))}d.isMDXComponent=!0}}]);