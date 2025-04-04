import User from "../models/userModel.js"


// 1.Add User
export const create = async(req,res) =>{ //data create
    try{
        const userData = new User(req.body);
        if(!userData){
            return res.status(404).json({msg:"user not found"});
        }
        const saveData = await userData.save();
        res.status(200).json(saveData);
    }catch(error){
        res.status(500).json({error:error});
    }
}

export const getAll = async(req,res)=>{ //fecting Data  which you create  then it show here
    try{
        const userData = await User.find();
        if(!userData){
            return res.status(404).json({msg:"user data not found"});
        }
        res.status(200).json(userData);
    }catch(error){
        res.status(500).json({error:error});
    }
}

export const getOne = async(req,res) =>{ //we can search a particular id or identity for user
    try {
        const id = req.params.id;
        const userExist = await User.findById(id);
        if(!userExist){
            return res.status(404).json({msg:"user not found"});
        }
        res.status(200).json(userExist);
        
    } catch (error) {
        res.status(500).json({error:error});

    }
}

// 2.Update User or Edit
export const update = async (req,res) => {
    try {
        const id = req.params.id;
        const userExist = await User.findById(id);
        if(!userExist){
            return res.status(401).json({msg:"user not found"});
        }
        const updatedData = await User.findByIdAndUpdate(id,req.body,{new:true});
        res.status(200).json({msg:"User Updated Succesfully"});

    } catch (error) {
        res.status(500).json({error:error});
    }
}

//3.Delete User

export const deleteUser = async(req,res)=>{
    try {
        const id = req.params.id;
        const userExist = await User.findById(id)
        if(!userExist){
            return res.status(401).json({msg:"user not exits"});
        }
        await User.findByIdAndDelete(id);
        res.status(200).json({msg:"User Deleted successfully"});

    } catch (error) {
        res.status(500).json({error:error});
    }
}