import { Children } from "react";

function customRender(reactElement,customContainer){
    
}
const reactElement={
    type:'a',
    props:{
        href: 'https://google.com',
        target: '_blank'

    },
    children:'Click me to visit google'
}
const customContainer=document.getElementById('#root');

customRender(reactElement,customContainer);