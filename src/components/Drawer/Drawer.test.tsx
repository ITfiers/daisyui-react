import { render } from "@testing-library/react";
import { Drawer, DrawerContent, DrawerSide, DrawerToggle } from "./Drawer";

// TODO: Will write this test once it is merged.
describe("components/Drawer", () => {
  // TODO: Change the drawer implementation
  it("render the component", () => {
    render(
      <Drawer className="h-screen drawer-mobile">
        <DrawerContent className="flex items-center justify-center">
          <DrawerToggle className="btn btn-success">Tests</DrawerToggle>
          You can put whatever content you want here
        </DrawerContent>
        <DrawerSide>
          <DrawerToggle className="btn btn-success">Close</DrawerToggle>
          <div className="">Teehee</div>
        </DrawerSide>
      </Drawer>
    );
  });
});
