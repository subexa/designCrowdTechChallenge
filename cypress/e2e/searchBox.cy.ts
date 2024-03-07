import { SearchTemplatesPage } from "../pages/searchTemplatePage";

const path =
  "/maker/mydesigns/logodrafts/e937196b-fef2-4a43-892e-1bacfd5d9cb2/templatetypes?searchTerm=Tech%20Challenge";

const searchTemplatePage = new SearchTemplatesPage();

describe("Search templates tests", () => {
  beforeEach(() => {
    cy.visit(path);
  });

  it("should enter search term and generate results", async () => {
    searchTemplatePage.searchInput.clear().type("Tech Challenge");
    searchTemplatePage.searchButton.click();
    searchTemplatePage.verifySearchResults("Tech Challenge");
  });
});
