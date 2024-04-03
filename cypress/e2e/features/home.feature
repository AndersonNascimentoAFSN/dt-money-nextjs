Feature: Transaction Page
  Scenario: visiting the transaction page
    When I visit transaction page
    Then I should see a title page with "Transactions"