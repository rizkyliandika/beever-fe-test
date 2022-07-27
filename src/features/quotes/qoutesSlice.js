import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
    quotes: [],
    favorites: [],
    quotesKanyeWest: '',
    loading: false,
}

export const fetchQuotes = createAsyncThunk(
    'quotes/fetchQuotesKanyeWest',
    async (thunk) => {
        const res = await fetch('https://api.kanye.rest/').then(
            (data) => data.json()
        )
        return res.quote
    }
)

export const quotesSlice = createSlice({
    name: 'quote',
    initialState,
    reducers: {
        addQuotes: (state, { payload }) => {
            state.quotes.push(payload)
        },
        addFavorites: (state, { payload }) => {
            state.favorites.push(payload)
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchQuotes.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchQuotes.fulfilled, (state, { payload }) => {
                state.loading = false;
                state.quotesKanyeWest = payload
            })
            .addCase(fetchQuotes.rejected, (state) => {
                state.loading = false
            });
    },
});


export const { addQuotes, addFavorites } = quotesSlice.actions;

export default quotesSlice.reducer;