import React from 'react';
import { shallow } from 'enzyme';
import SimpleBlog from './SimpleBlog';

describe.only('<SimpleBlog />', () => {
  it('renders title', () => {
    const blog = {
      title: 'Komponenttitestaus tapahtuu jestillä ja enzymellä',
      author: 'Mr. Man',
      likes: 31
    };

    const component = shallow(<SimpleBlog blog={blog} onClick={null} />);
    const contentDiv = component.find('.blogHeader');

    expect(contentDiv.text()).toContain(blog.title);
  });
});
