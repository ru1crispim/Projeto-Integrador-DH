const fs = require('fs');
const path = require('path');
const db = require('../models');

const fabricantesController = {

    listar: async(req,res)=>{
        try{
            const developers = await db.Fabricantes.findAll({
                raw: true
            })
            console.log(developers);
            return res.render('fabricantes/listFab', {developers})
        }
        catch(err){
            console.log(err);
        }
    },

    accesAdict: (req,res)=>{
        return res.render('fabricantes/regFab');
    },

    adicionar: async(req,res)=>{
        try{
            const {nome} = req.body;
            const result = await db.Fabricantes.create({
                nome
            })
            return res.redirect('/fabricantes')
        }
        catch(err){
            console.log(err);
        }
    },

    remover: async(req,res)=>{
        try{
            
        }
        catch(err){
            console.log(err);
        }
    }
}


module.exports = fabricantesController;