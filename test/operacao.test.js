const { describe, expect, it } = require("@jest/globals");
const calculadora = require("../src/operacoes");

describe("Teste da calculadora", () => {
  it("Operação de soma", () => {
    let resultado = calculadora.sum(1, 2);
    expect(resultado).toEqual(3);

    resultado = calculadora.sum(50, 30);
    expect(resultado).toEqual(80);

    resultado = calculadora.sum(32, 26);
    expect(resultado).toEqual(58);

    resultado = calculadora.sum(10, 63);
    expect(resultado).toEqual(73);

    resultado = () => calculadora.sum("a", 2);
    expect(resultado).toThrow("Não é um número");
  });

  it("Operacao Sub", () => {
    let resultado = calculadora.sub(1, 3);
    expect(resultado).toEqual(-2);

    resultado = calculadora.sub(4, 8);
    expect(resultado).toEqual(-4);

    resultado = calculadora.sub(2, 2);
    expect(resultado).toEqual(0);

    resultado = calculadora.sub(90, 15);
    expect(resultado).toEqual(75);

    resultado = calculadora.sub(10, 49);
    expect(resultado).toEqual(-39);
  });

  it("Operacao Mult", () => {
    let resultado = calculadora.mult(4, 3);
    expect(resultado).toEqual(12);

    resultado = calculadora.mult(6, 6);
    expect(resultado).toEqual(36);

    resultado = calculadora.mult(5, 10);
    expect(resultado).toEqual(50);

    resultado = calculadora.mult(30, 18);
    expect(resultado).toEqual(540);

    resultado = calculadora.mult(15, 15);
    expect(resultado).toEqual(225);

    resultado = calculadora.mult(25, 10);
    expect(resultado).toEqual(250);

    resultado = calculadora.mult(19, 18);
    expect(resultado).toEqual(342);

    resultado = calculadora.mult(8, 8);
    expect(resultado).toEqual(64);
  });

  it("Operacao div", () => {
    let resultado = calculadora.div(5, 5);
    expect(resultado).toEqual(1);

    resultado = calculadora.div(14, 2);
    expect(resultado).toEqual(7);

    resultado = calculadora.div(6, 6);
    expect(resultado).toEqual(1);

    resultado = calculadora.div(44, 22);
    expect(resultado).toEqual(2);

    resultado = calculadora.div(55, 5);
    expect(resultado).toEqual(11);

    resultado = calculadora.div(60, 20);
    expect(resultado).toEqual(3);

    resultado = calculadora.div(86, 10);
    expect(resultado).toEqual(8.6);

    resultado = calculadora.div(2, 1);
    expect(resultado).toEqual(2);

    resultado = calculadora.div(7, 2);
    expect(resultado).toEqual(3.5);
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

    resultado = calculadora.pot(64, 2);
    expect(resultado).toEqual(4096);

    resultado = calculadora.pot(4, 2);
    expect(resultado).toEqual(16);

    resultado = calculadora.pot(9, 4);
    expect(resultado).toEqual(6561);

    resultado = calculadora.pot(2, 4);
    expect(resultado).toEqual(16);

    resultado = calculadora.pot(2, 9);
    expect(resultado).toEqual(512);
  });

  it("Operacao raiz", () => {
    let resultado = calculadora.raiz(Math.sqrt(9));
    expect(resultado).toEqual(1.7320508075688772);

    resultado = calculadora.raiz(Math.sqrt(4));
    expect(resultado).toEqual(1.4142135623730951);

    resultado = calculadora.raiz(Math.sqrt(16));
    expect(resultado).toEqual(2);

    resultado = calculadora.raiz(Math.sqrt(25));
    expect(resultado).toEqual(2.23606797749979);

    resultado = calculadora.raiz(Math.sqrt(81));
    expect(resultado).toEqual(3);

    resultado = calculadora.raiz(Math.sqrt(64));
    expect(resultado).toEqual(2.8284271247461903);

    resultado = calculadora.raiz(Math.sqrt(49));
    expect(resultado).toEqual(2.6457513110645907);

    resultado = calculadora.raiz(Math.sqrt(196));
    expect(resultado).toEqual(3.7416573867739413);

    resultado = calculadora.raiz(Math.sqrt(6561));
    expect(resultado).toEqual(9);
  });
});
