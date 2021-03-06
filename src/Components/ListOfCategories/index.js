import React, { useState, useEffect } from 'react'
import { Category } from '../Category'
import { List, Item } from './styles'

function useCategoriesData () { // un Hook tiene que devolver algo
  const [categories, setCategories] = useState([]) // array vacio -> ya damos por hecho que es un array

  const [loading, setLoading] = useState(false)

  useEffect(function () {
    setLoading(true)
    window.fetch('https://petgram-server-christian-christianvilca.vercel.app/categories')
      .then(res => res.json())
      .then(response => { // respuesta con las categorias
        setCategories(response) // la respuesta se guarda en categories
        setLoading(false)
      })
  }, [])

  return { categories, loading }
}

const ListOfCategoriesComponent = () => {
  const { categories, loading } = useCategoriesData()

  const [showFixed, setShowFixed] = useState(false) // estado para saber si esta fijo

  useEffect(function () { // se ejecuta la funcion cada vez que se renderiza el componente
    const onScroll = e => { // recive el evento del scroll
      const newShowFixed = window.scrollY > 200 // mostrar las categorias fijas cuando el scroll verical sea mayor a 200
      showFixed !== newShowFixed && setShowFixed(newShowFixed) // que ocurra solo cuando ya no esta fijo, y evitar volver a setear el estado cada vez que cambie el scroll
    }

    document.addEventListener('scroll', onScroll)

    return () => document.removeEventListener('scroll', onScroll)
  }, [showFixed])

  const renderList = (fixed) => (
    <List fixed={fixed}>
      {
        loading
          ? <Item key={loading}><Category /></Item>
          : categories.map((category) => (
            <Item key={category.id}>
              <Category {...category} path={`/pet/${category.id}`} />
            </Item>
          ))
      }
    </List>
  )

  return (
    <>
      {renderList()}
      {showFixed && renderList(true)}
    </>
  )
}

// No quiero que te vuelvas a renderizar si las props que recibas no son diferentes
export const ListOfCategories = React.memo(ListOfCategoriesComponent)
