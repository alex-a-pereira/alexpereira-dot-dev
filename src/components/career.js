import React, { Fragment } from 'react'

import TwoColumns from 'components/twoColumns'
import SectionHeading from 'components/sectionHeading'
import Project from 'components/project'

import minimLogo from 'img/logos/minim.png'

function Career() {
  return (
    <TwoColumns
      wide
      leftColumn={<SectionHeading>Career</SectionHeading>}
      rightColumn={
        <Fragment>
          <Project
            title="Minim"
            abstract="Full-stack software engineer. Minim is an AI-driven WiFi management and IoT security platform for internet service providers."
            link={<a href="https://www.minim.co/solutions/whole-home-wifi">Learn more</a>}
            imgSrc={minimLogo}
          />
        </Fragment>
      }
    />
  )
}

export default Career
