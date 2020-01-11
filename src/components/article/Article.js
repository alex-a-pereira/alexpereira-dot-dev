import React from 'react';
import styled from 'styled-components';
import media from 'utils/media-queries';

import GlobalWrapper from '../GlobalWrapper';
import ArticleHeader from './ArticleHeader';
import {Footer} from '../shared/Footer';

const Section = styled.section`
  margin: 64px 0;
  ${media.sm`
    margin: 0;
  `}
`;

const ContentContainer = styled.div`
  max-width: 728px;
  margin-left: auto;
  margin-right: auto;
`;

const ContentWrapper = styled.div`
  padding: 56px 24px 26px 24px;
  ${media.xs`
  padding: 56px 16px 26px 16px;
  `}
`

export const Article = (props) => {
  return (
    <GlobalWrapper>
      <ArticleHeader title={props.title} />
      <Section>
        <ContentContainer>
          <ContentWrapper>
            {props.children}
          </ContentWrapper>
        </ContentContainer>
      </Section>
      <Footer />
    </GlobalWrapper>
  )
}