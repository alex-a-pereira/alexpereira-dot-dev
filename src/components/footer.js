import React from 'react'
import styled from 'styled-components'
import media from 'utils/media-queries'

import { fontSize } from 'styles/theme'

import Section from 'components/section'

const FooterText = styled.div`
  text-align: center;
  font-size: ${fontSize.f2};
  ${media.sm`
    text-align: left;
    font-size: ${fontSize.f1};
  `}
`

function Footer() {
  return (
    <Section>
      <FooterText>
        Alex Pereira - Software Engineer
      </FooterText>
      <div style={{marginBottom: '12px'}} />
      <FooterText>
        This open source project was forked from <a href="https://github.com/gabdorf/gabriel-adorf-portfolio">Gabriel Adorf</a>
      </FooterText>
    </Section>
  )
}

export default Footer
