import { DataTypes } from 'sequelize';
import sequelize from '../databases.js';

    
const User = sequelize.define('User',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    username : {
        type: DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

// sequelize.sync()
//     .then(()=>{
//         console.log('Tabel "User" telah dibuat');
//     })
//     .catch((err)=>{
//         console.error('Error dalam sinkronisasi tabel "User":',err);
//     })

export default User