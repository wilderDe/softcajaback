const Registro = require("../models/registro");

const reportesGet = async(req, res) => {
    const {start, end} = req.params;
    
    const registro = await Registro.find({
        fecha:{
            $gte:start,
            $lt: end
        }
    });


    res.json(registro)
  

}

module.exports = {
    reportesGet
}