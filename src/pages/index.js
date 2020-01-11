import React from 'react'

import GlobalWrapper from 'components/global-wrapper'
import Hero from 'components/hero'
import {Section} from '../components/section'
import About from '../components/sections/about'
import Projects from '../components/sections/projects'
import Education from '../components/sections/education'
import Footer from 'components/footer'
import Career from '../components/sections/career';

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
