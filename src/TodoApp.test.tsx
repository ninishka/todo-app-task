import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import TodoApp from "./components/TodoApp";

describe("TodoApp", () => {
    test("renders TodoApp correctly", () => {
        render(<TodoApp />);
        expect(screen.getByText(/todos/i)).toBeInTheDocument();
        expect(screen.getByPlaceholderText(/what needs to be done\?/i)).toBeInTheDocument();
    });

    test("allows adding a new todo", () => {
        render(<TodoApp />);
    
        const input = screen.getByPlaceholderText(/what needs to be done\?/i);
    
        fireEvent.change(input, { target: { value: "New Todo Task" } });
    
        fireEvent.keyDown(input, { key: "Enter", code: "Enter" });
    
        expect(screen.getByText("New Todo Task")).toBeInTheDocument();
    });

    test("toggles a todo as completed", () => {
        render(<TodoApp />);

        const firstTodo = screen.getByText("this is to do first");
        expect(firstTodo).toHaveStyle("text-decoration: none");

        fireEvent.click(firstTodo);
        expect(firstTodo).toHaveStyle("text-decoration: line-through");

        fireEvent.click(firstTodo);
        expect(firstTodo).toHaveStyle("text-decoration: none");
    });

    test("filters active todos", () => {
        render(<TodoApp />);

        const firstTodo = screen.getByText("this is to do first");
        fireEvent.click(firstTodo); 

        fireEvent.click(screen.getByRole("button", { name: /active/i }));

        expect(screen.queryByText("this is to do first")).not.toBeInTheDocument();
        expect(screen.getByText("this is to do seconddd")).toBeInTheDocument();
    });

    test("filters completed todos", () => {
        render(<TodoApp />);

        const firstTodo = screen.getByText("this is to do first");
        fireEvent.click(firstTodo); 

        const completedFilterButton = screen.getByRole("button", { name: /^Completed$/i });
        fireEvent.click(completedFilterButton);

        expect(screen.getByText("this is to do first")).toBeInTheDocument();
        expect(screen.queryByText("this is to do seconddd")).not.toBeInTheDocument();
    });

    test("clears completed todos", () => {
        render(<TodoApp />);

        const firstTodo = screen.getByText("this is to do first");
        fireEvent.click(firstTodo); 

        fireEvent.click(screen.getByRole("button", { name: /clear completed/i }));

        expect(screen.queryByText("this is to do first")).not.toBeInTheDocument();
        expect(screen.getByText("this is to do seconddd")).toBeInTheDocument();
    });
});
