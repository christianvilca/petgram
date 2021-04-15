import React from 'react'
import { Article, ImgWrapper, Img } from './styles'

import { useNearScreen } from '../../hooks/useNearScreen'

import { FavButton } from '../FavButton'
import { ToogleLikeMutation } from '../../container/ToogleLikeMutation'

import { Link } from '@reach/router'
import PropTypes from 'prop-types'

const DEFAULT_IMAGE = 'https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png'

export const PhotoCard = ({ id, liked, likes = 0, src = DEFAULT_IMAGE }) => {
  const [show, ref] = useNearScreen()

  // if (!show) return null // Si usamos esto nos dice que necesariamente tenemos que pasa el elemeto que tiene el ref

  return (
    <Article ref={ref}>
      {
        show &&
          <>
            <Link to={`/detail/${id}`}>
              <ImgWrapper>
                <Img src={src} />
              </ImgWrapper>
            </Link>
            <ToogleLikeMutation>
              {
                (toogleLike) => {
                  const handleFavClick = () => {
                    // solo cambiar en la base de datos solo si no nos gusta la foto, para evitar que no haya una incogruencia en lo que se ve y lo que estamos haciendo
                    // para cambiar en la base de datos el like de la foto
                    toogleLike({
                      variables: {
                        input: { id }
                      }
                    })
                  }
                  return <FavButton liked={liked} likes={likes} onClick={handleFavClick} />
                }
              }
            </ToogleLikeMutation>
          </>
      }
    </Article>
  )
}

PhotoCard.propTypes = {
  id: PropTypes.string.isRequired,
  liked: PropTypes.bool.isRequired,
  src: PropTypes.string.isRequired,
  likes: function (props, propName, componentName) {
    const propValue = props[propName]

    if (propValue === undefined) {
      return new Error(`${propName} Value must be defined`)
    }

    if (propValue < 0) {
      return new Error(`${propName} value must be greater than 0`)
    }
  }
}
