module.exports = (sequelize, DataType)=>{
    const Produtos = sequelize.define('Produtos',{
        id:{
            type:DataType.INTEGER,  // que tipo ele é
            primaryKey:true,
            unique:true,
            autoIncrement:true
        },
        nome:DataType.STRING,   
        valor:DataType.DECIMAL,
        categoria: DataType.STRING,
        descricao: DataType.STRING,
        quantidade: DataType.INTEGER,
        console: DataType.STRING,
        imagem:DataType.STRING
    },{        
        timestamps:false 
    }) 
        Produtos.associate = (models) => {
            Produtos.hasMany(models.ItemPedido,{
            foreignKey: 'id'
        })
        ItemPedido.belongsToMany(Produtos, {through: 'Pedidos'})
    }
    return Produtos; 
}