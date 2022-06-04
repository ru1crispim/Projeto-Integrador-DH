const myUsers=[];
const uuid = require('uuid');

class Users{
    create(datas){
      myUsers.push({
        ...datas, 
        id: uuid.v4()
      })
   }
    list(){
      return myUsers
  }
    update(id, datas){
      const findIndex = myUsers.findIndex(user => user.id===id); //user = datas
      if(findIndex < 0){
        return "Não encontrado";
    }
      myUsers[findIndex] = {...datas}
        return myUsers;
  }    
    delete(id){
    users = users.filter(datas =>datas.id!==id);
    console.log('users', users)
  }
}

module.exports = Users;