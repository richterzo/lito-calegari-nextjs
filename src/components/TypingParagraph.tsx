'use client'

import React, { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

interface TypingParagraphProps {
  text: string
  className?: string
  typingSpeed?: number // characters per second
}

const TypingParagraph: React.FC<TypingParagraphProps> = ({
  text,
  className,
  typingSpeed = 40, // 40 caratteri al secondo = fluido e leggibile
}) => {
  const [displayed, setDisplayed] = useState('')
  const [isComplete, setIsComplete] = useState(false)
  const [showCursor, setShowCursor] = useState(true)
  const containerRef = useRef<HTMLParagraphElement | null>(null)
  const isInView = useInView(containerRef, { once: true, margin: '-20%' })

  // Typing effect quando entra in viewport
  useEffect(() => {
    if (!isInView) return

    let currentIndex = 0
    const totalChars = text.length
    const intervalTime = 1000 / typingSpeed // millisecondi per carattere

    const typingInterval = setInterval(() => {
      if (currentIndex <= totalChars) {
        setDisplayed(text.slice(0, currentIndex))
        currentIndex++
      } else {
        clearInterval(typingInterval)
        setIsComplete(true)
        // Nascondi il cursore dopo 1 secondo quando completo
        setTimeout(() => setShowCursor(false), 1000)
      }
    }, intervalTime)

    return () => clearInterval(typingInterval)
  }, [isInView, text, typingSpeed])

  // Cursor blink effect
  useEffect(() => {
    if (!showCursor) return

    const blinkInterval = setInterval(() => {
      setShowCursor((prev) => !prev || isComplete)
    }, 530)

    return () => clearInterval(blinkInterval)
  }, [isComplete, showCursor])

  return (
    <motion.p
      ref={containerRef}
      className={className}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      {displayed}
      {!isComplete && (
        <motion.span
          className="inline-block w-[3px] h-[1em] ml-1 bg-[#C6D92E]"
          animate={{ opacity: showCursor ? 1 : 0 }}
          transition={{ duration: 0 }}
        />
      )}
    </motion.p>
  )
}

export default TypingParagraph
