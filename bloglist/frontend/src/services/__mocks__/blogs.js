let token = null;

const setToken = newToken => {
  token = newToken;
};
const blogs = [
  {
    _id: {
      $oid: '5b2abd62eeb6e204c389d979'
    },
    likes: 37,
    title: 'blog titlez',
    url: 'http://www.sokeri.com/ok/',
    author: 'blog authorz',
    user: {
      $oid: '5b2abd43eeb6e204c389d978'
    },
    __v: 0
  },
  {
    _id: {
      $oid: '5b2ac866ec979f069d805c7e'
    },
    likes: 5,
    title: 'blog titlez2',
    url: 'http://www.sokeri.com/ok/',
    author: 'blog authorz2',
    user: {
      $oid: '5b2ac27fb9980f052206365e'
    },
    __v: 0
  },
  {
    _id: {
      $oid: '5b2e3abf43d1220cadfea1de'
    },
    likes: 4,
    title: 'bb',
    url: 'ffff',
    author: 'dd',
    user: {
      $oid: '5b2ac27fb9980f052206365e'
    },
    __v: 0
  },
  {
    _id: {
      $oid: '5b2f824f2eea2d0eb03b118f'
    },
    likes: 3,
    title: 'title',
    url: 'url',
    author: 'author',
    user: {
      $oid: '5b2ac27fb9980f052206365e'
    },
    __v: 0
  }
];

const getAll = () => {
  return Promise.resolve(blogs);
};

export default { getAll, blogs, setToken };
