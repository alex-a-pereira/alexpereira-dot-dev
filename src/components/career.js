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

function Career() {
  return (
    <TwoColumns
      wide
      leftColumn={<SectionHeading>Career</SectionHeading>}
      rightColumn={
        <Fragment>
          <Project
            logo={LifeTimeLogo()}
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
