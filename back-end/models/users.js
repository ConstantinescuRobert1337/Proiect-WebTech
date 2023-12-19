import {db} from './config.js';
import { DataTypes } from 'sequelize';

export const login = db.define('login', {
    userId:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    accountType: {
        type: DataTypes.ENUM('admin', 'user'),
        allowNull: false
    },
},
    {
        indexes: [
            {
                unique: true,
                fields: ['username']
            }
        ]
    });