import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import Headroom from 'react-headroom';
import logo from '../../static/logo/header-logo.png';

const StyledLink = styled(Link)`
  display: flex;
  font-weight: 700;
  align-items: center;
`;

const Nav = styled.nav`
  display: flex;
  flex-flow:row wrap;
  justify-content: center;
  font-family: ${props => props.theme.fontFamily.body};
  font-weight: 500;
  font-size: 1.1rem;
  align-items: center;

  a {
    color: ${props => props.theme.colors.primary.light};
    transition: all ${props => props.theme.transitions.default.duration};
    font-weight:700;
    padding: .5rem 1rem;
     
    &:hover {
      color: ${props => props.theme.colors.white.grey};
    }
  }

  @media (min-width: ${props => props.theme.breakpoints.m}) {
    justify-content: flex-end;
  }

`;

const NavBar = () => (
  <Headroom calcHeightOnResize disableInlineStyles>
    <StyledLink to="/">
      <img src={logo} alt="Joe Tower Signature Logo" />
    </StyledLink>
    <Nav>
      <Link to="/category/design">Design</Link>
      <Link to="/category/photo-story">Photography</Link>
      <Link to="/about">About</Link>
    </Nav>
  </Headroom>
);

export default NavBar;
