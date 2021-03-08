// Inspired by Corey Haggards "Screeners"
// https://dribbble.com/shots/4138489-Screeners

import React from 'react'
import ReactDOM from 'react-dom'
import { Parallax, ParallaxLayer } from 'react-spring/dist/addons'
import './styles.css'

const Page = ({ offset, caption, first, second, gradient, onClick }) => (
  <React.Fragment>
    <ParallaxLayer offset={offset} speed={0.2} onClick={onClick}>
      <div className="slopeBegin" />
    </ParallaxLayer>

    <ParallaxLayer offset={offset} speed={-0.2} onClick={onClick}>
      <div className={`slopeEnd ${gradient}`} />
    </ParallaxLayer>

    <ParallaxLayer className="text number" offset={offset} speed={0.3}>
      <span>0{offset + 1}</span>
    </ParallaxLayer>

    <ParallaxLayer className="text header" offset={offset} speed={0.4}>
      <span>
        <p style={{ fontSize: 20 }}>{caption}</p>
        <div className={`stripe ${gradient}`} />
        <p>{first}</p>
        <p>{second}</p>
      </span>
    </ParallaxLayer>
  </React.Fragment>
)

class App extends React.Component {
  scroll = (to) => this.refs.parallax.scrollTo(to)
  render() {
    return (
      <Parallax className="container" ref="parallax" pages={5} horizontal scrolling={false}>
        <Page offset={0} gradient="pink" caption="who we are" first="Lorem ipsum" second="dolor sit" onClick={() => this.scroll(1)} />
        <Page offset={1} gradient="teal" caption="what we do" first="consectetur" second="adipiscing elit" onClick={() => this.scroll(2)} />
        <Page offset={2} gradient="teal" caption="what we do" first="consectetur" second="adipiscing elit" onClick={() => this.scroll(3)} />
        <Page offset={3} gradient="teal" caption="what we do" first="consectetur" second="adipiscing elit" onClick={() => this.scroll(4)} />
        <Page offset={4} gradient="tomato" caption="what we want" first="Morbi quis" second="est dignissim" onClick={() => this.scroll(0)} />
      </Parallax>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
