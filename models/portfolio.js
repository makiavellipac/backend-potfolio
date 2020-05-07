const {model,Schema}=require('mongoose');

const portfolio=new Schema(
    {
        title:String,
        img:String,
        description:String,
        tecnologias:[{type:String}],
        link:String,
        github:String,
        tipo:[{type:String}]
    },
    {
        timestamps:true,
        versionKey: false
    }
)

module.exports=model("portfolio",portfolio);