const { isValidEmail, requireMinLength } = require('../src/validate');

describe('Testando as funções de validação', () => {
  describe('Testando isValidEmail', () => {
    test('Email válido retornar verdadeiro', () => {
      expect(isValidEmail('gabriel.pereira@teste.com')).toBeTruthy();
    });

    test('Email inválido retornar falso', () => {
      expect(isValidEmail('gabriel.pereira@teste')).toBeFalsy();
    });

    test('Email vazio retornar falso', () => {
      expect(isValidEmail('')).toBeFalsy();
    });

    test('O valor de email não ser uma string e retornar falso', () => {
      expect(isValidEmail(123)).toBeFalsy();
    });
  });

  describe('Testando requireMinLength', () => {
    test('Teste de string atingindo o tamanho mínimo com sucesso', () => {
      expect(requireMinLength('Gabriel', 7));
    });

    test('Teste de string não atingindo o tamanho mínimo e lançando error', () => {
      expect(() => requireMinLength('Gabriel', 8)).toThrow('MIN_LENGTH');
    });

    test('Teste de função recebendo um valor com tipo diferente de string e lançando error', () => {
      expect(() => requireMinLength(true, 3)).toThrow('INVALID_TYPE');
      expect(() => requireMinLength(10, 9)).toThrow('INVALID_TYPE');
    });
  });
});
