const path = require('path');
const express = require('express');
const router = express.Router();
const colorPallete = require('./../DataModel/colorModel');

getIndexPage = async (req, res) => {
  res.status(200).render('Overview', {
    title: 'Home',
  });
};

getCheckerPage = async (req, res) => {
  res.status(200).sendFile(path.join(__dirname, '../public', 'checker.html'));
};

getEnhancedPage = async (req, res) => {
  res.status(200).render('Enhanced', {
    title: 'Enhanced Checker',
  });
};

getPalletePage = async (req, res) => {
  req.query.types = 'color';
  try {
    const colors = await colorPallete.find(req.query);
    res.status(200).render('Pallete', {
      title: 'Pallete',
      colors,
    });
  } catch (err) {
    console.log('Error Occured');
  }
};

getMoreColor = async (req, res) => {
  req.query.types = 'special';
  try {
    const moreColors = await colorPallete.find(req.query);
    res.status(200).render('explore', {
      title: 'Pallete',
      moreColors,
    });
  } catch (err) {
    console.log('Error Occured');
  }
};

router.get('/', getIndexPage);

router.get('/Checker', getCheckerPage);
router.get('/Enhanced', getEnhancedPage);
router.get('/Pallete', getPalletePage);
router.get('/Explore', getMoreColor);

module.exports = router;
