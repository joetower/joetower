import React from 'react';
import styled from '@emotion/styled';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';

const Wrapper = styled.header`
  background: ${props => props.theme.gradient.rightToLeft};
  height: 200px;
  @media (max-width: ${props => props.theme.breakpoints.m}) {
    height: 250px;
  }
  @media (max-width: ${props => props.theme.breakpoints.s}) {
    height: 200px;
  }
  position: relative;
  overflow: hidden;
`;

const Header = ({ cover }) => (
  <Wrapper>
    <Img fluid={cover || {} || [] || ''} />
  </Wrapper>
);

export default Header;

Header.propTypes = {
  cover: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
};

Header.defaultProps = {
  cover: false,
};
