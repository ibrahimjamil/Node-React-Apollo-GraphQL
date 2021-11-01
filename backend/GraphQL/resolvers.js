
const {
    GraphQLUpload,
  } = require('graphql-upload');

const resolvers = {
    Upload: GraphQLUpload,
    Query: {
        getAllUsers(parent,args,{user,dataSources},info) {
        return dataSources.userAPI.getAllUsers();
      }
    },
    Mutation: {
        createUser(parent,args,{user,dataSources},info){
            console.log(args)
             return dataSources.userAPI.createUsr(args) 
        },
        singleUpload: async (parent, {file},{dataSources}) => {
            const { createReadStream, filename, mimetype, encoding } = await file;
            console.log(createReadStream, filename, mimetype, encoding)
            const stream = createReadStream();
            const out = require('fs').createWriteStream('local-file-output.txt');
            stream.pipe(out);
      
            return { filename, mimetype, encoding };
          },
    }
  };

 module.exports = resolvers