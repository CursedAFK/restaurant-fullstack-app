import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { firebaseAuth, provider } from '../../firebase.config'
import { signInWithPopup } from 'firebase/auth'

const initialState = {
  user: JSON.parse(localStorage.getItem('user')) || null
}

export const login = createAsyncThunk('state/login', async function () {
  return await signInWithPopup(firebaseAuth, provider).then(function (
    response
  ) {
    return {
      refreshToken: response.user.refreshToken,
      providerData: response.user.providerData
    }
  })
})

export const stateSlice = createSlice({
  name: 'state',
  initialState,
  reducers: {
    logout(state) {
      localStorage.clear()
      state.user = null
    }
  },
  extraReducers(builder) {
    builder
      .addCase(login.fulfilled, function (state, { payload }) {
        state.user = payload.providerData[0]
        localStorage.setItem('user', JSON.stringify(payload.providerData[0]))
      })
      .addCase(login.rejected, function (state, { error }) {
        console.log(error.message)
      })
  }
})

export const { logout } = stateSlice.actions

export function getUser(state) {
  return state.state.user
}

export default stateSlice.reducer
