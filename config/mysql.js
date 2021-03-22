const Development = {
  USER: process.env.DB_USER,
  PASSWORD: process.env.DB_PASS,
};

const Production = {
  USER: process.env.DB_USER,
  PASSWORD: process.env.DB_PASS,
};

module.exports = {
  ...(process.env.ENV === "prod" ? Production : Development),
  HOST: process.env.DB_HOST,
  DB: process.env.DB_NAME,
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
