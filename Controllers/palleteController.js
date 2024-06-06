const express = require('express');
const palleteColor = require('../DataModel/colorModel');

getAllColors = async (req, res) => {
  try {
    const pallete = await palleteColor.find();
    res.status(200).json({
      status: 'success',
      data: pallete,
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      data: 'Not Found',
    });
  }
};
