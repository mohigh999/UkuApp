import React from 'react';
import ReactDOM from 'react-dom';
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import App from './App';

let container = null;

beforeEach( () => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach( () => {
  unmountComponentAtNode(container);
  container.remove();
});

it('render 4 element ', async () => {

    act(() => {
        render(<App></App>, container);
    });
    const app = document.querySelector("[data-testid='app']")
    const nbr_childs = app.childNodes.length
    expect(nbr_childs).toEqual(2);
})

it('render 3 view class element ', async () => {

    act(() => {
        render(<App></App>, container);
    });
    const appview = document.querySelector("#allview")
    const childs = appview.childNodes
    let i = 0
    childs.forEach(el => {
        if(el.classList[0] === "view"){
            i++
        }
    })
    expect(i).toEqual(3);
})

it('change the view when you click on the menu or swip', async () => {

    act(() => {
        render(<App></App>, container);
    });
    const appview = document.querySelector("#allview")
    const childs = appview.childNodes
    const nextvue = document.querySelector("[data-testid='next']")
    const prevvue = document.querySelector("[data-testid='prev']")
    act( () => {
        nextvue.dispatchEvent(
          new MouseEvent("click", { bubbles: true })
        );
    });
    expect(childs[1].classList[1]).toEqual("view-in");
    expect(childs[0].classList[1]).toEqual("view-out");
    act( () => {
        prevvue.dispatchEvent(
          new MouseEvent("click", { bubbles: true })
        );
    });
    expect(childs[0].classList[1]).toEqual("view-in")
    expect(childs[1].classList[1]).toEqual("view-out")
})
