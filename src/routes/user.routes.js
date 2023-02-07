const { Router } = require('express');
const { createUserController } = require('../controllers/user.controllers');

const router = Router();

router.post('/', createUserController);

module.exports = router;