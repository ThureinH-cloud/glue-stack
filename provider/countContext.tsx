import { createContext, PropsWithChildren, useContext, useState } from "react";
const context = createContext<{
  count: number;
  increase: () => void;
  decrease: () => void;
}>({
  count: 0,
  increase: () => null,
  decrease: () => null,
});
export const CountProvider = ({ children }: PropsWithChildren) => {
  const [count, setCount] = useState(0);
  const increase = () => setCount((c) => c + 1);
  const decrease = () => setCount((c) => c - 1);
  return (
    <context.Provider value={{ count, increase, decrease }}>
      {children}
    </context.Provider>
  );
};
export const useCount = () => useContext(context);
