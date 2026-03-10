// Importamos a função que queremos testar
const { getUser } = require('../src/service');

// =============================================================
// O QUE É UM MOCK?
// Um mock é um "dublê" de um objeto ou função real.
// Usamos mocks quando nossa função depende de algo externo
// (como uma API, banco de dados, etc.) que não queremos chamar
// de verdade durante os testes.
//
// Aqui, o apiClient seria algo como o axios em produção.
// Nos testes, criamos um objeto falso que "finge" ser o axios.
// =============================================================

describe('Testando as funções do service', () => {
  describe('getUser()', () => {

    // ----------------------------------------------------------
    // TESTE 1: Caminho feliz — quando a API retorna com sucesso
    // ----------------------------------------------------------
    test('deve retornar os dados do usuário quando a API responde com sucesso', async () => {
      // ARRANGE (preparar)
      // Criamos um apiClient falso com um método "get" mockado.
      // jest.fn() cria uma função fake que podemos controlar.
      const apiClient = {
        get: jest.fn(),
      };

      // Definimos o que essa função fake vai retornar.
      // mockResolvedValue simula uma Promise que resolve (sucesso).
      apiClient.get.mockResolvedValue({
        data: { id: 1, name: 'Alice', age: 30 },
      });

      // ACT (agir)
      // Chamamos a função real passando nosso apiClient falso
      const result = await getUser(apiClient, 1);

      // ASSERT (verificar)
      // O resultado deve ser exatamente os dados que mockamos
      expect(result).toEqual({ id: 1, name: 'Alice', age: 30 });
    });

    // ----------------------------------------------------------
    // TESTE 2: Verificar se a URL foi montada corretamente
    // ----------------------------------------------------------
    test('deve chamar a API com a URL correta baseada no id', async () => {
      // ARRANGE
      const apiClient = {
        get: jest.fn().mockResolvedValue({
          data: { id: 42, name: 'Bob' },
        }),
      };

      // ACT
      await getUser(apiClient, 42);

      // ASSERT
      // toHaveBeenCalledWith verifica com quais argumentos a função foi chamada
      expect(apiClient.get).toHaveBeenCalledWith('/users/42');
    });

    // ----------------------------------------------------------
    // TESTE 3: Verificar que a API foi chamada apenas uma vez
    // ----------------------------------------------------------
    test('deve chamar a API exatamente uma vez', async () => {
      // ARRANGE
      const apiClient = {
        get: jest.fn().mockResolvedValue({
          data: { id: 1, name: 'Alice' },
        }),
      };

      // ACT
      await getUser(apiClient, 1);

      // ASSERT
      // toHaveBeenCalledTimes verifica o número de vezes que foi chamada
      expect(apiClient.get).toHaveBeenCalledTimes(1);
    });

    // ----------------------------------------------------------
    // TESTE 4: Caminho triste — quando a API lança um erro
    // ----------------------------------------------------------
    test('deve lançar um erro quando a API falha', async () => {
      // ARRANGE
      const apiClient = {
        get: jest.fn(),
      };

      // mockRejectedValue simula uma Promise que rejeita (erro).
      // É o equivalente ao "catch" — quando algo dá errado.
      apiClient.get.mockRejectedValue(new Error('Usuário não encontrado'));

      // ASSERT
      // rejects.toThrow verifica que a Promise foi rejeitada com o erro esperado.
      // Precisamos do "await" aqui para esperar a Promise rejeitar.
      await expect(getUser(apiClient, 999)).rejects.toThrow('Usuário não encontrado');
    });

  });
});
