var router = require('express').Router()

router.get('/score', (req, res) => {
  res.status(200).send({ 
    avgScore: 42
   })
})

module.exports = router