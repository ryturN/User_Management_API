import getAllUser from "../controllers/userController.js";
import  getUserById from "../controllers/userController.js";
import  updateUser from "../controllers/userController.js";
import  deleteUser from "../controllers/userController.js";

const user = [
    {
      method: 'GET',
      path: '/users',
      handler: async (req, h) => {
        try {
          const users = await User.find();
          return users;
        } catch (err) {
          return h.response({ err }).code(500);
        }
      },
    },
    {
      method: 'GET',
      path: '/users/{id}',
      handler: async (req, h) => {
        try {
          const { id } = req.params;
          const user = await User.findById(id);
          return user;
        } catch (err) {
          return h.response({ err }).code(500);
        }
      },
    },
    {
      method: 'PUT',
      path: '/users/{id}',
      handler: async (req, h) => {
        try {
          const { id } = req.params;
          const { username } = req.payload;
          const updateUser = await User.findByIdAndUpdate(id, { username }, { new: true });
          return updateUser;
        } catch (err) {
          return h.response({ err }).code(500);
        }
      },
    },
    {
      method: 'DELETE',
      path: '/users/{id}',
      handler: async (req, h) => {
        try {
          const { id } = req.params;
          await User.findByIdAndDelete(id);
          return { message: 'User deleted successfully' };
        } catch (err) {
          return h.response({ err }).code(500);
        }
      },
    },
  ];

export default user;