import React from 'react'

import GlobalWrapper from '../shared/GlobalWrapper'
import {HeroAnimation} from './HeroAnimation'

import {Section} from '../section'

import {About} from '../sections/About'
import {Projects} from '../sections/Projects'
import {Education} from '../sections/Education'
import {Career} from '../sections/Career';

import {Footer} from '../shared/Footer'

export const IndexPage = () => {
  return (
    <GlobalWrapper>
      <HeroAnimation />
      <Section id={'about'}><About /></Section>
      <Section id={'career'}><Career /></Section>
      <Section id={'projects'}><Projects /></Section>
      <Section id={'education'}><Education /></Section>
      <Section id={'footer'}><Footer /></Section>
    </GlobalWrapper>
  )
};
