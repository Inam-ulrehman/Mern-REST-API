import React from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import axios from 'axios'
import { getFormEditValue, taskGetThunk } from '../../features/task/taskSlice'
const url = 'https://firstsaniadata.herokuapp.com/api/v1/tasks/'

const GetAllTask = ({ _id: taskID, completed, name }) => {
  const dispatch = useDispatch()
  // handleInfo
  const handleInfo = (e) => {
    console.log(e.target)
  }

  // handleEdit
  const handleEdit = (e) => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })

    dispatch(getFormEditValue({ name, taskID }))
  }

  // handleDelete
  const handleDelete = async (e) => {
    try {
      const response = await axios.delete(`${url}${taskID}`)

      toast.info('task deleted')
      dispatch(taskGetThunk())
      return response
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <Wrapper className='form'>
      <div className='header'>
        <p className='title'>{name}</p>
        <div className='title-underline'></div>

        <p className='title'>{completed ? 'Completed' : 'Un-Complete'}</p>
      </div>
      <hr />
      <div className='button-box'>
        <button onClick={handleInfo} type='button' className='btn '>
          more info
        </button>
        <button onClick={handleEdit} type='button' className='btn'>
          edit
        </button>
        <button onClick={handleDelete} type='button' className='btn'>
          delete
        </button>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.article`
  .button-box {
    display: flex;
    justify-content: space-between;
  }
`
export default GetAllTask
