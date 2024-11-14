import React from 'react'
import Card from './components/card/card'
function Home() {
  return (
    <div>
      <Card cards={[{id: 1, imageSrc: 'https://i.pinimg.com/736x/49/31/4a/49314a4c74ca7c9209e231e481d32b0e.jpg', title: 'Card 1'}, {id: 2, imageSrc: 'https://i.pinimg.com/736x/a0/84/58/a08458149f0f1e3edc34c6e361651c27.jpg', title: 'Card 2'}, {id: 3, imageSrc: 'https://i.pinimg.com/736x/bc/d8/cf/bcd8cf4d1eb9dcbe1ce6c88d4c953c58.jpg', title: 'Card 3'}]} />
    </div>
  )
}

export default Home