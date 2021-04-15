/* global describe, it, cy */
describe('Petgram', function () {
  it('para ver si la pagina funciona', function () {
    cy.visit('/')
  })

  it('navegamos a tu categoria y vemos fotos', function () {
    cy.visit('/pet/1')
    cy.get('article') // si tenemos algun elemento article
  })

  it('si podemos navegar con la navbar a la home', function () {
    cy.visit('/pet/1')
    cy.get('nav a').first().click() // recuperar el 1er elemento del navbar
    cy.url().should('include', '/') // nos debe llevar a la home
  })

  it('los usuarios no registrado ven el formulario de registro e inicio de sesion al ir a favs', function () {
    cy.visit('/favs')
    cy.get('form').should('have.length', 2) // recuperar 2 elementos form
  })
})
