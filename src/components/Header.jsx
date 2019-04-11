import React from 'react';
import styled from '@emotion/styled';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';

const Wrapper = styled.header`
  background: ${props => props.theme.gradient.rightToLeft};
  height: 200px;
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
