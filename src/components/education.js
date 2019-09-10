import React, { Fragment } from 'react'
import Link from 'gatsby-link'

import TwoColumns from 'components/twoColumns'
import SectionHeading from 'components/sectionHeading'
import Project from 'components/project'

import KellerkindLogo from 'img/kellerkindlogo'
import PalettteAppLogo from 'img/palettteapplogo'
import LifeTimeLogo from 'img/lifetimelogo'
import BamLogo from 'img/bamlogo'

const PalettteLink = <Link to="/palettteapp">Read More</Link>

function Education() {
  return (
    <TwoColumns
      wide
      leftColumn={<SectionHeading>Education</SectionHeading>}
      rightColumn={
        <Fragment>
          <Project
            logo={KellerkindLogo()}
            title="UMass Lowell"
            abstract="Bachelor of Science in Finance - Computer Science Minor"
          />
          <Project
            logo={KellerkindLogo()}
            title="Nashua Community College"
            abstract="Associate of Science in General Studies"
          />
        </Fragment>
      }
    />
  )
}

export default Education
