import { createContext } from 'react';

export interface DimensionsContextProps {
  width: number;
  height: number;
}

export const DimensionsContext = createContext<DimensionsContextProps>({
  width: 0,
  height: 0,
});
