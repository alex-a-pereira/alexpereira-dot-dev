import React from 'react';
import styled from 'styled-components';
import media from 'utils/media-queries';

import GlobalWrapper from '../GlobalWrapper';
import ArticleHeader from './header';
import ContentWrapper from 'components/article/contentwrapper';
import {Footer} from '../shared/Footer';

const Section = styled.section`
  margin: 64px 0;
  ${media.sm`
    margin: 0;
  `}
`;

export const Article = (props) => {
  return (
    <GlobalWrapper>
      <ArticleHeader title={props.title} />
      <Section>
        <ContentWrapper>
          {props.children}
        </ContentWrapper>
      </Section>
      <Footer />
    </GlobalWrapper>
  )
}