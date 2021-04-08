import { useState, useEffect, useRef } from 'react'

export function useNearScreen () {
  const ref = useRef(null)
  const [show, setShow] = useState(false)

  useEffect(function () { // si cada elemento esta en el viewport del usuario
    // lo queremos envolver en una promesa y cargar solo cuando lo necesitemos el polyfill
    Promise.resolve(
      // Chrome no necesita que cargue este polifill
      typeof window.IntersectionObserver !== 'undefined'
        ? window.IntersectionObserver
        : import('intersection-observer')
    ).then(() => {
      // en la funcion se obtiene todas las entradas que estan en el viewport y esta observando
      const observer = new window.IntersectionObserver(function (entries) {
        const { isIntersecting } = entries[0] // nos ayuda a identificar si esta en el viewport
        // console.log({ isIntersecting })
        if (isIntersecting) {
          setShow(true)
          observer.disconnect() // evitamos que el observador se vuelva a actualizar ya que solo queremos se actualize una vez
        }
      })
      // pasamos el elemento que queremos observar
      observer.observe(ref.current)
    })
  }, [ref])

  return [show, ref]
}
