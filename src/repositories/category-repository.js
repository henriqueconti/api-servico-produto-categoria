const mongoose = require('mongoose');
const Category = mongoose.model('Category');


exports.getCategory = async () => {
    const resultFind = await Category.find({}, 'title description');

    return resultFind;
}

exports.getById = async (id) => {
    let category = await Category.findOne({_id : id}, '_id title description');
    
    return category;
}

exports.create = async (data) => {
    //console.log(data);
    
    let categoryData = Category(data);
    await categoryData.save();
}

exports.delete = async (id) => {
    // console.log("Repository DELETE")
    await Category.findByIdAndDelete(id);
}

exports.put = async (id, data) => {
    //console.log("Repository PUT")
    
    await Category.findByIdAndUpdate(id, {
        $set:{
            title: data.title,
            description: data.description
        }
    })
}