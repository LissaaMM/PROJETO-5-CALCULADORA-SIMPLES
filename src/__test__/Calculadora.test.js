import React  from 'react';
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Calculadora from '../components/Calculadora'

describe('Calculadora Simples', () => {
  test('renderiza os inputs', () => {
    render(<Calculadora />)
    const inputs = screen.getAllByRole("spinbutton")
    expect(inputs.length).toBe(2)
  })

  test('renderiza os botões', () => {
    render(<Calculadora />)
    expect(screen.getByText('Somar')).toBeInTheDocument()
    expect(screen.getByText('Subtrair')).toBeInTheDocument()
    expect(screen.getByText('Multiplicar')).toBeInTheDocument()
    expect(screen.getByText('Dividir')).toBeInTheDocument()
  })

  test('exibe o parágrafo de resultado', () => {
    render(<Calculadora />)
    expect(screen.getByText(/Resultado:/i)).toBeInTheDocument()
  })
})