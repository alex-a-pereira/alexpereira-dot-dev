import React, { Fragment } from 'react'
import Link from 'gatsby-link'

import TwoColumns from 'components/twoColumns'
import SectionHeading from 'components/sectionHeading'
import Project from 'components/project'

import hpLogo from 'img/logos/hp.png'
import vpinLogo from 'img/logos/vpin.png'

function Work() {
  return (
    <TwoColumns
      wide
      leftColumn={<SectionHeading>Projects</SectionHeading>}
      rightColumn={
        <Fragment>
          <Project
            title="hackerpile"
            abstract='Cloud storage for your small scripts. Like a Google Docs thats optimized for code.'
            link={<a href="https://hackerpile.com">Check out hackerpile</a>}
            imgSrc={hpLogo}
          />

          <Project
            title="VPIN Big-Data analysis"
            abstract='"Volume-Synchronized Probability of Informed Trading" analysis performed on ~500GB of SP500 data.'
            link={<Link to="/vpin">Read more</Link>}
            imgSrc={vpinLogo}
          />
        </Fragment>
      }
    />
  )
}

export default Work
