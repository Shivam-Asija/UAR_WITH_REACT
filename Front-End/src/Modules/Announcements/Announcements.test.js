import Announcements from "./Announcements";

import { shallow } from "enzyme";

describe("Announcements Page Testing", () => {
  it("class check", () => {
    let wrapper = shallow(<Announcements />);
    // expect(wrapper.exists(".announcements-outer-div")).toEqual(true);
    expect(
      wrapper.contains(
        <h2 className="mt-2 font-bold color-navy">Announcements</h2>
      )
    ).toEqual(true);
  });
});
