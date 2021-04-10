import React from 'react'
import { FavsWithQuery } from '../container/GetFavorites'
import { Layout } from '../Components/Layout'

export const Favs = () => (
  <Layout title='Tus Favoritos' subtitle='Aqui puedes encontrar tus favoritos'>
    <FavsWithQuery />
  </Layout>
)
