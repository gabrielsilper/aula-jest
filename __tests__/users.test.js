const { createUser } = require('../src/users');
describe('Testando as funções de usuários', () => {
  describe('createUser()', () => {
    test('deve criar usuário com nome e idade', () => {
      const user = createUser('Alice', 30);
      expect(user.name).toBe('Alice');
      expect(user.age).toBe(30);
      expect(user.roles).toContain('user');
      expect(user).toEqual({
        id: expect.any(Number),
        name: 'Alice',
        age: 30,
        roles: ['user'],
        active: true,
      });
    });

    describe('toBeTruthy() e toBeFalsy()', () => {
      test('Uso do toBeTruthy e toBeFalsy', () => {
        const user = createUser('Bob', 25);
        expect(user.active).toBeTruthy();
        expect(null).toBeFalsy();
      });
    });

    test('Uso do toThrow', () => {
      expect(() => createUser('', 20)).toThrow('Nome é obrigatório');
    });

    test('Uso do toHaveProperty', () => {
      const user = createUser('Diana', 28);
      expect(user).toHaveProperty('id');
      expect(user).toHaveProperty('active', true);
    });

    test('Uso do .not', () => {
      const user = createUser('Diana', 28);
      expect(user.active).not.toBeFalsy();
      expect(user.roles).not.toContain('admin');
      expect(user.name).not.toBe('');
    });

    test('Uso do toMatch', () => {
      const email = 'suporte@empresa.com.br';
      expect(email).toMatch(/\.com/);
      expect(email).toMatch(/empresa/);
    });
  });
});
