import { render } from "@testing-library/react";
import StockInsights from "../../../src/components/StockInsights";

test("renders without crashing", () => {
  render(<StockInsights />);
});
