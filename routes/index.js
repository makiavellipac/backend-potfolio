const {Router} = require('express');

const{
    getAllData,
    getDataId,
    getDataType,
}=require('../controllers/index')
const router=Router();
router
.get('/', (req, res) => res.status(200).send(`API ready 
                                            <br>"/getData" Regresa toda la data
                                            <br>"/getDataId Regresa un elemento por Id
                                            <br>"/getDataType" Regresa todos los elementos de ese tipo`))
.get("/getData",getAllData)
.get("/getDataId=:_id",getDataId)
.get("/getDataType=:tipo",getDataType)

module.exports = router;