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

function Work() {
  return (
    <TwoColumns
      wide
      leftColumn={<SectionHeading>Projects</SectionHeading>}
      rightColumn={
        <Fragment>
          <Project
            logo={PalettteAppLogo()}
            title="hackerpile"
            abstract='Cloud storage for your small scripts. Like a Google Docs thats optimized for code.'
            link={<a href="https://hackerpile.com">Check out hackerpile</a>}
          />

          <Project
            logo={PalettteAppLogo()}
            title="VPIN Big-Data analysis"
            abstract='"Volume-Synchronized Probability of Informed Trading" analysis performed on ~500GB of SP500 data.'
            link={<Link to="/vpin">Read more</Link>}
          />
        </Fragment>
      }
    />
  )
}

export default Work
