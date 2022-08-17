module.exports = (sequelize, DataType)=>{
    const Endereco = sequelize.define('Endereco',{
        id:{
            type: DataType.INTERGER,
            primaryKey: true,
            unique: true,
            autoIncrement: true
        },
        cep: DataType.STRING,
        endereco: DataType.STRING,
        numero: DataType.INTERGER,
        complemento: DataType.STRING,
        bairro: DataType.STRING,
        cidade: DataType.STRING,
        estado: DataType.STRING,
        Referencia: DataType.STRING
    },{
        timestamps: false   
    }) //relacionamento com clientes_id
    return Endereco
}