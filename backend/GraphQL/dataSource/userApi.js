const { RESTDataSource } = require('apollo-datasource-rest');

class UserAPI extends RESTDataSource {
    //here we access all restApi methods like POST, GET, DELETE, PUT
    constructor() {
      super();
      this.user=[
          {
              firstName:"jamil",
              lastName:"ahmed",
              email:"jamil@gmail.com",
              password:"werr"
          }
        ]
      this.baseURL = 'https://localhost:5000/';
    }

    async createUsr(usr){
        this.user.push(usr)
        return usr 
    }

    async singleUpload(file){
        return file
    }
  
    async getAllUsers() {
      return this.user
    }
  }

  module.exports = UserAPI