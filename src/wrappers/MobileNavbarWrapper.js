import styled from 'styled-components'

const MobileNavbarWrapper = styled.nav`
  @media (min-width: 768px) {
    display: none;
  }
  .logo {
    width: 40px;
  }
  .container {
    position: fixed;
    top: 0;
    width: 100%;
    background-color: var(--primary-1);
  }
  .container-header {
    display: flex;
    justify-content: space-between;
    .menu-icon {
      font-size: 2rem;
    }
  }
  .links {
    transition: var(--transition);
    height: 0px;
    transition: var(--transition);
    background-color: var(--white);
    overflow: hidden;
    a {
      display: block;
    }
  }
`
export default MobileNavbarWrapper
