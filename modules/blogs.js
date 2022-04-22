const mongoose=require('mongoose')
const Schema=mongoose.Schema;

const blogSchema=new Schema({
    title:{
        type:String,
        require:true
    },
    snippet:{
        type:String,
        require:true
    },
    body:{
        type:String,
        require:true
    },

},{timestamp:true});
const blog=mongoose.model('blog',blogSchema)
module.exports=Blog;
