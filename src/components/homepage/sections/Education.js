import React, { Fragment } from 'react'

import TwoColumns from 'components/twoColumns'
import { ContentRow } from '../ContentRow'

import umlLogo from 'img/logos/uml.png'
import nccLogo from 'img/logos/ncc.png'

export const Education = () => {
  return (
    <TwoColumns
      wide
      headingText="Education"
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
};