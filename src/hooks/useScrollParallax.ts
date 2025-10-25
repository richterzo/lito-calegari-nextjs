import { useScroll, useTransform, useSpring, MotionValue } from 'framer-motion'
import { RefObject } from 'react'

interface ScrollParallaxOptions {
  offset?: [string, string]
  smoothness?: number
}

export function useScrollParallax(
  ref: RefObject<HTMLElement | HTMLDivElement | null>,
  options: ScrollParallaxOptions = {}
) {
  const { offset = ['start end', 'end start'], smoothness = 100 } = options

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: offset as any,
  })

  // Spring for smoother animations
  const springConfig = { stiffness: smoothness, damping: 30, restDelta: 0.001 }

  // Various parallax effects
  const y = useSpring(
    useTransform(scrollYProgress, [0, 1], [100, -100]),
    springConfig
  )

  const yFast = useSpring(
    useTransform(scrollYProgress, [0, 1], [200, -200]),
    springConfig
  )

  const ySlow = useSpring(
    useTransform(scrollYProgress, [0, 1], [50, -50]),
    springConfig
  )

  const scale = useSpring(
    useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]),
    springConfig
  )

  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]),
    springConfig
  )

  const rotate = useSpring(
    useTransform(scrollYProgress, [0, 1], [-5, 5]),
    springConfig
  )

  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.5, 1], [15, 0, -15]),
    springConfig
  )

  const rotateY = useSpring(
    useTransform(scrollYProgress, [0, 0.5, 1], [-10, 0, 10]),
    springConfig
  )

  return {
    scrollYProgress,
    y,
    yFast,
    ySlow,
    scale,
    opacity,
    rotate,
    rotateX,
    rotateY,
  }
}

