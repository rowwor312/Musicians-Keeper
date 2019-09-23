module.exports = function(sequelize, DataTypes) {
  let Category = sequelize.define("Category", {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  Category.associate = function(models) {
    Category.hasMany(models.Expense);
  }

  return Category;
}