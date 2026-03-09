const createUser = (name, age) => {
  if (!name) throw new Error('Nome é obrigatório');
  return {
    id: Math.floor(Math.random() * 100),
    name,
    age,
    roles: ['user'],
    active: true,
  };
};

module.exports = { createUser };
