const db = require('../models')


module.exports = {
    create: async (req, res) =>{

        let data = {
            'temperature': req.body.temperature,
            'humidity': req.body.humidity,
            'moisture': req.body.moisture
        }

        let sensor = await db.sensor.create(data)

        res.send(sensor)
    },
    
    getData: async (req, res) => {
        let datas = await db.sensor.findAll({})
        res.send(datas)
    }
}