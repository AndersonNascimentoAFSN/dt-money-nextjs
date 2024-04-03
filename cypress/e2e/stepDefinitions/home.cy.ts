import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor"

import { page } from "../common/page.cy"

Given("I am on the transaction page", () => {
  cy.visit(`/`)
})

Then("I should see a title page with {string}", (text: string) => {
  page.elements.titlePage().should("be.visible")
  page.elements.titlePage().should("have.text", text)
});