import React from "react";
import { render, screen } from "@testing-library/react";
import Calculadora from "../__test__/Calculadora";

describe("Calculadora Simples", () => {
  test("renderiza os inputs", () => {
    render(<Calculadora />);
    const inputs = screen.getAllByRole("spinbutton")
    expect(inputs.length).toBe(2);
  });

  test("renderiza os botões", () => {
    render(<Calculadora />);
    const buttons = screen.getAllByRole("button");
    expect(buttons.length).toBe(4);
  });

  test("exibe o parágrafo de resultado", () => {
    render(<Calculadora />);
    const resultado = screen.getByText(/Resultado:/i);
    expect(resultado).toBeInTheDocument();
  });
});
