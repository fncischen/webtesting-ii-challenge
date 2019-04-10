import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { render, cleanup, fireEvent } from 'react-testing-library';


import { shallow } from 'enzyme';
import 'jest-dom/extend-expect';

// https://medium.com/@antonybudianto/react-testing-with-react-testing-library-3b8554f6acfd
describe('<App/>', () => {

  it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

  it('renders successfully', () => {
    render(<App/>, div);
  })

  it("renders Hello World", () => {
    
  })
});
