'use client'

import { useState } from 'react'

function LikeButton () {
  const [liked, setLiked] = useState()

  return (
    <button onClick={() => setLiked(!liked)}>
      {liked ? 'Like' : 'No Like'}
    </button>
  )
}

export default LikeButton
