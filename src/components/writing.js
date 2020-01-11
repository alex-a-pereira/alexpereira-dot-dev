import React from 'react'

import TwoColumns from 'components/twoColumns'
import { ContentRow } from './ContentRow'
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
        <ContentRow
          title="Scenographics"
          abstract="Interview series with creative people within the festival scene. (German only)"
          link={ScenographicsLink}
        />
      }
    />
  )
}

export default Writing
