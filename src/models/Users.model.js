const myUsers=[];
const uuid = require('uuid');

class Users{
    constructor(datas, id){
      this.datas = datas;
      this.id = id;
    }
    create(name, id){
      Users.push({
        name, 
        id
      })
   }
    list(){
    return users
  }
    update(id){
      const findIndex = myUsers.findIndex(datas => datas.id===id);
      if(findIndex<0){
        return "Não encontrado";
    }
      myUsers[findIndex].datas = this.datas
      myUsers[findIndex].id = this.id
        return myUsers;
  }    
    delete(id){
    users = users.filter(datas =>datas.id!==id);
    console.log('users', users)
  }
}