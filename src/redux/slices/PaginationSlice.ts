import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Character, Episode, Location } from "../../types";


interface PaginationState {
  currentPage: number;
  cardList: Character[]| Location[]| Episode[] 
}

const initialState: PaginationState = {
  currentPage: 1,
  cardList: [],
};

const PaginationSlice = createSlice({
  name: "pagination",
  initialState,
  reducers: {
    resetCards(state) {
      state.cardList = [];
      state.currentPage = 1;
    },
    addCards: (state, action: PayloadAction<Character[]| Location[]| Episode[]>) => { 
      const uniqueCards = action.payload.filter(
        (newCard) => !state.cardList.some(
          (existingCard) => existingCard.id === newCard.id 
        )
      );
      // @ts-ignore
      state.cardList.push(...uniqueCards);
    },
    incrementPage(state) {
      state.currentPage += 1;
    },
    setPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
    },
  },
});

export const { resetCards, addCards, incrementPage, setPage } = PaginationSlice.actions;
export default PaginationSlice.reducer;
