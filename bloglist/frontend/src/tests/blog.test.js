import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Blog from '../components/blog';

const dummyBlog = {
  title: 'Komponenttitestaus tapahtuu jestillä ja enzymellä',
  author: 'Mr. Man',
  likes: 31,
  url: 'http://sokeri.com',
  id: '333',
  user: ''
};

describe('<Blog />', () => {
  it('renders title', () => {
    const component = shallow(<Blog {...dummyBlog} onClick={null} />);
    const titleDiv = component.find('.blogHeader');
    expect(titleDiv.text()).toContain(dummyBlog.title);
  });

  it('blog details are not rendered initially', () => {
    const mockHandler = jest.fn();
    const component = mount(<Blog {...dummyBlog} onLiked={mockHandler} />);
    const infoElement = component.find('.blogInfo');
    expect(infoElement.length).toBe(0);
  });

  it('blog details are rendered after clicking the header', () => {
    const mockHandler = jest.fn();
    const component = mount(<Blog {...dummyBlog} onLiked={mockHandler} />);
    const headerElement = component.find('.blogHeader');
    headerElement.simulate('click');
    component.update();
    const infoElement = component.find('.blogInfo');
    expect(infoElement.length).toBe(1);
  });

  it('onLike handler gets triggered multiple times', () => {
    const mockHandler = jest.fn();
    const component = mount(<Blog {...dummyBlog} onLiked={mockHandler} />);
    const titleDiv = component.find('.blogHeader');
    titleDiv.simulate('click');
    const contentDiv = component.find('.blogInfo');
    const button = contentDiv.find('button');
    component.update();
    button.simulate('click');
    button.simulate('click');
    expect(mockHandler.mock.calls.length).toBe(2);
  });
});
