import { React, useState, useRef, useEffect } from 'react'
import { FaList } from 'react-icons/fa'
import { navbarData } from '../../utils/data'
import MobileNavbarComponent from './MobileNavbarComponent'
import logo from '../../images/logo.svg'
import MobileNavbarWrapper from '../../wrappers/MobileNavbarWrapper'

const MobileNavbar = () => {
  const [values, setValues] = useState(false)

  // handleToggle
  const handleMenu = () => {
    setValues(!values)
  }
  // handleRef
  const listRef = useRef(null)
  const listContainerRef = useRef(null)

  useEffect(() => {
    const listHeight = listRef.current.getBoundingClientRect().height
    if (values) {
      listContainerRef.current.style.height = `${listHeight + 30}px`
    } else listContainerRef.current.style.height = `0px`
  }, [values])
  return (
    <MobileNavbarWrapper>
      <div className='container'>
        <div className='container-header'>
          <img className='logo' src={logo} alt='' />

          <FaList onClick={handleMenu} className='menu-icon' />
        </div>
        <div ref={listContainerRef} className='links'>
          <ul ref={listRef} className='link '>
            {/* 'links hide display' */}

            {navbarData.map((item) => {
              return (
                <MobileNavbarComponent
                  key={item.id}
                  {...item}
                  values={values}
                  setValues={setValues}
                />
              )
            })}
          </ul>
        </div>
      </div>
    </MobileNavbarWrapper>
  )
}

export default MobileNavbar
