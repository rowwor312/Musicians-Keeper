module.exports = function(sequelize, DataTypes) {
  let Expense = sequelize.define("Expense", {
    date: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    },
    amount: {
      type: DataTypes.FLOAT,
      defaultValue: 0.00
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    img: DataTypes.STRING
  });

  // Associations For Expense
  Expense.associate = function(models) {
    Expense.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });

    Expense.belongsTo(models.Category, {
      foreignKey: {
        allowNull: false
      }
    })
  }

  return Expense;
};