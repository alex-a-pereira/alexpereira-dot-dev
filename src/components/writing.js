import React from 'react'

import TwoColumns from 'components/twoColumns'
import Project from 'components/project'
import SectionHeading from 'components/sectionHeading'

const ScenographicsLink = (
  <a href="http://medium.com/scenographics">Read More on Medium ↗</a>
)

function Writing() {
  return (
    <TwoColumns
      wide
      leftColumn={<SectionHeading>Writing</SectionHeading>}
      rightColumn={
        <Project
          title="Scenographics"
          abstract="Interview series with creative people within the festival scene. (German only)"
          link={ScenographicsLink}
        />
      }
    />
  )
}

export default Writing
