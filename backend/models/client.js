module.exports =  (sequelize, DataTypes ) => {

    const client = sequelize.define('client', {
        name: {
          type: DataTypes.STRING,
          allowNull: true
        },
        phone: {
          type: DataTypes.STRING,
          allowNull: true
        },
        location: {
            type: DataTypes.STRING,
            allowNull: true
        },
        coordinates: {
            type: DataTypes.STRING,
            allowNull: true
        },     
        level: {
          type: DataTypes.FLOAT,
          allowNull: true,
          defaultValue:100
        }, 
        remark: {
          type: DataTypes.ENUM('full', 'empty', 'half full'),
          allowNull: true,
          defaultValue:'empty'
        },        
      })

      return client
}
