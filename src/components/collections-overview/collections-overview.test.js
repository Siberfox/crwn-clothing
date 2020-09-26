import React from "react";
import { shallow } from "enzyme";

import { CollectionsOverview } from "./collections-overview.component";

it("should render CollectionsOverview component", () => {
  const mockCollections = [{ id: "idkfa" }, { id: "iddqd" }];
  const wrapper = shallow(
    <CollectionsOverview collections={mockCollections} />
  );
  expect(wrapper).toMatchSnapshot();
});
