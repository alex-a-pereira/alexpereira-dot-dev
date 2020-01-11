import React, { Fragment } from 'react'

import TwoColumns from 'components/twoColumns'
import SectionHeading from 'components/sectionHeading'
import { ContentRow } from '../ContentRow'

import umlLogo from 'img/logos/uml.png'
import nccLogo from 'img/logos/ncc.png'

function Education() {
  return (
    <TwoColumns
      wide
      leftColumn={<SectionHeading>Education</SectionHeading>}
      rightColumn={
        <Fragment>
          <ContentRow
            title="UMass Lowell"
            abstract="Bachelor of Science in Finance - Computer Science Minor"
            imgSrc={umlLogo}
          />
          <ContentRow
            title="Nashua Community College"
            abstract="Associate of Science in General Studies"
            imgSrc={nccLogo}
          />
        </Fragment>
      }
    />
  )
}

export default Education
