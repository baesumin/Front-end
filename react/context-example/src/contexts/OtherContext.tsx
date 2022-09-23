import { createContext, useState } from 'react';

interface Props {
  children: JSX.Element | JSX.Element[];
}

export const OtherContext = createContext({
  otherText: '',
  sayHi: () => {},
});

export const OtherProvider = ({ children }: Props): JSX.Element => {
  const [otherText, setOtherText] = useState('hello');

  const sayHi = (): void => {
    setOtherText('hi');
  };

  return (
    <OtherContext.Provider
      value={{
        otherText,
        sayHi,
      }}>
      {children}
    </OtherContext.Provider>
  );
};

