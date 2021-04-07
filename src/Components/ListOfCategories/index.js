import React, { useState, useEffect } from 'react'
import { Category } from '../Category'
import { List, Item } from './styles'

export const ListOfCategories = () => {
  const [categories, setCategories] = useState([]) // array vacio -> ya damos por hecho que es un array

  useEffect(function () {
    window.fetch('https://petgram-server-christian-christianvilca.vercel.app/categories')
      .then(res => res.json())
      .then(response => { // respuesta con las categorias
        setCategories(response) // la respuesta se guarda en categories
      })
  }, [])

  return (
    <List>
      {
        categories.map((category) => (
          <Item key={category.id}>
            <Category {...category} />
          </Item>
        ))
      }
    </List>
  )
}
