import Abc from "./abc";
import { shallow } from "enzyme";

describe("Shallow abc page", () => {
  it("Object Check", () => {
    let wrapper = shallow(<Abc />);
    console.log(wrapper.debug());
    expect(wrapper.exists(".home")).toEqual(true);
  });
});
