import React, { Fragment } from 'react'

import TwoColumns from 'components/twoColumns'
import SectionHeading from 'components/sectionHeading'
import Project from 'components/project'

function Education() {
  return (
    <TwoColumns
      wide
      leftColumn={<SectionHeading>Education</SectionHeading>}
      rightColumn={
        <Fragment>
          <Project
            title="UMass Lowell"
            abstract="Bachelor of Science in Finance - Computer Science Minor"
          />
          <Project
            title="Nashua Community College"
            abstract="Associate of Science in General Studies"
          />
        </Fragment>
      }
    />
  )
}

export default Education
