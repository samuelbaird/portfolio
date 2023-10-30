import { Particles } from 'react-tsparticles';
import { loadFull } from 'tsparticles'
import { useCallback } from 'react';
import './particles.scss'


const ParticlesContainer = () => {
      const particlesInit = useCallback(async (engine) => {
          await loadFull(engine);
      }, []);
    
    const particlesLoaded = useCallback(async () => {}, []);

    return (
        <Particles className='w-full h-full absolute translate-z-0' id='tsparticles' init={particlesInit} loaded={particlesLoaded}
            options={{
                fullScreen: { enable: false },
                background: {
                    color: {
                        value: ''
                    }
                },
                fpsLimit: 60,
                interactivity: {
                    events: {
                        onClick: {
                            enable: false,
                            mode: 'push',
                        },
                        onHover: {
                            enable: true,
                            mode: 'repulse',
                        },
                        resize: true,
                    },
                    modes: {
                        push: {
                            quantity: 90
                        },
                        repulse: {
                            distance: 100,
                            duration: 0.4
                        }
                    }
                },
                particles: {
                    color: {
                        value: '#2E3B55',
                    },
                    links: {
                        color: '#2E3B55',
                        distance: 150,
                        enable: true,
                        opacity: 0.5,

                    },
                    collisions: {
                        enable: true
                    },
                    move: {
                        direction: 'none',
                        enable: true,
                        outModes: {
                            default: 'bounce',
                        },
                        random: false,
                        speed: 1,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 800,
                        },
                        value: 80,
                    },
                    opacity: {
                        value: 0.5,
                    },
                    shape: {
                        type: 'circle',
                    },
                    size: {
                        value: { min: 1, max: 5 },
                    },
                },
                detectRetina: true,
            }}
                
                />

    )
}
export default ParticlesContainer