import { configureStore, createSlice } from '@reduxjs/toolkit';


const counterSlice = createSlice({
  name: 'counter',
  initialState: { count: 0 },
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
  },
});

export const { increment } = counterSlice.actions;

// Slice для управления темой
const themeSlice = createSlice({
    name: 'theme',
    initialState: { isDark: false }, // По умолчанию светлая тема
    reducers: {
      toggleTheme: (state) => {
        state.isDark = !state.isDark;
      },
    },
  });
  
export const { toggleTheme } = themeSlice.actions;


const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    theme: themeSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>; 
export type AppDispatch = typeof store.dispatch; 
export default store;



