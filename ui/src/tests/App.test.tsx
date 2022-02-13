import { render, screen } from "@testing-library/react";
import { unmountComponentAtNode } from "react-dom";
import App from "../App";

let container: any = null;

beforeEach(() => {
	container = document.createElement("div");
	document.body.appendChild(container);
	render(<App />, container);
});

afterEach(() => {
	unmountComponentAtNode(container);
	container.remove();
	container = null;
});

test("renders board", () => {
	const board = screen.getByTestId("board");
	expect(board).toBeInTheDocument();
});

test("renders rotate button", () => {
	const board = screen.getByText("Rotate");
	expect(board).toBeInTheDocument();
});
