const { sum, divide } = require('../src/math');

describe('Testando as funções matemáticas', () => {
  describe('Testes da função de soma', () => {
    test('Testa a função de soma com número positivos', () => {
      //Arrange
      const a = 10;
      const b = 20;

      //Act
      result = sum(a, b);

      //Assert
      expect(result).toBe(30);
    });

    test('Testa a função de soma com um número negativo', () => {
      //Arrange
      const a = 10;
      const b = -5;

      //Act
      result = sum(a, b);

      //Assert
      expect(result).toBe(5);
    });

    test('Testa a função de soma com dois números negativos', () => {
      //Arrange
      const a = -10;
      const b = -5;

      //Act
      result = sum(a, b);

      //Assert
      expect(result).toBe(-15);
    });
  });

  describe('Testes da função de divisão', () => {
    test('Testa a função de divisão', () => {
      //Arrange
      const a = 10;
      const b = 2;

      //Assert
      expect(divide(a, b)).toBe(5);
    });

    test('Testa o lançamento do erro na função de divisão quando dividido por zero', () => {
      //Arrange
      const a = 10;
      const b = 0;

      //Assert
      expect(() => divide(a, b)).toThrow();
    });
  });
});
