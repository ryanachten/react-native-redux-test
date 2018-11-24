export default (state = null, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'SELECT_LIBRARY':
      return payload;
    default:
     return state;
   }
};
