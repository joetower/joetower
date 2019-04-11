import React from 'react';
import styled from '@emotion/styled';

const Wrapper = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 2rem;
  bottom: 0;
  background: ${props => props.theme.gradient.leftToRight};
  font-family: ${props => props.theme.fontFamily.body};
  font-weight: 500;
`;

const Text = styled.div`
  width:100%;
  max-width: ${props => props.theme.layout[props.type]};
  margin: 0;
  text-align: center;
  color: ${props => props.theme.colors.white.light};

  p {
    margin-bottom:0;
  }
`;

const Footer = () => (
  <Wrapper>
    <Text>
      <p className="slogan">
        Design. Front Web Development. Photography.
      </p>
      <span className="copyright">
        All content &#169; Joe Tower.
      </span>
    </Text>
  </Wrapper>
);
export default Footer;

