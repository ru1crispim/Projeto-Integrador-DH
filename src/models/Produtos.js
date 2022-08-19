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
        imagem:DataType.STRING,
        itemPedido_id: DataType.INTEGER
    },{        
        timestamps:false 
    }) 
    //     Produtos.associate = (models) => {
    //         Produtos.belongsTo(models.ItemPedido,{
    //         foreignKey: 'Produtos_id'
    //     })
        
    //     Fabricantes.belongsToMany(models.Produtos)
    //     Produtos.belongsToMany(models.Ofertas)
    // }
    return Produtos; 
}