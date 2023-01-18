import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'

type Props = {}

function Hero({}: Props) {

    const [text, count] = useTypewriter({
        words: [
            'Hey, My name is Josh', 
            'Guy-who-loves-Coffee.tsx', 
            '<ButLovesToCodeMore />'
        ],
        loop: true
    })

  return (
    <div>

    </div>
  )
}

export default Hero