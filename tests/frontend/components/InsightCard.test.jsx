import { render } from "@testing-library/react";
import InsightCard from "../../../src/components/InsightCard";

test("renders title and content", () => {
  const { getByText } = render(<InsightCard title="Sample Title" content="Sample Content" />);
  expect(getByText("Sample Title")).toBeInTheDocument();
  expect(getByText("Sample Content")).toBeInTheDocument();
});
