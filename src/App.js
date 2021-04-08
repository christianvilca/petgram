import React from 'react'
import { ListOfCategories } from './Components/ListOfCategories'
import { GlobalStyle } from './styles/GlobalStyles'
import { ListOfPhotoCards } from './container/ListOfPhotoCards'
import { Logo } from './Components/Logo'

export const App = () => (
  <div>
    <GlobalStyle />
    <Logo />
    <ListOfCategories />
    <ListOfPhotoCards categoryId={2} />
  </div>
)
