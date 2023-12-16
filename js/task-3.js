"use strict"

function getElementWidth(content, padding, border){
    const content1 = Number.parseFloat(content);
    const padding1 = Number.parseFloat(padding);
    const border1 = Number.parseFloat(border);
    const boxSizing = content1 + (padding1 + border1) * 2;
    return boxSizing;
}

console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200