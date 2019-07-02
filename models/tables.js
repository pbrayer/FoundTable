module.exports = function(sequelize, DataTypes) {
    // Added code here to create an Events model
    // 'return' the events after defining
    var Tables = sequelize.define("Tables", {
    taken: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
  });
    return Tables;
  };

  //Timeslot
  //Name of person