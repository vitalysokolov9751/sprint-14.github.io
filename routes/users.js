/* eslint-disable linebreak-style */
const users = require('express').Router();
const {
  getUsers, getUser, patchProfile, patchAvatar,
} = require('../controllers/users');

users.get('/', getUsers);
users.get('/:userId', getUser);
users.patch('/me', patchProfile);
users.patch('/me/avatar', patchAvatar);

module.exports = users;
