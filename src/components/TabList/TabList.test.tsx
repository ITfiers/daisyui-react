import { TabList } from "./TabList";
import { render, screen } from "@testing-library/react";

describe("components/Select", () => {
  it("should render the correct number of tabs", () => {
    render(<TabList tabs={[{ content: "Tab1" }, { content: "Tab2" }]} />);

    const tabPanelEl = screen.getByRole("tabpanel");
    const tabs = screen.getAllByRole("tab");

    expect(tabPanelEl).toHaveClass("tabs");

    for (const tab of tabs) {
      expect(tab).toHaveClass("tab");
    }
  });

  it("should render boxed tab variant", () => {
    render(
      <TabList
        tabs={[{ content: "Tab1" }, { content: "Tab2" }]}
        variant="boxed"
      />
    );

    const tabPanelEl = screen.getByRole("tabpanel");

    expect(tabPanelEl).toHaveClass("tabs-boxed");
  });

  it("should render lifted tab variant", () => {
    render(
      <TabList
        tabs={[{ content: "Tab1" }, { content: "Tab2" }]}
        variant="lifted"
      />
    );

    const tabs = screen.getAllByRole("tab");

    for (const tab of tabs) {
      expect(tab).toHaveClass("tab-lifted");
    }
  });

  it("should render bordered tab variant", () => {
    render(
      <TabList
        tabs={[{ content: "Tab1" }, { content: "Tab2" }]}
        variant="bordered"
      />
    );

    const tabs = screen.getAllByRole("tab");

    for (const tab of tabs) {
      expect(tab).toHaveClass("tab-bordered");
    }
  });

  it("should render tab according to its size", () => {
    render(
      <TabList tabs={[{ content: "Tab1" }, { content: "Tab2" }]} size="large" />
    );

    const tabs = screen.getAllByRole("tab");

    for (const tab of tabs) {
      expect(tab).toHaveClass("tab-lg");
    }
  });
});
