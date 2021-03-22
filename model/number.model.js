module.exports = (sequelize, Sequelize) => {
  const Number = sequelize.define("result_gansukh", {
    id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
    number: { type: Sequelize.STRING, allowNull: false },
    createdAt: {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Sequelize.NOW,
    },
    updatedAt: {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Sequelize.NOW,
    },
  });
  return Number;
};
