import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  background: ${props => props.theme.gradient.rightToLeft};
`;

const Text = styled.div`
  color: ${props => props.theme.colors.primary.base};
  text-align: left;
  width: 100%;
  max-width: 70rem;
  margin: 0 auto;
  padding: 2rem;
`;''

const Subtitle = styled.p`
  max-width: 700px;
  color: ${props => props.theme.colors.primary.light};
`;

const PostHeader = ({ children, title, date }) => (
  <Wrapper>
    <Text>
      <h1>{title}</h1>
      <h3>{date}</h3>
      {children && <Subtitle>{children}</Subtitle>}
    </Text>
  </Wrapper>
);

export default PostHeader;

PostHeader.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.bool]),
  date: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  title: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.bool,
  ]),
};

PostHeader.defaultProps = {
  children: false,
  date: false,
  title: false,
};
