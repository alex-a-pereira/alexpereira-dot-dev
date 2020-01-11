import React from 'react'

import GlobalWrapper from '../components/GlobalWrapper'
import Hero from 'components/hero'
import {Section} from '../components/section'
import {About} from '../components/sections/About'
import {Projects} from '../components/sections/Projects'
import {Education} from '../components/sections/Education'
import {Career} from '../components/sections/Career';
import Footer from 'components/footer'

export default class App extends React.Component {
  render() {
    return (
      <GlobalWrapper>
        <Hero />
        <Section id={'about'}><About /></Section>
        <Section id={'career'}><Career /></Section>
        <Section id={'projects'}><Projects /></Section>
        <Section id={'education'}><Education /></Section>
        <Section id={'footer'}><Footer /></Section>
      </GlobalWrapper>
    )
  }
}
