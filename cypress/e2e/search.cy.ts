import { SearchTemplatesPage } from "../pages/searchTemplatePage";
import * as testData from "../fixtures/searchTestData.json";

const path = testData.path;

const searchTemplatePage = new SearchTemplatesPage();

describe("Search templates tests", () => {
  beforeEach(() => {
    cy.visit(path);
  });

  it("should enter search term and generate results", async () => {
    const searchTerm = testData.searchTerm;
    searchTemplatePage.searchInput.clear().type(searchTerm);
    searchTemplatePage.searchButton.click();
    searchTemplatePage.verifySearchResults(searchTerm);
  });

  it("should filter results by category", () => {
    const instagramFilters = testData.instagramFilters;
    const instagramCheckBoxName = testData.instagramCheckBoxName;
    searchTemplatePage
      .getCategoryFilterCheckbox(instagramCheckBoxName)
      .click({ force: true });
    searchTemplatePage.masonryItem.each((item) => {
      cy.wrap(item)
        .findByRole("listitem")
        .invoke("text")
        .should((elem) => {
          expect(instagramFilters).to.contain(elem.trim());
        });
    });
  });

  it("opens select a design modal", () => {
    searchTemplatePage.masonryItem.first().click();
    searchTemplatePage.selectDesignModalHeader.invoke("text").should((elem) => {
      expect("Select a design type").to.eq(elem.trim());
    });
  });
});
