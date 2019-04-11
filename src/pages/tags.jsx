import React from 'react';
import PropTypes from 'prop-types';
import { Layout, Container } from 'layouts';
import { TagsBlock, Header, PostHeader } from 'components';

const Tags = ({ pageContext }) => {
  const { tags } = pageContext;

  return (
    <Layout>
      <Header/>
      <PostHeader title="Posts by Tags"></PostHeader>
      <Container>
        <TagsBlock list={tags} />
      </Container>
    </Layout>
  );
};

export default Tags;

Tags.propTypes = {
  pageContext: PropTypes.shape({
    tags: PropTypes.array,
  }),
};
