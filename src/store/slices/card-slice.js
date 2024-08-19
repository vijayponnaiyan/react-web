import { createSlice } from '@reduxjs/toolkit';

const cardSlice = createSlice({
    name: 'card',
    initialState: [], // Array to store card items
    reducers: {
        addToCard: (state, action) => {
            state.push(action.payload); // Directly mutates state (allowed by Immer)
        },
        removeFromCard: (state, action) => {
            return state.filter(item => item.id !== action.payload);
        },
    },
});

export const { addToCard, removeFromCard } = cardSlice.actions;
export default cardSlice.reducer;
