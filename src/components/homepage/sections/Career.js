import React, { Fragment } from 'react'

import TwoColumns from 'components/twoColumns'
import { ContentRow } from '../ContentRow'

import minimLogo from 'img/logos/minim.png'

export const Career = () => {
  return (
    <TwoColumns
      wide
      headingText="Career"
      rightColumn={
        <Fragment>
          <ContentRow
            title="Minim"
            abstract="Full-stack software engineer. Minim is an AI-driven WiFi management and IoT security platform for internet service providers."
            link={<a href="https://www.minim.co/solutions/whole-home-wifi">Learn more</a>}
            imgSrc={minimLogo}
          />
        </Fragment>
      }
    />
  )
};
