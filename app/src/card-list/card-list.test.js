import React from 'react';
import ReactDOM from 'react-dom';
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import CardList from './card-list';
import pretty from "pretty";


let container = null;

beforeEach( () => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach( () => {
  unmountComponentAtNode(container);
  container.remove();
});

it('Load 2 card element, the title of the first card equals Jingle Bells', async () => {

act(() => {
    render(<CardList></CardList>, container);
});
const carlist = document.querySelector("[data-testid='cardlist]");
expect(
  pretty(container.innerHTML)
).toMatchSnapshot();


})





// }); 
