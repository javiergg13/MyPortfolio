import { useEffect, useState } from 'react'

const FollowMouse = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 })

  // pointer move
  useEffect(() => {
    const handleMove = (event) => {
      const { clientX, clientY } = event
      setPosition({ x: clientX, y: clientY })
      console.log(clientX, clientY)
    }

    window.addEventListener('pointermove', handleMove)
        

    return () => {
      window.removeEventListener('pointermove', handleMove)
    }
  }, [])

  return (
    <main>
      <div style={{
        position: 'absolute',
        backgroundColor: '#09f',
        borderRadius: '50%',
        opacity: 0.4,
        pointerEvents: 'none',
        width: 40,
        height: 40,
        transform: `translate(${position.x}px, ${position.y}px)`
      }}
      />
    </main>
  )
}

export function MouseFollower () {
  return (
    <main>
      <FollowMouse />
    </main>
  )
}
