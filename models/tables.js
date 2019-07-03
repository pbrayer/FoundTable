module.exports = function(sequelize, DataTypes) {
    // Added code here to create a Tables model
    // 'return' the tables after defining
    var foundTables = sequelize.define("foundTables", {
    taken: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    partySize: {
        type: DataTypes.INTEGER, 
        defaultValue: 2
    }
  });
    return foundTables;
  };

  //Timeslot