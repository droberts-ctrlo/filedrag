import {addClass as ac, removeClass as rc, hideElement as he, showElement as se} from "@davetheitguy/common"

export const addClass = (element:JQuery<HTMLElement>|undefined, name:string)=>{
    for(const item of element??[]) {
        ac(item,name);
    }
}

export const removeClass = (element:JQuery<HTMLElement>|undefined, name:string) => {
    for(const item of element??[]) {
        rc(item,name);
    }
}

export const hideElement=(element:JQuery<HTMLElement>|undefined) => {
    for(const item of element??[]) {
        he(item)
    }
}

export const showElement = (element:JQuery<HTMLElement>|undefined)=>{
    for(const item of element??[]) {
        se(item);
    }
}
