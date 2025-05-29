"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

const ParallaxHero = () => {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="parallax-container h-screen relative overflow-hidden">
      {/* Background Layer */}
      <div
        className="parallax-layer"
        style={{
          transform: `translateY(${scrollY * 0.1}px)`,
          backgroundImage: "linear-gradient(to bottom, #000000, #1a1a1a)",
          opacity: 0.9,
        }}
      />

      {/* Middle Layer - Sneaker Silhouettes */}
      <div
        className="parallax-layer flex justify-center items-center"
        style={{ transform: `translateY(${scrollY * 0.3}px)` }}
      >
        <div className="absolute w-full h-full opacity-20">
          <div className="absolute top-[20%] left-[10%] w-64 h-64 bg-white rounded-full blur-3xl"></div>
          <div className="absolute top-[40%] right-[15%] w-80 h-80 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-[15%] left-[30%] w-72 h-72 bg-white rounded-full blur-3xl"></div>
        </div>
      </div>

      {/* Foreground Layer - Text and CTA */}
      <div
        className="parallax-layer flex flex-col justify-center items-center text-white px-4 z-10"
        style={{ transform: `translateY(${scrollY * -0.2}px)` }}
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-4">OOPS INDONESIA</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Sneakers with attitude. Not the originals, but original enough.
          </p>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <button className="bg-white text-black px-8 py-3 rounded-full text-lg font-bold hover:bg-gray-200 transition-colors">
              SHOP NOW
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Animated Sneaker Images */}
      <motion.div
        className="absolute bottom-[-5%] left-[10%] w-64 h-64"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        style={{ transform: `translateY(${scrollY * -0.4}px) rotate(${scrollY * 0.02}deg)` }}
      >
        <img
          src="../../img/hero/Jordan.jpg"
          alt="Jordunk Sneaker"
          className="w-full h-full object-contain"
        />
      </motion.div>

      <motion.div
        className="absolute bottom-[-10%] right-[15%] w-72 h-72"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.7 }}
        style={{ transform: `translateY(${scrollY * -0.5}px) rotate(${scrollY * -0.02}deg)` }}
      >
        <img src="/placeholder.svg?height=300&width=300" alt="Naik Sneaker" className="w-full h-full object-contain" />
      </motion.div>
    </div>
  )
}

export default ParallaxHero
