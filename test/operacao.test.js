const { describe, expect, it } = require("@jest/globals");
const calculadora = require("../src/operacoes");

describe("Teste da calculadora", () => {
  it("Operação de soma", () => {
    let resultado = calculadora.sum(1, 2);
    expect(resultado).toEqual(3);

    resultado = calculadora.sum(50, 30);
    expect(resultado).toEqual(80);

    resultado = calculadora.sum(32, -26);
    expect(resultado).toEqual(6);

    resultado = calculadora.sum(-10, 63);
    expect(resultado).toEqual(53);

    resultado = () => calculadora.sum("a", 2);
    expect(resultado).toThrow("Não é um número");
  });

  it("Operacao Sub", () => {
    let resultado = calculadora.sub(1, 3);
    expect(resultado).toEqual(-2);

    resultado = calculadora.sub(4, 8);
    expect(resultado).toEqual(-4);

    resultado = calculadora.sub(0, 2);
    expect(resultado).toEqual(-2);

    resultado = calculadora.sub(2, 0);
    expect(resultado).toEqual(2);

    resultado = () => calculadora.sub("a", 6);
    expect(resultado).toThrow("Não é um número");
  });

  it("Operacao Mult", () => {
    let resultado = calculadora.mult(4, 3);
    expect(resultado).toEqual(12);

    resultado = calculadora.mult(3, 0);
    expect(resultado).toEqual(0);

    resultado = calculadora.mult(5, 10);
    expect(resultado).toEqual(50);

    resultado = calculadora.mult(0, 6);
    expect(resultado).toEqual(0);

    resultado = calculadora.mult(15, 15);
    expect(resultado).toEqual(225);

    resultado = calculadora.mult(25, 10);
    expect(resultado).toEqual(250);

    resultado = () => calculadora.mult("a", 1);
    expect(resultado).toThrow("Não é um número");

    resultado = calculadora.mult(8, 8);
    expect(resultado).toEqual(64);
  });

  it("Operacao div", () => {
    let resultado = calculadora.div(5, 5);
    expect(resultado).toEqual(1);

    resultado = calculadora.div(14, 2);
    expect(resultado).toEqual(7);

    
    resultado = calculadora.div(44, 22);
    expect(resultado).toEqual(2);
    
    resultado = calculadora.div(55, 5);
    expect(resultado).toEqual(11);
    
    resultado = calculadora.div(0, 4);
    expect(resultado).toEqual(0);
    
    resultado = calculadora.div(86, 10);
    expect(resultado).toEqual(8.6);
    
    resultado = calculadora.div(7, 2);
    expect(resultado).toEqual(3.5);

    resultado = () => calculadora.div("a", 4);
    expect(resultado).toThrow("Não é um número");

    resultado = () => calculadora.div(4, 0);
   expect(resultado).toThrow('Não é possivel dividir por 0');
  });

  it("Operacao pot", () => {
    let resultado = calculadora.pot(4, 4);
    expect(resultado).toEqual(256);

    resultado = calculadora.pot(77, 2);
    expect(resultado).toEqual(5929);

    resultado = calculadora.pot(3, 6);
    expect(resultado).toEqual(729);

    resultado = calculadora.pot(12, 2);
    expect(resultado).toEqual(144);

    resultado = calculadora.pot(0, 2);
    expect(resultado).toEqual(0);

    resultado = calculadora.pot(4, 2);
    expect(resultado).toEqual(16);

    resultado = calculadora.pot(0, 4);
    expect(resultado).toEqual(0);

    resultado = calculadora.pot(0, 0);
    expect(resultado).toEqual(1);

    resultado = () => calculadora.pot("a", 9);
    expect(resultado).toThrow("Não é um número");
    
  });

  it("Operacao raiz", () => {
    let resultado = calculadora.raiz(9);
    expect(resultado).toEqual(3);

    resultado = calculadora.raiz(4);
    expect(resultado).toEqual(2);

    resultado = calculadora.raiz(16);
    expect(resultado).toEqual(4);

    resultado = calculadora.raiz(25);
    expect(resultado).toEqual(5);

    resultado = calculadora.raiz(81);
    expect(resultado).toEqual(9);

    resultado = calculadora.raiz(64);
    expect(resultado).toEqual(8);

    resultado = calculadora.raiz(36);
    expect(resultado).toEqual(6);

    resultado = calculadora.raiz(256);
    expect(resultado).toEqual(16);

    resultado = () => calculadora.raiz("a", 3);
    expect(resultado).toThrow("Não é um número");
  });
});
