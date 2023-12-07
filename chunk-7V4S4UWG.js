import{a as v}from"./chunk-ZJMLONPG.js";import{b as u}from"./chunk-7LZEMMX5.js";import"./chunk-ETM6BSIJ.js";import"./chunk-UG4A22X3.js";import{Fb as r,Ua as n,aa as c,eb as o,kb as i,lb as e,mb as l,tc as p,xb as t}from"./chunk-Z37IT2PE.js";import"./chunk-CWTPBX7D.js";var g=(()=>{let d=class d{constructor(){this.installNpm="npm i @ultima-ui/components",this.installIcons="npm i @iconify-json/ph",this.tailwindContent=`/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,ts}',
    './projects/**/*.{html,ts}'
  ],
  presets: [
    require('@ultima-ui/components/preset')
  ],
  theme: {
    extend: {
    },
  },
  plugins: [
  ],
}`,this.postcssContent=`module.exports = {
  plugins: {
    'postcss-import': {},
    'tailwindcss/nesting': {},
    tailwindcss: {},
    autoprefixer: {},
  }
}`,this.installFont="npm i @fontsource/golos-text",this.tailwindStyles=`@import '@fontsource/golos-text/400.css';
@import '@fontsource/golos-text/500.css';
@import '@fontsource/golos-text/700.css';
@import "@ultima-ui/components/styles/index.css";

@tailwind base;
@tailwind components;
@tailwind utilities;`,this.runApp="npm start"}};d.\u0275fac=function(a){return new(a||d)},d.\u0275cmp=c({type:d,selectors:[["app-install"]],standalone:!0,features:[r],decls:42,vars:7,consts:[[1,"grid","grid-cols-12","gap-10"],[1,"col-span-8","space-y-8"],[1,"text-2xl","font-bold","mt-0"],[1,"mb-4"],[3,"code"],["inlineCode",""],["href","https://phosphoricons.com/","target","_blank"]],template:function(a,s){a&1&&(i(0,"div",0)(1,"div",1)(2,"h2",2),t(3,"Install"),e(),i(4,"div")(5,"div",3),t(6,"Install components"),e(),l(7,"code-block",4),e(),i(8,"div")(9,"div",3),t(10,"Add a file "),i(11,"code",5),t(12,"tailwind.config.js"),e(),t(13," with content:"),e(),l(14,"code-block",4),e(),i(15,"div")(16,"div",3),t(17,"Add a file "),i(18,"code",5),t(19,"postcss.config.js"),e(),t(20," with content:"),e(),l(21,"code-block",4),e(),i(22,"div")(23,"div",3),t(24,"Install Font"),e(),l(25,"code-block",4),e(),i(26,"div")(27,"div",3),t(28,"Add tailwind styles and font to "),i(29,"code",5),t(30,"styles.css"),e()(),l(31,"code-block",4),e(),i(32,"div")(33,"div",3),t(34,"Install "),i(35,"a",6),t(36,"Phosphor icon library"),e()(),l(37,"code-block",4),e(),i(38,"div")(39,"div",3),t(40,"Run dev application"),e(),l(41,"code-block",4),e()()()),a&2&&(n(7),o("code",s.installNpm),n(7),o("code",s.tailwindContent),n(7),o("code",s.postcssContent),n(4),o("code",s.installFont),n(6),o("code",s.tailwindStyles),n(6),o("code",s.installIcons),n(4),o("code",s.runApp))},dependencies:[p,v,u],encapsulation:2});let m=d;return m})();export{g as InstallComponent};
