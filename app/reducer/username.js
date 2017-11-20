var username = (state = null, action) => {
  switch (action.type) {
    case 'b':
      return action.username;
    case 'c':
      return null;
    default:
      return state;
  }
}
module.exports = username;
