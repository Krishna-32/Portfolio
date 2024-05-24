import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: 0,
    misc: 1,
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += state.misc
        },

        decrement: (state) => {
            state.value -= state.misc
        },

        incrementByAmount: (state, action) => {
            state.value += action.payload
        },

        setMisc: (state, action) => {
            state.misc = action.payload
        },
    },
})


export const { increment, decrement, incrementByAmount, setMisc } = counterSlice.actions

export default counterSlice.reducer