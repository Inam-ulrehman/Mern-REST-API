import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import GetAllTask from '../components/task/GetAllTask'
import { toast } from 'react-toastify'
import {
  getFormInputValues,
  taskCreateThunk,
  taskEditThunk,
  taskGetThunk,
} from '../features/task/taskSlice'

const Home = () => {
  const dispatch = useDispatch()
  const { task } = useSelector((state) => state)
  const { taskList, isLoading } = task
  // handleSubmit
  const handleSubmit = (e) => {
    const { name, isEditing, editId } = task
    e.preventDefault(e)
    if (!name) {
      return toast.info('Please provide all details...')
    }
    if (isEditing) {
      return dispatch(taskEditThunk({ name, editId }))
    }
    dispatch(taskCreateThunk({ name }))
    dispatch(taskGetThunk())
  }
  // handleChange
  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value

    dispatch(getFormInputValues({ name, value }))
  }
  if (isLoading) {
    return (
      <div>
        <h3 className='title'>Loading.....</h3>
        <div className='loading'></div>
      </div>
    )
  }
  const handleCheckbox = () => {}

  return (
    <Wrapper>
      <form onSubmit={handleSubmit} className='form'>
        <h4 className='title'>{task.isEditing ? 'Edit task' : 'Add Task'}</h4>
        <div>
          <label htmlFor='name' className='form-label'>
            name
          </label>
          <input
            type='text'
            className='form-input'
            name='name'
            id='name'
            value={task.name}
            onChange={handleChange}
          />
          <label htmlFor='complete'>complete</label>
          <input
            onClick={handleCheckbox}
            type='checkbox'
            name='name'
            id='name'
            value={task.name}
            onChange={handleChange}
          />
        </div>
        <button type='submit' className='btn btn-block'>
          submit
        </button>
      </form>
      {/* get all tasks */}
      <div>
        <p className='title'>
          Total task <span>{task.taskList?.length}</span>
        </p>
        {taskList.map((item) => {
          return <GetAllTask key={item._id} {...item} />
        })}
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  height: 300vh;
`

export default Home
