"use client"

import { motion } from "framer-motion"

const letterAnimation = {
  initial: {                    // Estado inicial de cada letra
    y: "100%",                  // Empieza desplazada 100% hacia abajo
    opacity: 0,                 // Completamente transparente
  },
  animate: (i) => ({            // Estado final/animado de cada letra
    y: 0,                       // Vuelve a su posición original
    opacity: 1,                 // Completamente visible
    transition: {
      duration: 0.3,            // La animación dura 0.3 segundos
      ease: [0.2, 0, 0.1, 1],   // Curva de aceleración personalizada
      delay: i[0]               // Retraso basado en la posición de la letra
    }
  })
}

const getLetter = (name) => {                                     // Toma un texto y lo divide en letras individuales        
  let letters = [];
  name.split("").forEach((letter, index) => {                     // Para cada letra crea un componente motion.span con la animación
    return letters.push(
      <motion.span
        variants={letterAnimation}
        initial="initial"
        whileInView="animate"
        custom={[
          index * 0.02,                  // Pequeño retraso progresivo entre letras (se usa en la animacion en la prop delay)
          (name.length - index) * 0.01]  // Añade un retraso adicional basado en la posición inversa
        }
        key={index}
      >
        {letter}
      </motion.span>
    )
  })
  return letters
}


const AnimatedText = ({text, textStyles}) => {
  return (
    <div className={`${textStyles}`}>
      {getLetter(text)}
    </div>
  )
}

export default AnimatedText