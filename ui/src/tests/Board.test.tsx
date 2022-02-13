import { fireEvent, render, screen } from "@testing-library/react";
import { unmountComponentAtNode } from "react-dom";
import App from "../App";

let container: any = null;
let board: any = null;
let rotateButton: any = null;

beforeEach(() => {
	container = document.createElement("div");
	document.body.appendChild(container);
	render(<App />, container);
	board = screen.getByTestId("board");
	rotateButton = screen.getByText("Rotate");
});

afterEach(() => {
	unmountComponentAtNode(container);
	container.remove();
	container = null;
});

test("board defaults to rotate-0", () => {
	expect(board).toHaveClass("rotate-0");
});

test("rotate button changes the board's class", () => {
	fireEvent.click(rotateButton);
	expect(board).toHaveClass("rotate-90");
	fireEvent.click(rotateButton);
	expect(board).toHaveClass("rotate-180");
	fireEvent.click(rotateButton);
	expect(board).toHaveClass("-rotate-90");
	fireEvent.click(rotateButton);
	expect(board).toHaveClass("rotate-0");
});
