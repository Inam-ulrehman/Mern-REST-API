import React from 'react'
import { FaRegCopyright } from 'react-icons/fa'
import styled from 'styled-components'

const Footer = () => {
  return (
    <Wrapper className='title'>
      CopyRight <FaRegCopyright /> {new Date().getFullYear()} Example Name
      publishers All rights reserved.
    </Wrapper>
  )
}

const Wrapper = styled.footer`
  position: fixed;
  bottom: 0;
  width: 100%;
`

export default Footer
