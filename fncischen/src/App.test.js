import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { shallow } from 'enzyme';
import 'jest-dom/extend-expect';

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
