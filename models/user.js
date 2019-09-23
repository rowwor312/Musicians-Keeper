

module.exports = function(sequelize, DataTypes) {
  let User = sequelize.define("User", {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    google: DataTypes.STRING,
    email: DataTypes.STRING,
    address: DataTypes.STRING,
    income: {
      type: DataTypes.FLOAT,
      defaultValue: 0.00
    }
  });

  User.associate = function(models) {
    User.hasMany(models.Expense, {
      onDelete: "cascade"
    });
  };

  return User;
};