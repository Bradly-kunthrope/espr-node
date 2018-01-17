module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    last_name: {type: DataTypes.STRING,
      allowNull: false,
    },
    first_name: {type: DataTypes.STRING,
      allowNull: false,
    },
    email: {type: DataTypes.STRING,
      allowNull: false,
    },
    password: {type: DataTypes.STRING,
      allowNull: false,
    }
  });
  User.associate = (models) => {
    User.hasMany(models.Cart, {
      foreignKey: 'userId',
      as: 'carts',
    });
  };
  return User;
};