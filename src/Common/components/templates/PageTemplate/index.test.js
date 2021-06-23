import React from "react";
import renderer from "react-test-renderer";
import "jest-styled-components";

import PageTemplate from ".";

it("renders the page template", () => {
  const tree = renderer
    .create(<PageTemplate>Test Statement</PageTemplate>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
