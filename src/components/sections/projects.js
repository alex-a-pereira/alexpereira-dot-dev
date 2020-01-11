import React, { Fragment } from 'react'
import Link from 'gatsby-link'

import TwoColumns from 'components/twoColumns'
import SectionHeading from 'components/sectionHeading'
import { ContentRow } from 'components/ContentRow'

import hpLogo from 'img/logos/hp.png'
import vpinLogo from 'img/logos/vpin.png'
import afPianoLogo from 'img/logos/af-piano.png'

export const Projects = () => {
  return (
    <TwoColumns
      wide
      leftColumn={<SectionHeading>Projects</SectionHeading>}
      rightColumn={
        <Fragment>
          <ContentRow 
            title="Alternate Frequency Piano"
            abstract="Experimental piano-player for playing with atypical-frequency tunings."
            link={<a href="https://alternativepiano.com"  target="_blank" rel="noopener noreferrer">Play the piano</a>}
            imgSrc={afPianoLogo}
            />
          <ContentRow
            title="hackerpile"
            abstract="Cloud storage for your small scripts. Like a Google Docs that's optimized for code."
            link={<a href="http://hackerpile.com" target="_blank" rel="noopener noreferrer">Check out hackerpile</a>}
            imgSrc={hpLogo}
          />

          <ContentRow
            title="VPIN Big-Data analysis"
            abstract='"Volume-Synchronized Probability of Informed Trading" analysis performed on ~500GB of SP500 data.'
            link={<Link to="/vpin">Read more</Link>}
            imgSrc={vpinLogo}
          />
        </Fragment>
      }
    />
  )
};
