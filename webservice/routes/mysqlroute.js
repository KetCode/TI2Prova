const express = require('express')
const router = express.Router()

const sql = require('../config/database')

router.get('/', (req, res, next) => {
    sql.query('select * from usuarios order by idusuario asc limit 0,5', function(err, result) {
        console.log(result)
        res.send(result)
    })
})
router.post('/', (req, res) => {
    console.log(req.body)
})

module.exports = router