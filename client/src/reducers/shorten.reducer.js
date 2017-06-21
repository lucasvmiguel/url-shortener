const initialState = {
  list: [
    {urlShorten: 'aaa', visits: 123, lastVisited: Date.now()},
    {urlShorten: 'bbb', visits: 456, lastVisited: Date.now()},
    {urlShorten: 'ccc', visits: 789, lastVisited: Date.now()}
  ],
  formUrl: '',
  searchUrl: ''
};

const shorten = (state = initialState, action) => {
  switch (action.type) {
  default:
    return state;
  }
};

export default shorten;