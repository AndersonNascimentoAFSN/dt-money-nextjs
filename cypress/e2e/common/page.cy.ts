class Page {
  elements = {
    titlePage: () => cy.get('h1'),
  }
}

export const page = new Page()