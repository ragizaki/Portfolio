import{W as f,s as r,C as u,j as n,F as g,a as y,L as x,r as b,I as v,b as a,c as k,d as w,e as z,f as j,g as L,R as I,h as C}from"./vendor.11b3adfa.js";const S=function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function c(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerpolicy&&(o.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?o.credentials="include":t.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(t){if(t.ep)return;t.ep=!0;const o=c(t);fetch(t.href,o)}};S();const F=f`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Red Hat Display';
    }
`,m=r.div`
    width: 100%;
    max-width: 1250px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 100px;

    @media screen and (max-width: 990px) {
        padding-right: 30px;
        padding-left: 30px;
    }
`,N=u`
    display: inline-flex;
    justify-content: center;
    align-items: center;

    padding: 7px 15px;
    margin-right: 10px;
    font-size: 1rem;
    border-radius: 20px;

    appearance: none;
    text-decoration: none;
    cursor: pointer;
    transition: all 300ms ease;

    > * {
        margin-right: 8px;
    }
`,h=r.a`
    ${N}

    color: ${e=>e.secondary?e.theme.black:e.theme.white};
    background: ${e=>e.secondary?e.theme.white:e.theme.primary};
    border: 1px solid ${e=>e.secondary?e.theme.black:e.theme.primary};
    margin-right: 20px;

    &:hover {
        color: ${e=>e.secondary?e.theme.hover:e.theme.white};
        background: ${e=>e.secondary?e.theme.white:e.theme.hover};
        border-color: ${e=>e.theme.hover};
    }
`,p={primary:"#1e96fc",white:"#fff",black:"#000",hover:"#3da5d9"},B=[{id:"experience",value:"Experience",key:0},{id:"about",value:"About",key:1},{id:"projects",value:"Projects",key:2}],O={heading:"Zaki Machfj",position:"Software Developer",company:"Dejero Labs",tags:[{value:"Developer",id:0},{value:"Student",id:1},{value:"Learner",id:2}],socials:[{id:0,platform:"Github",icon:n(g,{}),href:"https://github.com/ragizaki",secondary:!0},{id:1,platform:"LinkedIn",icon:n(y,{}),href:"https://linkedin.com/in/zaki-machfj",secondary:!1}]},R=r(m)`
    display: flex;
    flex-direction: column;
    justify-content: start;
    padding-top: 3rem;
    height: calc(100vh - 80px);
`,D=r.h1`
    font-size: 3.5rem;
    font-weight: bold;
    color: black;
    margin-bottom: 1.5rem;

    @media screen and (max-width: 960px) {
        font-size: 3rem;
    }
`,d=r.p`
    font-size: 1.5rem;
    text-decoration: capitalize;
    color: black;
    margin-bottom: 25px;

    @media screen and (max-width: 960px) {
        padding: 0 20px;
        line-height: 40px;
    }
`,$=r.div`
    margin-top: 20px;
`,M=r.nav`
    background: #fff;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    position: sticky;
    top: 0;
    z-index: 100;
`,T=r(m)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 80px;
    padding: 0 70px;
`,H=r.a`
    color: black;
    justify-self: flex-start;
    text-decoration: none;
    cursor: pointer;
    font-size: 1.2rem;
    font-weight: bold;
    transition: 200ms all ease;

    &:hover {
        opacity: 0.7;
        transform: translateY(-10%);
    }
`,P=r.div`
    display: none;

    @media screen and (max-width: 960px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.7rem;
        cursor: pointer;
    }
`,A=r.ul`
    list-style: none;
    text-align: center;

    /* @media screen and (max-width: 960px) {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 90vh;
        position: absolute;
        top: 80px;
        opacity: 1;
        transition: all 0.5s ease-in;
        background: #101522;
    } */
`,E=r(x)`
    color: black;
    text-transform: capitalize;
    margin-right: 30px;
    cursor: pointer;
    transition: all 200ms ease-in;
    font-size: 1.1rem;
    font-weight: 500;

    &:hover {
        opacity: 0.6;
        transform: translateY(-10%);
    }
`,G=r(h)`
    font-size: 0.9rem;
`;var W="/zaki/assets/Resume.8056b40d.pdf";const Y=()=>{const[e,i]=b.exports.useState(!1),c=()=>i(t=>!t),s=()=>z.scrollToTop();return n(M,{children:n(v.Provider,{value:{color:p.white},children:a(T,{children:[n(H,{onClick:s,children:"ZM."}),a(A,{children:[B.map(t=>n(E,{to:t.id,children:t.value},t.key)),n(G,{secondary:!1,href:W,target:"_blank",rel:"noreffer",children:"Open Resume"})]}),n(P,{onClick:c,children:e?n(k,{}):n(w,{})})]})})})},Z=()=>{const{heading:e,socials:i,position:c,company:s}=O;return a(j,{children:[n(Y,{}),a(R,{children:[n(D,{children:e}),n(d,{children:"Hey there, welcome to my website! I'm a second year Computer Science student at UWaterloo."}),a(d,{children:["I'm currently interning at ",n("strong",{children:s})," as a ",n("strong",{children:c}),"."]}),n(d,{children:"Feel free to reach out or check my work at the socials below!"}),n($,{children:i.map(t=>a(h,{secondary:t.secondary,href:t.href,target:"_blank",children:[t.icon," ",t.platform]},t.id))})]})]})},_=e=>n("div",{children:a(L,{theme:p,children:[n(F,{}),n(Z,{})]})});I.render(n(C.StrictMode,{children:n(_,{})}),document.getElementById("root"));
