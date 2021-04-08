import { useState } from 'react'

export function useLocalStorage (key, inititalValue) {
  // funcion devuelve el valor que deseamos que este como valor inicial
  const [storeValue, setValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key)
      return item !== null ? JSON.parse(item) : inititalValue
    } catch (error) {
      return inititalValue
    }
  })

  const setLocalStorage = value => {
    try { // si es que el navegador tiene la navegacion privada activada no se puede acceder a window.localStorage o ya esta lleno
      window.localStorage.setItem(key, JSON.stringify(value))
      setValue(value)
    } catch (error) {
      console.error(error)
    }
  }
  return [storeValue, setLocalStorage]
}
