'use client'
import { useTheme } from 'next-themes'
import { useEffect, useRef, useState } from 'react'

const JUMP_FORCE = -15
const GRAVITY = 0.8
const GROUND_HEIGHT = 20
const DINO_WIDTH = 40
const DINO_HEIGHT = 40
const ROTATION_SPEED = 0.2
const OBSTACLE_SPEED = 6
const MIN_OBSTACLE_INTERVAL = 800
const MAX_OBSTACLE_HEIGHT = 60
const MIN_OBSTACLE_HEIGHT = 30

export default function DinoGame() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [score, setScore] = useState(0)
  const [gameOver, setGameOver] = useState(false)
  const {theme} = useTheme()
  const gameStateRef = useRef({
    dino: {
      x: 50,
      y: 0,
      velocityY: 0,
      isJumping: false,
      rotation: 0
    },
    obstacles: [] as { x: number; width: number; height: number }[],
    animationFrame: 0,
    lastObstacleTime: 0
  })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio
      canvas.height = canvas.offsetHeight * window.devicePixelRatio
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio)
    }

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    return () => window.removeEventListener('resize', resizeCanvas)
  }, [])

  useEffect(() => {
    if (!isPlaying) return

    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const generateObstacle = () => {
      const height = Math.random() * (MAX_OBSTACLE_HEIGHT - MIN_OBSTACLE_HEIGHT) + MIN_OBSTACLE_HEIGHT
      const width = 20 + Math.random() * 10 // Varying widths
      return {
        x: canvas.offsetWidth,
        width,
        height
      }
    }

    const gameLoop = () => {
      const state = gameStateRef.current
      
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      state.dino.velocityY += GRAVITY
      state.dino.y += state.dino.velocityY

      if (state.dino.isJumping) {
        state.dino.rotation += ROTATION_SPEED
      } else {
        state.dino.rotation = 0
      }

      const groundY = canvas.offsetHeight - DINO_HEIGHT - GROUND_HEIGHT
      if (state.dino.y > groundY) {
        state.dino.y = groundY
        state.dino.velocityY = 0
        state.dino.isJumping = false
        state.dino.rotation = 0
      }

      // generate obstacles
      if (Date.now() - state.lastObstacleTime > MIN_OBSTACLE_INTERVAL) {
        if (Math.random() < 0.3) { // 30% kemungkinan muncul obstacles
          state.obstacles.push(generateObstacle())
          state.lastObstacleTime = Date.now()
        }
      }

      state.obstacles = state.obstacles.filter(obstacle => {
        obstacle.x -= OBSTACLE_SPEED
        
        if (
          state.dino.x < obstacle.x + obstacle.width &&
          state.dino.x + DINO_WIDTH > obstacle.x &&
          state.dino.y < canvas.offsetHeight - GROUND_HEIGHT - obstacle.height + obstacle.height &&
          state.dino.y + DINO_HEIGHT > canvas.offsetHeight - GROUND_HEIGHT - obstacle.height
        ) {
          setGameOver(true)
          setIsPlaying(false)
          return false
        }

        ctx.fillStyle = theme === 'dark' ? '#00ff41' : '#000000';
        ctx.fillRect(
          obstacle.x,
          canvas.offsetHeight - GROUND_HEIGHT - obstacle.height,
          obstacle.width,
          obstacle.height
        )

        return obstacle.x > -obstacle.width
      })

      ctx.fillStyle = theme === 'dark' ? '#00ff41' : '#000000';
      ctx.fillRect(0, canvas.offsetHeight - GROUND_HEIGHT, canvas.offsetWidth, GROUND_HEIGHT)

      ctx.save()
      ctx.translate(
        state.dino.x + DINO_WIDTH / 2,
        state.dino.y + DINO_HEIGHT / 2
      )
      ctx.rotate(state.dino.rotation)
      
      ctx.fillStyle = theme === 'dark' ? '#00ff41' : '#000000';
      ctx.fillRect(
        -DINO_WIDTH / 2,
        -DINO_HEIGHT / 2,
        DINO_WIDTH,
        DINO_HEIGHT
      )

      if (state.dino.isJumping) {
        ctx.fillStyle = '#ffffff'
        ctx.fillRect(
          -DINO_WIDTH / 4,
          -DINO_HEIGHT / 4,
          DINO_WIDTH / 2,
          DINO_HEIGHT / 2
        )
      }

      ctx.restore()

      setScore(prev => prev + 1)

      if (!gameOver) {
        state.animationFrame = requestAnimationFrame(gameLoop)
      }
    }

    gameStateRef.current.animationFrame = requestAnimationFrame(gameLoop)

    return () => {
      if (gameStateRef.current.animationFrame) {
        cancelAnimationFrame(gameStateRef.current.animationFrame)
      }
    }
  }, [isPlaying, gameOver])

  useEffect(() => {
    const handleJump = () => {
      const state = gameStateRef.current
      if (!state.dino.isJumping && isPlaying) {
        state.dino.velocityY = JUMP_FORCE
        state.dino.isJumping = true
        state.dino.rotation = 0
      }
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === 'Space') {
        e.preventDefault()
        if (isPlaying) {
          handleJump()
        }
      }
    }

    const handleTouch = (e: TouchEvent) => {
      e.preventDefault()
      if (isPlaying) {
        handleJump()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    document.addEventListener('touchstart', handleTouch)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.removeEventListener('touchstart', handleTouch)
    }
  }, [isPlaying])

  const startGame = () => {
    setIsPlaying(true)
    setGameOver(false)
    setScore(0)
    gameStateRef.current = {
      dino: {
        x: 50,
        y: 0,
        velocityY: 0,
        isJumping: false,
        rotation: 0
      },
      obstacles: [],
      animationFrame: 0,
      lastObstacleTime: Date.now()
    }
  }

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center">
      <canvas
        ref={canvasRef}
        className="w-full h-full dark:bg-gray-800 dark:hover:shadow-[8px_8px_0px_rgba(255,255,255,0.2)] bg-[#FF7F50] rounded-lg touch-none"
      />
      
      {(!isPlaying || gameOver) && (
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <button 
            onClick={startGame}
            className="w-24 h-24 rounded-full bg-black dark:bg-[#00ff41] hover:bg-black/90 transition-transform hover:scale-110 flex items-center justify-center"
            aria-label={gameOver ? "Restart Game" : "Start Game"}
          >
            <svg 
              viewBox="0 0 24 24" 
              className="w-12 h-12 fill-white"
              aria-hidden="true"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </button>
          {gameOver ? (
            <div className="text-center mt-4">
              <p className="text-black dark:text-white text-xl font-bold mb-2">Game Over!</p>
              <p className="text-black dark:text-white">Score: {score}</p>
            </div>
          ) : (
            <p className="text-black dark:text-white text-xl font-bold mt-4">Press Space or Tap to Start</p>
          )}
        </div>
      )}
      
      {isPlaying && (
        <div className="absolute top-4 left-4">
          <p className="text-black dark:text-white font-bold">Score: {score}</p>
        </div>
      )}
    </div>
  )
}

