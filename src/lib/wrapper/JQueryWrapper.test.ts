import { describe, expect, it } from '@jest/globals';
import { addClass, removeClass, hideElement } from './JQueryWrapper';

describe('JQuery Wrapper', ()=>{
    it('Adds a class', ()=>{
        const element = document.createElement('div');
        const el = $(element)
        addClass(el,"test");
        expect(el.hasClass('test')).toBeTruthy();
    });
    
    it('Removes a class', ()=>{
        const element = document.createElement('div');
        const el=$(element)
        el.addClass('test');
        expect(el.hasClass('test')).toBeTruthy();
        removeClass(el,'test');
        expect(el.hasClass('test')).toBeFalsy();
    });

    it('Hides an element', ()=>{
        const element=document.createElement('div');
        const el=$(element);
        hideElement(el);
    });
});
