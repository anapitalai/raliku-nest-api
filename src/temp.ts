
   /**  async create(user:User,file):Promise<User>{
       
        console.log(file.path,'from create endpoint');
        const username = user.username ;
        const password = user.password;
        console.log(user.password);
        console.log(user.username);
        
        const imgPath = file.path;
        const newPath={image:imgPath};
        console.log(newPath); 
        const newUser= new this.userModel({username:username,password:password,image:imgPath});
        return await newUser.save();
        
    }


    async uploadImage(id:string,file):Promise<User>{
        console.log(file.path);
        const imagePath = file.path;
        const {image} = UserSchema;
        return await this.userModel.findByIdAndUpdate(id,{image:imagePath},{new: true});
    }**/