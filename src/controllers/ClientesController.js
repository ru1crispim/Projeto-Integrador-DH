const fs = require('fs');
const path = require('path');
const bcrypt = require('bcrypt');
// const {validationResult} = require('express-validator');
const db = require('../models');
const moment = require('moment');

const ClientesController = {
    // client: (req,res)=>{
    //     return res.render('clients/listClients')
    // },

    list: async (req,res)=>{
        try{
        const users = await db.Clientes.findAll({
            raw: true
        })
        // console.log(users)
        res.render('clients/listClients', {users})}
        catch(err){
            console.log(err)
        }
    },

    AcessCreate: (req,res)=>{
        return res.render('clients/regClientes')
    },

    create: async(req,res)=>{
        try{
            const {nome, sobrenome, email, cpf, telefone, date} = req.body;
            const result = await db.Clientes.create({
                nome,
                sobrenome,
                email,
                cpf,
                telefone,
                data_nascimento: date
            })
            
            return res.redirect("/clientes");
        }
            catch(err){
                console.log(err)
            }
    },
    DirectToUpdate: async (req,res)=>{
        try{
        const {id} = req.params;

        const user = await db.Clientes.findByPk(id);
        res.render('clients/updateClients', {user})
        }
        catch(err){
            console.log(err)
        }
    },
    update: async(req,res)=>{
        try{
            const {id} = req.params;
            const {nome, sobrenome, email, telefone, cpf, date} = req.body;
            
            console.log(nome,
                sobrenome,
                email,
                cpf,
                telefone,
                date)

            const result = await db.Clientes.update({
                nome,
                sobrenome,
                email,
                cpf,
                telefone: Number(telefone),
                data_nascimento: date
            }, {
                where:{
                    id:id
                }
            })
            console.log(result)
            return res.redirect('/clientes')
        } 
            catch(err){
                console.log(err)
            }
    },

    destroy: async(req,res)=>{
        try{
            const {id} = req.params;

            const result = await db.Clientes.destroy({
                where:{
                    id:id
                }
            })
            // console.log(result)
            return res.redirect('/clientes')
        }
        catch(err){
            console.log(err)
        }
        
    }
}

module.exports = ClientesController;