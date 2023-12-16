"use strict"

function getElementWidth(content, padding, border){
    const content1 = Number.parseFloat(content);
    const padding1 = Number.parseFloat(padding);
    const border1 = Number.parseFloat(border);
    const boxSizing = content1 + (padding1 + border1) * 2;
    console.log(boxSizing);
}

getElementWidth("50px", "8px", "4px")
getElementWidth("60px", "12px", "8.5px")
getElementWidth("200px", "0px", "0px")