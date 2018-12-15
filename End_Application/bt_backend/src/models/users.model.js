// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const users = sequelizeClient.define('users', {
    username: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: true
    }, 
    email: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: true
    },
  
  
  }, {
    hooks: {
      beforeCount(options) {
        options.raw = true;
      }
    }
  });

  // eslint-disable-next-line no-unused-vars
  users.associate = function (models) {

    users.hasMany(models.auctions, { foreignKey: 'seller_id' })
    users.hasMany(models.auctions, { foreignKey: 'top_bidder_id' })
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

 /* {
    classMethods: {
      associate (models) { // eslint-disable-line no-unused-vars
        users.hasMany(models.auctions, { foreignKey: 'seller_id' })
        users.hasMany(models.auctions, { foreignKey: 'top_bidder_id' })
      }
    }*/
  //});

  return users;
};
