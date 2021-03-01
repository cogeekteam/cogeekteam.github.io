import React from "react";
import Particles from "react-particles-js";
function CustomParticles(props) {
  return (
    <Particles
      params={{
        autoPlay: true,
        detectRetina: true,
        fpsLimit: 30,
        particles: {
          color: {
            value: "#fff",
            animation: {
              enable: false,
              speed: 1,
              sync: true,
            },
          },
          links: {
            blink: true,
            color: {
              value: "#ffffff",
            },
            consent: false,
            distance: 100,
            enable: true,
            frequency: 1,
            opacity: 0.4,
            triangles: {
              enable: false,
              frequency: 1,
            },
            width: 1,
            warp: false,
          },
          move: {
            angle: {
              offset: 45,
              value: 90,
            },
            attract: {
              enable: false,
              rotate: {
                x: 600,
                y: 1200,
              },
            },
            direction: "none",
            distance: 0,
            enable: true,
            gravity: {
              acceleration: 9.81,
              enable: false,
              maxSpeed: 50,
            },
            noise: {
              delay: {
                random: {
                  enable: false,
                  minimumValue: 0,
                },
                value: 0,
              },
              enable: false,
            },
            outModes: {
              default: "out",
              bottom: "out",
              left: "out",
              right: "out",
              top: "out",
            },
            random: false,
            size: false,
            speed: 2,
            straight: false,
            trail: {
              enable: false,
              length: 10,
              fillColor: {
                value: "#000000",
              },
            },
            vibrate: false,
            warp: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
              factor: 1000,
            },
            limit: 0,
            value: 40,
          },
          opacity: {
            random: {
              enable: true,
              minimumValue: 0.1,
            },
            value: 0.6,
            animation: {
              destroy: "none",
              enable: false,
              minimumValue: 0.1,
              speed: 1,
              startValue: "random",
              sync: false,
            },
          },
          reduceDuplicates: false,
          rotate: {
            random: {
              enable: false,
              minimumValue: 0,
            },
            value: 0,
            animation: {
              enable: false,
              speed: 0,
              sync: false,
            },
            direction: "clockwise",
            path: false,
          },
          shadow: {
            blur: 0,
            color: {
              value: "#000000",
            },
            enable: false,
            offset: {
              x: 0,
              y: 0,
            },
          },
          shape: {
            options: {},
            type: "circle",
          },
          size: {
            random: {
              enable: true,
              minimumValue: 1,
            },
            value: 2,
            animation: {
              destroy: "none",
              enable: false,
              minimumValue: 0.1,
              speed: 40,
              startValue: "random",
              sync: false,
            },
          },
          stroke: {
            width: 0,
          },
          twinkle: {
            lines: {
              enable: false,
              frequency: 0.05,
              opacity: 1,
            },
            particles: {
              enable: false,
              frequency: 0.05,
              opacity: 1,
            },
          },
        },
        pauseOnBlur: true,
        pauseOnOutsideViewport: false,
        themes: [],
      }}
    />
  );
}

export default CustomParticles;
