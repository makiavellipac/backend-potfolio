const {Router} = require('express');

const{
    getAllData,
    getDataId,
    getDataType,
}=require('../controllers/index')
const router=Router();
router
.get('/', (req, res) => res.status(200).send('API ready'))
.get("/getData",getAllData)
.get("/getDataId=:_id",getDataId)
.get("/getDataType=:tipo",getDataType)

module.exports = router;