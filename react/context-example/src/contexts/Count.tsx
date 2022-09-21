import { createContext, useState } from 'react';

interface Props {
  children: JSX.Element | JSX.Element[];
}

export const CountContext = createContext({
  count: 0,
  plusCount: () => {},
});

export const CountProvider = ({ children }: Props): JSX.Element => {
  const [count, setCount] = useState(0);

  const plusCount = (): void => {
    setCount(count + 1);
  };

  return (
    <CountContext.Provider
      value={{
        count,
        plusCount,
      }}>
      {children}
    </CountContext.Provider>
  );
};

