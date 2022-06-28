import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  name: '',
  email: '',
  password: '',
  isLoading: false,
}

const userSlice = createSlice({
  name: 'user',
  initialState,
})

export default userSlice.reducer
