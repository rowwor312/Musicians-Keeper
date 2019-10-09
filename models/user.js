module.exports = function(sequelize, DataTypes) {
  let User = sequelize.define("User", {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    username: {
      type: DataTypes.STRING,
      unique: true
    },
    password: DataTypes.STRING,
    google: DataTypes.STRING,
    email: DataTypes.STRING,
    address: DataTypes.STRING,
    income: {
      type: DataTypes.FLOAT,
      defaultValue: 0.00
    }
  });

  // Associations for User
  User.associate = function(models) {
    User.hasMany(models.Expense, {
      onDelete: "cascade"
    });
  };

  return User;
};