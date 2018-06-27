import React from 'react';
import { mount } from 'enzyme';
import App from '../app';
import Blog from '../components/blog';
jest.mock('../services/blogs');
import blogService from '../services/blogs';

describe('<App /> unauthenticated', () => {
  let app;
  beforeAll(() => {
    window.localStorage.clear();
    app = mount(<App />);
  });

  it('doesnt render blogs', () => {
    app.update();
    const blogComponent = app.find(Blog); //  just test the container
    expect(blogComponent.length).toEqual(0);
  });
});

describe('<App /> authenticated', () => {
  let app;
  beforeAll(() => {
    const user = {
      username: 'tester',
      token: '1231231214',
      name: 'Teuvo Testaaja'
    };
    window.localStorage.clear();
    window.localStorage.setItem('user', JSON.stringify(user));
    app = mount(<App />);
  });

  it('renders blogs for authenticated users', () => {
    app.update();
    const blogComponents = app.find(Blog);
    expect(blogComponents.length).toEqual(blogService.blogs.length);
  });
});
