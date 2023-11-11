const path = require('path');

/**
 * Sends the home page file as a response.
 *
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @return {Object} The response object.
 */
const homePage = (req, res) => {
    const indexPath = path.join(__dirname, '../../views/index.html');
    return res.sendFile(indexPath);
};

/**
 * Analyzes the uploaded files and returns the details of the first file.
 *
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @return {Object} The details of the first file.
 */
const analyseFile = (req, res) => {
    const filterDetail = req.files.map((attribute) => {
        return {
            name: attribute.originalname,
            type: attribute.mimetype,
            size: attribute.size,
        };
    })[0];
    return res.json(filterDetail);
};

module.exports = { homePage, analyseFile };
