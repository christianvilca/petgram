import React from 'react'
import { ListOfCategories } from './Components/ListOfCategories'
import { GlobalStyle } from './styles/GlobalStyles'
import { ListOfPhotoCards } from './Components/ListOfPhotoCards'
import { Logo } from './Components/Logo'

export const App = () => (
  <div>
    <GlobalStyle />
    <Logo />
    <ListOfCategories />
    <ListOfPhotoCards />
  </div>
)
