const db = require('../models');

const addressController = {
    address: async (req,res)=>{
        try{
            const {cep, endereco, enderecoNumber, complemento, bairro, cidade,state, referencia} = req.body;

            const resultAddress = await db.Endereços.create({
                cep,
                endereco,
                numero: enderecoNumber,
                complemento,
                bairro,
                cidade,
                estado: state,
                referencia
            });

            return res.redirect('/usuario')
        }
        catch(err){
            console.log(err)
        }
    }
}

module.exports = addressController;