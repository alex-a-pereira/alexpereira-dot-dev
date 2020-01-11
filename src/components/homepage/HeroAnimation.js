import React from 'react'
import styled from 'styled-components'
import media from 'utils/media-queries'

import Header from './header'
import Spirograph from './Spirograph'

const HeroSection = styled.section`
  height: 100vh;
  max-height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  width: 100vw;
  ${media.sm`
    height: calc(100vh - 76px);
  `}
`

const Spacer = styled.div`
  flex: 1 1 0;
`

export const HeroAnimation = () => {
  return (
      <HeroSection>
        <Spirograph speed={0.012}/>
        <Header />
        <Spacer />
      </HeroSection>
  )
}
