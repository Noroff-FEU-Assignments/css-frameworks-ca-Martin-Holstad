import React from 'react'
import Container from 'react-bootstrap/Container'
import Carousel from "./Carousel"
import Tab from "./Tab"
import Accordion from "./Accordion"


function Home() {
  return (
    <main>
      <Carousel />
      <Container>
        <div>
          <h1>We do YAY things</h1>
          <p>Nam tincidunt, sapien nec congue porta, tellus risus ullamcorper mi, a rutrum justo eros pretium libero. Nullam vel enim id mauris eleifend finibus et ac orci. Aliquam metus massa, aliquam quis arcu sit amet, consectetur faucibus urna. Suspendisse massa diam, efficitur eu massa euismod, pretium lacinia magna. Donec mi orci, sollicitudin in luctus a, varius eget massa.</p>
        </div>
      </Container>
      <Tab />
      <Accordion />
    </main>
  )
}

export default Home
