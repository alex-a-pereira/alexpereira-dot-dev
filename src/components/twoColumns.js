import React from 'react'
import styled from 'styled-components'

import media from 'utils/media-queries'

import { color, fontSize } from 'styles/theme'

const Div = styled.div`
  display: grid;
  grid-template-columns: 100px auto;
  justify-content: space-between;
  width: 100%;
  ${media.md`
    grid-template-columns: auto;
    justify-content: center;
  `}
`

const RightColumn = styled.div`
  max-width: ${props => props.wide ? '620px' : '544px'};
  ${media.md`
    max-width: 544px;
  `}
`;

const LeftColumnHeading = styled.h2`
border-top: 2px solid ${color.grey900};
display: inline-block;
font-size: ${fontSize.f5};
color: ${color.grey900};
letter-spacing: 5px;
text-transform: uppercase;
font-weight: 700;
margin: 6px 0 0 0;
padding: 16px 0 0 0;
line-height: 1.1;
${media.md`
    border-top: none;
    margin-bottom: 72px;
    padding-bottom: 12px;
    border-bottom: 2px solid ${color.grey900};
  `}
${media.sm`
    margin-bottom: 60px;
    padding-bottom: 8px;
  `}
`

const TwoColumns = props => {
  return (
    <Div>
      <div>
        <LeftColumnHeading>{props.headingText}</LeftColumnHeading>
      </div>
      <RightColumn wide={props.wide}>{props.rightColumn}</RightColumn>
    </Div>
  )
}

export default TwoColumns
