import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaInstagram, FaTelegram, FaReact, FaHtml5, FaCss3Alt } from 'react-icons/fa'
import { SiJavascript } from 'react-icons/si'
import ParticlesBg from './ParticlesBg'

export default function App() {
  const audioRef = useRef(null)
  const [play, setPlay] = useState(false)

  useEffect(() => {
    if (!audioRef.current) return
    play ? audioRef.current.play() : audioRef.current.pause()
  }, [play])

  return (
    <>
      <ParticlesBg />

      <audio ref={audioRef} loop src="./bg-music.mp3" />

      <motion.div
        className="container"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <motion.img
          src="./profile.jpg"
          className="avatar"
          animate={{ y: [0, -8, 0] }}
          transition={{ repeat: Infinity, duration: 3 }}
        />

        <h1>Kevin Nelson</h1>
        <p className="subtitle">React Developer • Automation • Bot Engineer</p>

        <div className="tech">
          <FaReact className="spin" />
          <SiJavascript />
          <FaHtml5 />
          <FaCss3Alt />
        </div>

        <div className="pixel-rain"></div>

        <div className="social">
          <a href="#"><FaGithub /></a>
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaTelegram /></a>
        </div>

        <button className="music-btn" onClick={() => setPlay(!play)}>
          {play ? '🔊 Music ON' : '🔇 Music OFF'}
        </button>
      </motion.div>
    </>
  )
}