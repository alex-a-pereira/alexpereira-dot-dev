import React from 'react'
import styled from 'styled-components'
import media from 'utils/media-queries'

import { fontSize } from 'styles/theme'

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 60px;
  ${media.sm`
    margin-right: 30px;
  `}
`;

const SmallImage = styled.img`
  width: 80px;
  height: auto;
`;

const ContentLogo = (props) => {
  return (
    <ImageContainer>
      <SmallImage 
        src={props.src}
      />
    </ImageContainer>
  )
}

const ContentContainer = styled.div`
  margin-bottom: 68px;
  display: flex;
  justify-content: center;
  &:last-of-type {
    margin-bottom: 0px;
  }

  // desktop
  ${media.sm`
    margin-bottom: 100px;
  `}
`

const DescriptionContainer = styled.div`
  width: 100%;
  @media (max-width: 660px) {
    margin-top: 32px;
  }
`

const Title = styled.h3`
  font-size: ${fontSize.f6};
  font-weight: 700;
  ${media.md`
    font-size: ${fontSize.f6};
  `}
  margin: 0 0 16px 0;
`

const Abstract = styled.div`
  margin-bottom: 16px;
`

export const ContentRow = (props) => {
  return (
    <ContentContainer>
      <ContentLogo src={props.imgSrc} />
      <DescriptionContainer>
        <Title>{props.title}</Title>
        <Abstract>{props.abstract}</Abstract>
        {props.link}
      </DescriptionContainer>
    </ContentContainer>
  )
};
