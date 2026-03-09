const { createUser } = require("../src/users");

describe('Testando Exemplos', () => {
  describe('Sample Test Suite', () => {
    test('Matchers', () => {
      expect({ ok: true }).toEqual({ ok: true });
      expect([1, 2, 3]).toContain(3);
      expect('email@dominio.com').toMatch(/@/);
    });
  });
});
