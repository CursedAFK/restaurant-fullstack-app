import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { firebaseAuth, provider } from '../../firebase.config'
import { signInWithPopup } from 'firebase/auth'

const initialState = {
  user: JSON.parse(localStorage.getItem('user')) || null
}

export const login = createAsyncThunk('state/login', async () => {
  const {
    user: { providerData }
  } = await signInWithPopup(firebaseAuth, provider)
  return providerData[0]
})

export const stateSlice = createSlice({
  name: 'state',
  initialState,
  reducers: {
    logout: state => {
      localStorage.clear()
      state.user = null
    }
  },
  extraReducers: builder => {
    builder
      .addCase(login.fulfilled, (state, { payload }) => {
        state.user = payload
        localStorage.setItem('user', JSON.stringify(payload))
      })
      .addCase(login.rejected, (state, { error }) => console.log(error.message))
  }
})

export const { logout } = stateSlice.actions

export const getUser = state => state.state.user

export default stateSlice.reducer
