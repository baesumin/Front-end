import checkPropTypes from 'check-prop-types';

/**
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper.
 * @param {object} props - Value of data-test attribute for search
 * @returns {ShallowWrapper}
 */
export const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test='${val}']`);
};

export const checkProp = (component, conformingProps) => {
  const propError = checkPropTypes(
    component.propTypes(component.propTypes, conformingProps, 'prop', component.name)
  );
  expect(propError).toBeUndefined();
};
