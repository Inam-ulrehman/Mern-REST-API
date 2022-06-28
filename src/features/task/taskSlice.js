import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { customTaskFetch } from '../../utils/axios'
import { toast } from 'react-toastify'

const initialState = {
  name: '',
  isLoading: false,
  isEditing: false,
  complete: false,
  editId: '',
  editName: {
    name: '',
    complete: false,
  },
  taskList: [],
}

// axios.get() get Task
export const taskGetThunk = createAsyncThunk(
  'task/taskGetThunk',
  async (_, thunkAPI) => {
    try {
      const response = await customTaskFetch.get('')
      return response.data
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message)
    }
  }
)

// Axios.post() create task============

export const taskCreateThunk = createAsyncThunk(
  'task/taskCreateThunk',
  async (user, thunkAPI) => {
    try {
      const response = await customTaskFetch.post('', user)
      return response.data
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message)
    }
  }
)

//  Axios Edit task
export const taskEditThunk = createAsyncThunk(
  'task/taskEditThunk',
  async (user, thunkAPI) => {
    try {
      const { editId } = user

      const response = await customTaskFetch.patch(
        `/${editId}`,
        thunkAPI.getState().task.editName
      )

      console.log(response)
      return response
    } catch (error) {
      console.log(error)
    }
  }
)

const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    getFormInputValues: (state, { payload }) => {
      if (state.isEditing) {
        const { name, value } = payload
        state[name] = value
        state.editName.name = state.name
        return
      }
      const { name, value } = payload
      state[name] = value
      return
    },
    getFormEditValue: (state, { payload }) => {
      state.name = payload.name
      state.editId = payload.taskID
      state.editName.name = state.name
      state.isEditing = true
    },
  },
  extraReducers: {
    [taskCreateThunk.pending]: (state) => {
      state.isLoading = true
    },
    [taskCreateThunk.fulfilled]: (state, { payload }) => {
      state.isLoading = false
      console.log(payload)
      state.name = ''

      toast.success('Your task is created', {
        position: 'top-center',
      })
    },
    [taskCreateThunk.pending]: (state) => {
      state.isLoading = false
    },
    [taskGetThunk.pending]: (state) => {
      state.isLoading = true
    },
    [taskGetThunk.fulfilled]: (state, { payload }) => {
      state.isLoading = false
      state.taskList = payload
    },
    [taskGetThunk.pending]: (state) => {
      state.isLoading = false
    },
    [taskEditThunk.pending]: (state) => {},
    [taskEditThunk.fulfilled]: (state, { payload }) => {
      state.isLoading = false

      toast.success('task Updated')
    },
    [taskEditThunk.rejected]: (state) => {
      toast.error('Some problem')
    },
  },
})
export const { getFormInputValues, getFormEditValue } = taskSlice.actions
export default taskSlice.reducer
