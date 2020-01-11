import React, { Fragment } from 'react'
import styled from 'styled-components'
import media from 'utils/media-queries'

import { color, fontSize } from 'styles/theme'

import TwoColumns from 'components/twoColumns'
import SectionHeading from 'components/sectionHeading'

const Big = styled.span`
  font-size: ${fontSize.f6};
  color: ${color.grey900};
  font-weight: 700;
  ${media.sm`
    font-size: ${fontSize.f5};
  `}
`

export const About = () => {
  return (
    <TwoColumns
      leftColumn={<SectionHeading>About</SectionHeading>}
      rightColumn={
        <Fragment>
          <Big>
            Hi, I'm Alex. I'm a full-stack software engineer based in New Hampshire.
          </Big>
          <p>
            I'm a JavaScript nerd with experience writing code in Python, C/C++, and various other languages. I've worked extensively with developer tools like AWS, Git, Docker, and PostgreSQL.
          </p>
          <p>
            Currently I'm helping <a href="https://minim.co" target="__blank">Minim</a> build a Managed Wi-Fi solution that makes
            homes into a more connected and secure place. 
          </p>
          <p style={{ marginBottom: 0 }}>
            Outside of work I'm into cars, music production, and collecting vintage electronics.
          </p>
        </Fragment>
      }
    />
  )
};
