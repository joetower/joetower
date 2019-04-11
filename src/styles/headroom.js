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
    justify-content: space-between;
    flex-flow: column wrap;
    width: 100%;
    padding: 1rem;

    @media (min-width: 460px) {
      flex-flow: row wrap;
      padding: 1rem 4.5rem;
    }
    
    svg {
      height: 2.5rem;
      g {
        fill: ${theme.colors.black.base};
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
  }
  .headroom--unpinned {
    position: fixed;
    transform: translateY(-100%);
    transition: ${theme.transitions.headroom.transition};
  }
  .headroom--pinned {
    position: fixed;
    transform: translateY(0);
    transition: ${theme.transitions.headroom.transition};
    background-color: ${theme.colors.black.blue};
    box-shadow: 0 5px 30px rgba(0, 0, 0, 0.2);
    nav {
      a {
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
    svg {
      height: 2.5rem;
      g {
        fill: ${theme.colors.white.base};
      }
    }
    span {
      color: ${theme.colors.white.base};
    }
  }
`;

export default headroom;
