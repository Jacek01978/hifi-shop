import { useEffect, useRef } from 'react'

export default function Cursor() {
  const dotRef  = useRef(null)
  const ringRef = useRef(null)

  useEffect(() => {
    let mx = 0, my = 0, rx = 0, ry = 0
    let raf

    const onMove = (e) => {
      mx = e.clientX
      my = e.clientY
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mx}px,${my}px)`
      }
    }

    const loop = () => {
      rx += (mx - rx) * 0.1
      ry += (my - ry) * 0.1
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${rx}px,${ry}px)`
      }
      raf = requestAnimationFrame(loop)
    }

    const onEnterLink = () => {
      if (dotRef.current)  dotRef.current.style.transform  += ' scale(2)'
      if (ringRef.current) ringRef.current.style.borderColor = 'rgba(201,168,76,0.9)'
    }
    const onLeaveLink = () => {
      if (ringRef.current) ringRef.current.style.borderColor = ''
    }

    document.querySelectorAll('a,button').forEach(el => {
      el.addEventListener('mouseenter', onEnterLink)
      el.addEventListener('mouseleave', onLeaveLink)
    })

    window.addEventListener('mousemove', onMove)
    loop()
    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <>
      <div ref={dotRef}  className="cursor-dot"  aria-hidden="true" />
      <div ref={ringRef} className="cursor-ring" aria-hidden="true" />
    </>
  )
}
