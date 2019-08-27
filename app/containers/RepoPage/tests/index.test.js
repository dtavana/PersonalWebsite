import React from 'react';
import { shallow } from 'enzyme';

import RepoPage from '../index';

describe('<RepoPage />', () => {
  it('should render its heading', () => {
    const renderedComponent = shallow(<RepoPage />);
    expect(renderedComponent.contains(<h1>Repositories</h1>)).toBe(true);
  });

  it('should never re-render the component', () => {
    const renderedComponent = shallow(<RepoPage />);
    const inst = renderedComponent.instance();
    expect(inst.shouldComponentUpdate()).toBe(false);
  });
});
