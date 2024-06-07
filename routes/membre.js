const express = require('express');
const { body } = require('express-validator');

const membreController = require('../controllers/membre');

const router = express.Router();

router.get('/addMembre', membreController.pageAjoutRDV);
router.post('/membre/delete/:id', membreController.deleteMembre);
router.post('/membre', membreController.addMembre);
router.get('/pageBravo',membreController.pageBravo);
router.get('/pageTableau',membreController.pageTableau);
router.get('/pageConsult/:id',membreController.pageConsult);
router.get('/pageEdit/:id',membreController.pageEdit);
router.post('/membre/update/:id', membreController.updateMembre);

module.exports = router;