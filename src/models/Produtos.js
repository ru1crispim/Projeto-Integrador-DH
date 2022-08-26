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
        fabricante_id: DataType.INTEGER
    },{        
        timestamps:false 
    }) 
        // Produtos.associate = (models) => {
        //     Produtos.belongsTo(models.ItemPedidos,{
        //     foreignKey: 'Produtos_id'
        // })

        // Produtos.hasOne(models.Fabricantes)
        // Produtos.hasMany(models.Ofertas)
        // }
    return Produtos; 
}