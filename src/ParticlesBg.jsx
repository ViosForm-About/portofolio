import Particles from 'react-tsparticles'
import { loadFull } from 'tsparticles'

export default function ParticlesBg() {
  const init = async (engine) => {
    await loadFull(engine)
  }

  return (
    <Particles
      init={init}
      options={{
        fullScreen: { enable: true },
        fpsLimit: 60,
        particles: {
          number: { value: 70 },
          color: { value: '#00c6ff' },
          shape: { type: 'circle' },
          opacity: { value: 0.5 },
          size: { value: 2 },
          move: { enable: true, speed: 1 }
        }
      }}
    />
  )
}