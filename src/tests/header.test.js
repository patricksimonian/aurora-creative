import React from "react"
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import Header from "../components/header";

describe('With snapshots 🎉', () => {
  it('should render correctly', () => {
    const wrapper = shallow(
      <Header />
    );

    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});

