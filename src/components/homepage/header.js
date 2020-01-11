import React from 'react'
import styled from 'styled-components'
import media from 'utils/media-queries'
import { color, fontSize } from 'styles/theme'

import {HeaderIcon} from '../shared/HeaderIcon'

import {FaGithub} from 'react-icons/fa'
import {FaLinkedinIn} from 'react-icons/fa'
import {FaMediumM} from 'react-icons/fa'

const Div = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  flex: 0 0 auto;
  ${media.sm`
    display: ${props => (props.article ? 'flex' : 'block')};
  `};
  z-index: 10;
  height: ${props => (props.article ? '74px' : '')};
  ${media.xs`
    display: block;
    height: 112px;
  `}
`

const LogoWrapper = styled.div`
  padding: 24px 0 24px 24px;
  ${media.sm`
    padding: ${props => (props.article ? '24px 0 24px 24px' : '24px 0 0 0')};
  `};
  ${media.xs`
    padding: 24px 0 0 0;
  `}
`

const NameLink = styled.a`
  text-decoration: none;
`

const Name = styled.h1`
  white-space: nowrap;
  font-size: ${fontSize.f6};
  text-align: left;
  margin: 0;
  line-height: 1.2;
  ${media.sm`
    text-align: center;
    font-size: ${fontSize.f7};
  `};
`

const NameArticle = styled.div`
  white-space: nowrap;
  font-size: ${fontSize.f5};
  font-weight: 700;
  text-align: left;
  margin: 0;
  line-height: 1.2;
  color: ${color.grey900};
  ${media.xs`
    text-align: center;
  `};
`

const Role = styled.div`
  color: ${color.grey700};
  text-align: left;
  line-height: 1.4;
  font-size: ${fontSize.f4};
  ${media.sm`
    text-align: center;
    font-size: ${fontSize.f6};
  `};
`

const SocialLinks = styled.div`
  display: grid;
  grid-column-gap: 4px;
  grid-template-columns: auto auto auto;
  padding: 15px 24px 0 24px;
  ${media.sm`
    padding: ${props => (props.article ? '15px 12px 0 8px' : '4px 0 0 0')};
    grid-column-gap: 0;
  `}
  ${media.xs`
    padding: 0;
  `}
  justify-content: center;
`

const SocialLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  background: white;
  border-radius: 20px;
  color: ${color.grey900};
  border: 1px solid white;
  &:hover {
    border: 1px solid ${color.grey150};
    background: ${color.grey150};
    color: ${color.grey900};
  }
  &:active {
    color: ${color.grey900};
  }
  &:visited {
    color: ${color.grey900};
  }
`

export const SvgWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 24px;
  min-height: 24px;
  color: inherit;
  background: inherit;
`

export const InlineSvg = styled.svg`
  height: 24px;
  width: 24px;
  color: inherit;
  fill: currentColor;
`

const Tooltip = styled.div`
  padding: 2px 24px 0 24px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  opacity: ${props => (props.visible ? '1' : '0')};
  transition: opacity 300ms;
  ${media.sm`
    justify-content: center;
    padding-top: 6px;
  `}
`

const TooltipIcon = styled.div`
  transform: rotate(270deg);
  margin-left: 8px;
`

const TooltipText = styled.div``

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      tooltipIsVisible: false,
      tooltipText: '',
    }
  }

  showTooltip = tooltipText => {
    this.setState({
      tooltipIsVisible: true,
      tooltipText: tooltipText,
    })
  }

  hideTooltip = () => {
    this.setState({
      tooltipIsVisible: false,
    })
  }
  render() {
    return (
      <Div article={this.props.article}>
        <LogoWrapper article={this.props.article}>
          {this.props.article && (
            <NameLink href="/">
              <NameArticle article={this.props.article}>
                Alex Pereira
              </NameArticle>
            </NameLink>
          )}
          {!this.props.article && (
            <Name article={this.props.article}>Alex Pereira</Name>
          )}
          {!this.props.article && <Role>Full-Stack Software Engineer </Role>}
        </LogoWrapper>
        <div>
          <SocialLinks article={this.props.article}>
            <SocialLink
              href={`https://github.com/alex-a-pereira`}
              target="blank"
              onMouseOver={() => this.showTooltip('github')}
              onMouseLeave={this.hideTooltip}
            >
              <FaGithub />
            </SocialLink>
          
            <SocialLink
              href="https://www.linkedin.com/in/alex-a-pereira/"
              target="blank"
              onMouseOver={() => this.showTooltip('linkedin')}
              onMouseLeave={this.hideTooltip}
            >
              <FaLinkedinIn />
            </SocialLink>

            <SocialLink
              href="https://medium.com/@alexapereira14"
              target="blank"
              onMouseOver={() => this.showTooltip('medium')}
              onMouseLeave={this.hideTooltip}
            >
              <FaMediumM />
            </SocialLink>
          
          </SocialLinks>
          {!this.props.article && (
            <Tooltip
              visible={this.state.tooltipIsVisible}
              article={this.props.article}
            >
              <TooltipText>{this.state.tooltipText}</TooltipText>
              <TooltipIcon>
                <HeaderIcon glyph="arrow" size={24} />
              </TooltipIcon>
            </Tooltip>
          )}
        </div>
      </Div>
    )
  }
}

export default Header
