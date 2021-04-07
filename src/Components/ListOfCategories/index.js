import React, { useState, useEffect } from 'react'
import { Category } from '../Category'
import { List, Item } from './styles'

export const ListOfCategories = () => {
  const [categories, setCategories] = useState([]) // array vacio -> ya damos por hecho que es un array
  const [showFixed, setShowFixed] = useState(false) // estado para saber si esta fijo

  useEffect(function () {
    window.fetch('https://petgram-server-christian-christianvilca.vercel.app/categories')
      .then(res => res.json())
      .then(response => { // respuesta con las categorias
        setCategories(response) // la respuesta se guarda en categories
      })
  }, [])

  useEffect(function () { // se ejecuta la funcion cada vez que se renderiza el componente
    const onScroll = e => { // recive el evento del scroll
      const newShowFixed = window.scrollY > 200 // mostrar las categorias fijas cuando el scroll verical sea mayor a 200
      showFixed !== newShowFixed && setShowFixed(newShowFixed) // que ocurra solo cuando ya no esta fijo, y evitar volver a setear el estado cada vez que cambie el scroll
    }

    document.addEventListener('scroll', onScroll)

    return () => document.removeEventListener('scroll', onScroll)
  }, [showFixed])

  const renderList = (fixed) => (
    <List className={fixed ? 'fixed' : ''}>
      {
        categories.map((category) => (
          <Item key={category.id}>
            <Category {...category} />
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
