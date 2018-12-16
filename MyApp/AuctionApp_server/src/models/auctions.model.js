// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const auctions = sequelizeClient.define('auctions', {
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    current_price: {
      type: Sequelize.DECIMAL(2),
      allowNull: false
    },
    exp_date: {
      type: Sequelize.DATE,
      allowNull: false
    },
    
  }, {
    hooks: {
      beforeCount(options) {
        options.raw = true;
      }
    }
  });

  // eslint-disable-next-line no-unused-vars
  auctions.associate = function (models) {
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return auctions;
};
