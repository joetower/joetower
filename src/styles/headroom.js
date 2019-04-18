import { css } from '@emotion/core';
import theme from '../../config/theme';

const headroom = css`
  .headroom-wrapper {
    position: fixed;
    width: 100%;
    z-index: 2000;
    top: 0;
  }
  .headroom {
    display: flex;
    justify-content: center;
    flex-flow: column nowrap;
    width: 100%;
    padding: 1rem;

    @media (min-width: 460px) {
      flex-flow: row wrap;
    }
    @media (min-width: 600px) {
      justify-content: space-between;
    }
    img {
      margin: 0 auto;
      max-width: 100px;

      @media (min-width: 600px) {
        margin:0; 
        max-width: 200px;
      }
    }
  }
  .headroom--unfixed {
    position: relative;
    transform: translateY(0);
    transition: ${theme.transitions.headroom.transition};
  }
  .headroom--scrolled {
    transition: ${theme.transitions.headroom.transition};
    flex-flow: row wrap;
    justify-content: space-between;

    img {
      width:50px;
    }
    nav {
      a {
        font-size: 0.75rem;
      }
    }
  }
  .headroom--unpinned {
    position: fixed;
    transform: translateY(-100%);
    transition: ${theme.transitions.headroom.transition};
    justify-content: space-between;
    img {
      margin: 0 auto;
      max-width: 100px;

      @media (min-width: 600px) {
        margin:0; 
        max-width: 200px;
      }
    }
  }
  .headroom--pinned {
    position: fixed;
    transform: translateY(0);
    transition: ${theme.transitions.headroom.transition};
    background-color: ${theme.colors.background.light};
    box-shadow: 0 5px 30px rgba(0, 0, 0, 0.2);
    flex-flow: row wrap;

    img {
      width:50px;
    }
    nav {
      a {
        font-size: 0.75rem;
        color: ${theme.colors.white.base};
        &:hover {
          border-color: ${theme.colors.white.base};
          color: ${theme.colors.white.base};
        }
        &:focus {
          color: ${theme.colors.white.base};
        }
      }
    }
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
    span {
      color: ${theme.colors.white.base};
    }
  }
`;

export default headroom;
