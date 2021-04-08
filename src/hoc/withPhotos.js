import { graphql } from 'react-apollo'
import { gql } from 'apollo-boost'

const GET_PHOTOS = gql`
query getPhotos($categoryId: ID) {
  photos(categoryId: $categoryId) {
    id
    categoryId
    src
    likes
    userId
    liked
  }
}
`

// Nos permite envolver el componente y recuperar esa informacion (Patron HOC)
export const withPhotos = graphql(GET_PHOTOS)
