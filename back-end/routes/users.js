import express from 'express';


const express = require('express');
const router = express.Router();
const userController = require('../controllers/users');
const { createUser } = require('../controllers/users');

router.post('/login', userController.login);
router.post('/signup', userController.createUser);

module.exports = router;
