import React from 'react'
import styled from 'styled-components'
import media from 'utils/media-queries'

import { fontSize } from 'styles/theme'

const size = 150;

const Image = styled.div`
  background: white;
  flex: 0 0 ${size}px;
  height: ${size}px;
  margin-right: 40px;
  border-radius: 8px;
  margin-top: -28px;
  ${media.md`
    margin-left: -28px;
  `}
  ${media.sm`
    margin-bottom: -20px;
  `}
`
const ProjectLogo = (props) => {
  return (
    <Image>
      <svg
        width={size}
        height={size}
        viewBox="0 0 120 120"
        xmlns="http://www.w3.org/2000/svg"
      >
        {props.children}
      </svg>
    </Image>
  )
}

const ProjectWrapper = styled.div`
  margin-bottom: 100px;
  display: flex;
  @media (max-width: 660px) {
  }
  &:last-of-type {
    margin-bottom: 0px;
  }
  ${media.sm`
    flex-wrap: wrap;
    margin-bottom: 68px;
  `}
`

const Description = styled.div`
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

function Project(props) {
  return (
    <ProjectWrapper>
      <ProjectLogo>{props.logo}</ProjectLogo>
      <Description>
        <Title>{props.title}</Title>
        <Abstract>{props.abstract}</Abstract>
        {props.link}
      </Description>
    </ProjectWrapper>
  )
}

export default Project
