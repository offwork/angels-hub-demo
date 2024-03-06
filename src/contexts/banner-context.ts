import { Dispatch, SetStateAction, createContext } from "react";

type SelectedSlideContextType = {
  selected: string,
  setSelected: Dispatch<SetStateAction<string>>
};

export const SelectedSlideContext = createContext<SelectedSlideContextType>(null!);
