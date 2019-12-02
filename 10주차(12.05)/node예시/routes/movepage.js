const express = require('express');
const router = express.Router();

router.get('/',(req,res,next)=>{
    res.render('movepage', {variable:'movepage'});
});

module.exports = router;