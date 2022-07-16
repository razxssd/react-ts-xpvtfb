import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IPeopleState, IPerson } from '../../core';

const initialState: IPeopleState = {
  list: [],
  filteredList: [],
  isGridVisible: true,
};

export const peopleState = createSlice({
  name: 'peopleState',
  initialState: initialState,
  reducers: {
    getAllPeopleSuccess(state, action: PayloadAction<IPerson[]>): IPeopleState {
      return { ...state, list: action.payload, filteredList: action.payload };
    },
    updatePersonSuccess(state, action: PayloadAction<IPerson>): IPeopleState {
      const people: IPerson[] = state.list.map((person) => {
        if (person.UserName === action.payload.UserName) {
          return { ...action.payload };
        } else {
          return { ...person };
        }
      });
      return { ...state, list: people, filteredList: people };
    },
    setIsGridVisibleSuccess(
      state,
      action: PayloadAction<boolean>
    ): IPeopleState {
      return { ...state, isGridVisible: action.payload };
    },
    removeOddRowsSuccess(state): IPeopleState {
      const people = state.list.filter((person, i) => i % 2 == 0);
      return { ...state, list: people, filteredList: people };
    },
    filterPeopleByGenderSuccess(
      state,
      action: PayloadAction<'male' | 'female'>
    ): IPeopleState {
      const filteredPeople = state.list.filter(
        (person) => person.Gender.toLowerCase() === action.payload
      );
      return { ...state, filteredList: filteredPeople };
    },
  },
});

export const {
  getAllPeopleSuccess,
  setIsGridVisibleSuccess,
  removeOddRowsSuccess,
  filterPeopleByGenderSuccess,
  updatePersonSuccess,
} = peopleState.actions;
