/**
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper.
 * @param {object} props - Value of data-test attribute for search
 * @returns {ShallowWrapper}
 */
export const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test='${val}']`);
};
