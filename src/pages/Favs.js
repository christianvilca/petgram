import React from 'react'
import { FavsWithQuery } from '../container/GetFavorites'
import { Layout } from '../Components/Layout'

export default () => (
  <Layout title='Tus Favoritos' subtitle='Aqui puedes encontrar tus favoritos'>
    <FavsWithQuery />
  </Layout>
)
