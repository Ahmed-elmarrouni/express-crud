const express = require("express");
const router = express.Router();

const { getJoueurs, createJoueurs, updateJoueurs, deleteJoueurs,} = require('../Controllers/joueurController')

router.route('/').get(getJoueurs).post(createJoueurs)

router.route('/:id').put(updateJoueurs).delete(deleteJoueurs)

module.exports = router;