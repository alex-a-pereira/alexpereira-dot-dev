import React, { Fragment } from 'react'

import TwoColumns from 'components/twoColumns'
import SectionHeading from 'components/sectionHeading'
import Project from 'components/project'

function Career() {
  return (
    <TwoColumns
      wide
      leftColumn={<SectionHeading>Career</SectionHeading>}
      rightColumn={
        <Fragment>
          <Project
            title="Minim"
            abstract="An AI-driven WiFi management and IoT security platform for service providers."
            link={<a href="https://www.minim.co/solutions/whole-home-wifi">Learn more</a>}
          />
        </Fragment>
      }
    />
  )
}

export default Career
