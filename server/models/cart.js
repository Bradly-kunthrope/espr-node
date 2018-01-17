module.exports = (sequelize, DataTypes) => {
  const Cart = sequelize.define('Cart', {
    r_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    cart_qty: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    user: DataTypes.STRING
  });
  Cart.associate = (models) => {
    Cart.belongsTo(models.User, {
      foreignKey: 'userId',
      onDelete: 'CASCADE',
    });
  };
  return Cart;
};