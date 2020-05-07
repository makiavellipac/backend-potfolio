const portfolio=require('../models/portfolio');

exports.getAllData=async(req,res)=>{
    const data=await portfolio.find()
    res.status(200).json({data})
}

exports.getDataId=async(req,res)=>{
    const {_id}=req.params
    const data=await portfolio.find({_id:_id})
    res.status(200).json({data})
}

exports.getDataType=async(req,res)=>{
    const {tipo}=req.params
    const data=await portfolio.find({tipo:tipo})
    res.status(200).json({data})
}