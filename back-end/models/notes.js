import {db} from './config.js';
import { DataTypes } from 'sequelize';

export const notes = db.define('notes', {
    noteId:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        foreignKey: true
    },
    noteTitle: {
        type: DataTypes.STRING,
        allowNull: false
    },
    noteBody: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    noteDate: {
        type: DataTypes.DATE,
        allowNull: false
    },
    noteStatus: {
        type: DataTypes.ENUM('active', 'inactive'),
        allowNull: false
    },
},
    {
        indexes: [
            {
                unique: true,
                fields: ['noteId']
            }
        ]
    });