export const setLocalStorage = (key, value) => {
  window.localStorage.setItem(key, value);
};

export const getLocalStorage = (key) => {
  var value = window.localStorage.getItem(key);
  return value;
};