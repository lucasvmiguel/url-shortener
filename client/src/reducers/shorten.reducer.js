const initialState = {
  list: [
    {urlExtended: 'http://aaa.com', urlShorten: 'aaa', visits: 123, lastVisited: Date.now()},
    {urlExtended: 'http://bbb.com', urlShorten: 'bbb', visits: 456, lastVisited: Date.now()},
    {urlExtended: 'http://ccc.com', urlShorten: 'ccc', visits: 789, lastVisited: Date.now()}
  ],
  formUrl: '',
  searchUrl: '',
  config: {}
};

const shorten = (state = initialState, action) => {
  switch (action.type) {
  case 'SET_CONFIG':
    state.config = action.config;
    return state;
  default:
    return state;
  }
};

export default shorten;