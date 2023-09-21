import User from '../models/User.js';

const getAllUser = async (req,h)=>{
    try {
        const users = await User.find();
        return users;
    }catch(err){
        return h.response({err}.code(500));
    }
};

const getUserById = async (req,h)=>{
    try{
        const { id } = req.params;
        const user = await User.findById(id);
        return user;
    }catch(err){
        return h.response({err}.code(500));
    }
};

const updateUser = async(req,h)=>{
    try{
        const { id } = req.params;
        const { username }= req.payload;
        const updateUser = await User.findByIdAndUpdate(id,{username}, {new : true});
        return updateUser;
    }catch(err){
        return h.response({err}.code(500));
    }
};

const deleteUser = async(req,h)=>{
    try{
        const { id } = req.params;
        await User.findByIdAnDelete(id);
        return {message : 'User deleted successfully'};
    }catch(err){
        return h.response({err}.code(500))
    }
}

export default {
    getAllUser,
    getUserById,
    updateUser,
    deleteUser,
}