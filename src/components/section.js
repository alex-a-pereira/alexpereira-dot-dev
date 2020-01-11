import React from 'react'
import styled from 'styled-components'
import media from 'utils/media-queries'

import { color } from 'styles/theme'

const SectionContainer = styled.section`
  margin: 0 96px;
  ${media.lg`
    margin: 0 64px;
  `}
  ${media.sm`
    margin: 0 24px;
  `}
  display: flex;
  justify-content: center;
`;

const SectionContentContainer = styled.div`
  border-top: 1px solid ${color.grey400};
  max-width: 916px;
  padding: 100px 0;
  ${media.sm`
    padding: 64px 0;
  `}
  width: 100%;
`;

export const Section = (props) => {
  return (
    <SectionContainer id={props.id}>
      <SectionContentContainer>{props.children}</SectionContentContainer>
    </SectionContainer>
  )
};
