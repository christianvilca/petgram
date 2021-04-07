import React, { useState, useEffect, useRef } from 'react'
import { Article, ImgWrapper, Img, Button } from './styles'
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md'

const DEFAULT_IMAGE = 'https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png'

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
  const ref = useRef(null)
  const [show, setShow] = useState(false)

  const key = `like-${id}`
  // funcion devuelve el valor que deseamos que este como valor inicial
  const [liked, setLiked] = useState(() => {
    try {
      const like = window.localStorage.getItem(key)
      return like
    } catch (error) {
      return false
    }
  })

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

  // if (!show) return null // Si usamos esto nos dice que necesariamente tenemos que pasa el elemeto que tiene el ref

  const Icon = liked ? MdFavorite : MdFavoriteBorder

  const setLocalStorage = value => {
    try { // si es que el navegador tiene la navegacion privada activada no se puede acceder a window.localStorage o ya esta lleno
      window.localStorage.setItem(key, value)
      setLiked(value)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <Article ref={ref}>
      {
        show &&
          <>
            <a href={`/detail/${id}`}>
              <ImgWrapper>
                <Img src={src} />
              </ImgWrapper>
            </a>
            <Button onClick={() => setLocalStorage(!liked) /* () => setLiked(!liked) */}>
              <Icon size='32px' /> {likes} likes!
            </Button>
          </>
      }
    </Article>
  )
}
