const {
    homePage,
    analyseFile,
} = require('../controllers/file-upload.controller');
const router = require('express').Router();
const multer = require('multer');
const upload = multer();

router.get('/', homePage);
router.post('/api/fileanalyse', upload.any(), analyseFile);

module.exports = router;
