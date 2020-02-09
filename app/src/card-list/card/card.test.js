import React from 'react';
import ReactDOM from 'react-dom';
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import CardUku from './card';

let container = null;

beforeEach( () => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach( () => {
  unmountComponentAtNode(container);
  container.remove();
});

it('display detail on click',() => {
  const datatest = {"id":"39","titre":"Jingle Bells","lien_partition":"http:\/\/uku.localhost\/img\/twopage.pdf","tonalite":"A","tempo":"60","del_link":"..\/img\/twopage.pdf"}
  act(() => {
    render(<CardUku data={datatest}></CardUku>, container);
});
  const zeldadetail = document.querySelector('.zelda-detail')
  const detailbox = document.querySelector('.detail-box')
  act( () => {
    zeldadetail.dispatchEvent(
      new MouseEvent("click", { bubbles: true })
    );
  });

  expect(zeldadetail.className).toMatch("zelda-detail btn-primary btn-active");
  expect(detailbox.style.height).not.toBe(0);

}); 