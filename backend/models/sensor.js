module.exports =  (sequelize, DataTypes ) => {

    const sensor = sequelize.define('sensor', {
        temperature: {
          type: DataTypes.FLOAT,
          allowNull: true
        },
        humidity: {
            type: DataTypes.FLOAT,
            allowNull: true
        },
        moisture: {
            type: DataTypes.FLOAT,
            allowNull: true
        },        
      })

      return sensor
}
