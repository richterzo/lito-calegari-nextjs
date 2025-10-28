'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState, useEffect, useCallback, useMemo, memo } from 'react'

interface OtherServicesSectionProps {
  isMobile: boolean
}

interface Sphere {
  id: string
  x: number
  y: number
  vx: number
  vy: number
  size: number
  isDragging: boolean
}

const services = [
  'Rilegatura',
  'Plastificazione',
  'Taglio',
  'Taglio plotter',
  'Nobilitazione',
  'Soft Touch',
  'Impaginazione',
  'Stampa dato variabile',
  'Prespaziati',
  'Consulenza',
]

// Dimensioni variabili per le sfere (da 100 a 160px - più grandi)
const sphereSizes = [150, 120, 140, 110, 160, 125, 130, 135, 145, 100]

// Memoize to prevent re-renders
const OtherServicesSection = ({ isMobile }: OtherServicesSectionProps) => {
  const sectionRef = useRef(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: false, margin: '-100px' })
  const animationRef = useRef<number | undefined>(undefined)

  const [spheres, setSpheres] = useState<Sphere[]>([])
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 })

  // Gravity and physics constants - Perfect smooth physics
  const GRAVITY = useMemo(() => 0.35, [])
  const BOUNCE = useMemo(() => 0.45, [])
  const FRICTION = useMemo(() => 0.992, [])
  const RESTITUTION = useMemo(() => 0.6, [])
  const MIN_VELOCITY = useMemo(() => 0.2, [])
  const MAX_VELOCITY = useMemo(() => 15, [])

  // Initialize container size
  useEffect(() => {
    const updateSize = () => {
      if (containerRef.current) {
        setContainerSize({
          width: containerRef.current.offsetWidth,
          height: containerRef.current.offsetHeight,
        })
      }
    }
    updateSize()
    window.addEventListener('resize', updateSize)
    return () => window.removeEventListener('resize', updateSize)
  }, [])

  // Initialize/clear spheres based on view state
  useEffect(() => {
    // Clear spheres when out of view
    if (!isInView) {
      const timer = setTimeout(() => {
        setSpheres([])
      }, 100)
      return () => clearTimeout(timer)
    }

    // Initialize spheres when in view
    if (containerSize.width === 0) return

    const timer = setTimeout(() => {
      const initialSpheres = services.map((service, index) => {
        const size = isMobile ? sphereSizes[index] * 0.75 : sphereSizes[index]
        return {
          id: service,
          x: Math.random() * (containerSize.width - size) + size / 2,
          y: -150 - index * 80, // Start above viewport, more spacing
          vx: (Math.random() - 0.5) * 2.5,
          vy: 0,
          size,
          isDragging: false,
        }
      })
      setSpheres(initialSpheres)
    }, 100)

    return () => clearTimeout(timer)
  }, [isInView, isMobile, containerSize.width])

  // Perfect collision detection and resolution - Zero glitch
  const resolveCollision = useCallback(
    (
      s1: Sphere,
      s2: Sphere,
      containerSize: { width: number; height: number }
    ) => {
      const dx = s2.x - s1.x
      const dy = s2.y - s1.y
      const distSq = dx * dx + dy * dy
      const minDist = (s1.size + s2.size) / 2
      const minDistSq = minDist * minDist

      // Early exit if no collision (avoid sqrt)
      if (distSq >= minDistSq) return

      const distance = Math.sqrt(distSq)

      // Prevent division by zero
      if (distance < 0.1) return

      // Normalize collision vector
      const nx = dx / distance
      const ny = dy / distance

      // Relative velocity
      const dvx = s2.vx - s1.vx
      const dvy = s2.vy - s1.vy

      // Relative velocity in collision normal direction
      const dvn = dvx * nx + dvy * ny

      // Do not resolve if velocities are separating
      if (dvn >= 0) return

      // Collision impulse (simplified for equal mass) with damping
      const impulse = dvn * RESTITUTION * 0.95

      // Apply impulse with clamping
      s1.vx += impulse * nx
      s1.vy += impulse * ny
      s2.vx -= impulse * nx
      s2.vy -= impulse * ny

      // Gradual separation to prevent jitter
      const overlap = minDist - distance
      const separationFactor = 0.5
      const separationX = (overlap * separationFactor + 0.5) * nx
      const separationY = (overlap * separationFactor + 0.5) * ny

      s1.x -= separationX
      s1.y -= separationY
      s2.x += separationX
      s2.y += separationY

      // Ensure bounds after collision with small margin
      const s1Radius = s1.size / 2
      const s2Radius = s2.size / 2
      const margin = 1
      s1.x = Math.max(
        s1Radius + margin,
        Math.min(s1.x, containerSize.width - s1Radius - margin)
      )
      s1.y = Math.max(
        s1Radius + margin,
        Math.min(s1.y, containerSize.height - s1Radius - margin)
      )
      s2.x = Math.max(
        s2Radius + margin,
        Math.min(s2.x, containerSize.width - s2Radius - margin)
      )
      s2.y = Math.max(
        s2Radius + margin,
        Math.min(s2.y, containerSize.height - s2Radius - margin)
      )
    },
    [RESTITUTION]
  )

  // Optimized physics animation loop
  useEffect(() => {
    if (spheres.length === 0 || !containerSize.width) return

    let lastTime = performance.now()
    const targetFPS = 60
    const frameTime = 1000 / targetFPS

    const animate = (currentTime: number) => {
      const deltaTime = currentTime - lastTime

      // Skip frame if not enough time has passed (throttle to 60fps max)
      if (deltaTime < frameTime) {
        animationRef.current = requestAnimationFrame(animate)
        return
      }

      lastTime = currentTime

      setSpheres((prevSpheres) => {
        // Check if any sphere is still moving
        let isMoving = false

        const newSpheres = prevSpheres.map((sphere) => {
          if (sphere.isDragging) return sphere

          let { x, y, vx, vy } = sphere
          const radius = sphere.size / 2

          // Apply gravity only if sphere is not at rest
          if (
            Math.abs(vx) > MIN_VELOCITY ||
            Math.abs(vy) > MIN_VELOCITY ||
            y + radius < containerSize.height - 1
          ) {
            vy += GRAVITY
            isMoving = true
          }

          // Apply friction
          vx *= FRICTION
          vy *= FRICTION

          // Clamp velocity to prevent extreme speeds (anti-glitch)
          const speed = Math.sqrt(vx * vx + vy * vy)
          if (speed > MAX_VELOCITY) {
            const scale = MAX_VELOCITY / speed
            vx *= scale
            vy *= scale
          }

          // Update position
          x += vx
          y += vy

          // Wall collision - left and right with damping
          const margin = 1
          if (x - radius < margin) {
            x = radius + margin
            vx = Math.abs(vx) * BOUNCE
          } else if (x + radius > containerSize.width - margin) {
            x = containerSize.width - radius - margin
            vx = -Math.abs(vx) * BOUNCE
          }

          // Floor collision with progressive damping
          if (y + radius >= containerSize.height - margin) {
            y = containerSize.height - radius - margin
            vy *= -BOUNCE
            vx *= 0.97 // Floor friction
            // Stop bouncing when velocity is very low
            if (Math.abs(vy) < 0.5) {
              vy = 0
              vx *= 0.94 // More friction when settled
            }
          }

          // Ceiling collision
          if (y - radius < margin) {
            y = radius + margin
            vy = Math.abs(vy) * BOUNCE
          }

          // Stop very small velocities to save computation
          if (Math.abs(vx) < MIN_VELOCITY) vx = 0
          if (Math.abs(vy) < MIN_VELOCITY) vy = 0

          return { ...sphere, x, y, vx, vy }
        })

        // Optimized collision detection - only check active spheres
        for (let i = 0; i < newSpheres.length; i++) {
          if (newSpheres[i].isDragging) continue

          for (let j = i + 1; j < newSpheres.length; j++) {
            if (newSpheres[j].isDragging) continue

            resolveCollision(newSpheres[i], newSpheres[j], containerSize)
          }
        }

        // Continue animating if something is still moving or dragging
        if (isMoving || newSpheres.some((s) => s.isDragging)) {
          animationRef.current = requestAnimationFrame(animate)
        }

        return newSpheres
      })
    }

    animationRef.current = requestAnimationFrame(animate)

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [
    spheres.length,
    containerSize,
    GRAVITY,
    FRICTION,
    BOUNCE,
    MIN_VELOCITY,
    MAX_VELOCITY,
    resolveCollision,
  ])

  const handleDragStart = useCallback((id: string) => {
    setSpheres((prev) =>
      prev.map((s) =>
        s.id === id ? { ...s, isDragging: true, vx: 0, vy: 0 } : s
      )
    )
    // Restart animation loop if stopped
    if (!animationRef.current) {
      animationRef.current = requestAnimationFrame(() => {})
    }
  }, [])

  const handleDrag = useCallback(
    (id: string, x: number, y: number, size: number) => {
      // Clamp position to keep sphere inside container
      const radius = size / 2
      const clampedX = Math.max(
        radius,
        Math.min(containerSize.width - radius, x)
      )
      const clampedY = Math.max(
        radius,
        Math.min(containerSize.height - radius, y)
      )

      setSpheres((prev) =>
        prev.map((s) => (s.id === id ? { ...s, x: clampedX, y: clampedY } : s))
      )
    },
    [containerSize.width, containerSize.height]
  )

  const handleDragEnd = useCallback((id: string) => {
    // Stop dragging and let gravity take over (no momentum, natural fall)
    setSpheres((prev) =>
      prev.map((s) => (s.id === id ? { ...s, isDragging: false } : s))
    )
    // Restart animation loop if stopped
    if (!animationRef.current) {
      animationRef.current = requestAnimationFrame(() => {})
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      className="py-20 md:py-32 bg-white relative overflow-hidden"
    >
      {/* Clean minimal background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 to-white pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        {/* Title - Large and Responsive */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16 md:mb-24"
        >
          <h2 className="text-6xl md:text-8xl lg:text-9xl font-bold text-neutral-800 tracking-tight">
            e molto altro...
          </h2>
        </motion.div>

        {/* Physics Container with Falling Spheres */}
        <div
          ref={containerRef}
          className="relative w-full h-[450px] md:h-[550px] bg-gradient-to-b from-gray-50 to-white rounded-3xl overflow-hidden touch-none"
          style={{ contain: 'layout style paint' }}
        >
          {spheres.map((sphere) => (
            <motion.div
              key={sphere.id}
              drag
              dragElastic={0}
              dragMomentum={false}
              dragTransition={{
                bounceStiffness: 500,
                bounceDamping: 40,
                power: 0,
                timeConstant: 200,
              }}
              onDragStart={() => handleDragStart(sphere.id)}
              onDrag={(_, info) => {
                const rect = containerRef.current?.getBoundingClientRect()
                if (rect) {
                  handleDrag(
                    sphere.id,
                    info.point.x - rect.left,
                    info.point.y - rect.top,
                    sphere.size
                  )
                }
              }}
              onDragEnd={() => {
                handleDragEnd(sphere.id)
              }}
              className="absolute cursor-grab active:cursor-grabbing transition-shadow"
              style={{
                left: sphere.x - sphere.size / 2,
                top: sphere.y - sphere.size / 2,
                width: sphere.size,
                height: sphere.size,
                willChange: sphere.isDragging ? 'transform' : 'auto',
              }}
              whileDrag={{
                scale: 1.02,
                zIndex: 50,
                cursor: 'grabbing',
                transition: { duration: 0.1 },
              }}
              dragConstraints={containerRef}
              dragPropagation={false}
            >
              {/* Sphere - Optimized rendering with contained text */}
              <div
                className={`w-full h-full rounded-full bg-gradient-to-br from-white to-gray-100 border-2 border-gray-300 flex items-center justify-center transition-shadow overflow-hidden ${
                  sphere.isDragging ? 'shadow-2xl' : 'shadow-lg'
                }`}
              >
                <span
                  className="font-bold text-neutral-800 text-center leading-tight select-none pointer-events-none"
                  style={{
                    fontSize: `${Math.max(9, sphere.size * 0.11)}px`,
                    padding: `0 ${sphere.size * 0.1}px`,
                    maxWidth: '90%',
                    wordBreak: 'break-word',
                    hyphens: 'auto',
                  }}
                >
                  {sphere.id}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default memo(OtherServicesSection)
