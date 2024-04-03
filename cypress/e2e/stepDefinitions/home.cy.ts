import { When, Then } from "@badeball/cypress-cucumber-preprocessor"

import { page } from "../common/page.cy"

When("I visit transaction page", () => {
  cy.visit(`/`);
})

Then("I should see a title page with {string}", (text) => {
  page.elements.titlePage().should("be.visible");
  page.elements.titlePage().should("have.text", text)
});