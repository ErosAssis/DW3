const express = require('express');
const { fCalculo } = require('../controller/ctlExercicio');

const router = express.Router();

router.post('/ctlExercicio', fCalculo);

module.exports = router;
