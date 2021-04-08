import styled from 'styled-components'
import { Link as LinkRouter } from '@reach/router'

/**
 * styled -> puede tambien recibir un parametro y
 * el parametro tiene que ser componente que acepte la prop 'className'
 * el componente Link si que lo acepta
 */

export const Link = styled(LinkRouter)`
  display: flex;
  flex-direction: column;
  text-align: center;
  text-decoration: none;
  width: 75px;
`
export const Image = styled.img`
  border: 1px solid #ddd;
  box-shadow: 0 10px 14px rgba(0, 0, 0, .2);
  border-radius: 50%;
  height: auto; // la altura se ajusta
  overflow: hidden;
  object-fit: cover;  // imagen se quede en lo que ocupa en el componente, que refleje bien y no se estire demasiado
  height: 75px;
  width: 75px;
`
