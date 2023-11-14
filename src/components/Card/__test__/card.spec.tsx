import { render } from "@testing-library/react-native";

import { Card } from "../Card";

describe("Card", () => {
  test("Card", () => {
    const { getByTestId } = render(<Card bg="red" />);
    expect(getByTestId("card")).toBeOnTheScreen();
  });
});
