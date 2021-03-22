const Development = {
  USER: "root",
  PASSWORD: "Luxpm@21",
};

const Production = {
  USER: "root",
  PASSWORD: "Luxpm@21",
};

module.exports = {
  ...(process.env.ENV === "prod" ? Production : Development),
  HOST: "localhost",
  DB: "luxpm_db",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
