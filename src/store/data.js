import { createSlice } from '@reduxjs/toolkit';



const initState = {
  stars: 0,
  tags: {},
  review: '',
}


const dataSlice = createSlice({
  name: 'data',
  initialState: initState,
  reducers: {
    setStars(state, action) {
      state.stars = Number(action.payload)
    },
    setTagIdActive(state, action) {
      state.tags[action.payload] =
        state.tags[action.payload] ? !state.tags[action.payload] : true
    },
    setReview(state, action) {
      state.review = action.payload
    },
    resetAll(state) {
      Object.assign(state, initState)
    }
  },
});

export const actions = dataSlice.actions;

export default dataSlice.reducer;













