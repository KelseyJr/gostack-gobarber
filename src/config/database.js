require('dotenv/config');

module.exports = {
  dialect: 'postgres',
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  define: {
    timestamps: true, // created_at e updated_at
    underscored: true, // Model=UserGroup - table=user_groups (tabela)
    underscoredAll: true, // Mesma coisa, mas para colunas e relacionamentos
  },
};
