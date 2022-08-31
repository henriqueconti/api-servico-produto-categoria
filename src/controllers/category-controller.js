const mongoose = require('mongoose');
const repositoryCategory = require('../repositories/category-repository')


exports.get = async (req, res, next) => {
    const data = await repositoryCategory.getCategory();
    
    res.status(200).send(data);
}

exports.post = async (req, res, next) => {
    try{
        await repositoryCategory.create(req.body);
        
        res.status(201).send({message: "Categoria criada com sucesso!"})
    }catch(erro){
        res.status(400).send({message: "Erro ao criar categoria!"});
    }
}

exports.put = async (req, res, next) => {
    const id = req.params.id;
    const body = req.body;

    await repositoryCategory.put(id, body);
    res.status(200).send({message: "Categoria atualizada com sucesso!"});
}

exports.getById = async (req, res, next) => {
    const id = req.params.id;
    const data = await repositoryCategory.getById(id);
    
    if(data == null){
        res.status(404).send();
    }

    res.status(200).send(data)
}

exports.delete = async (req, res, next)=>{
    const id = req.params.id;
    
    try{
        await repositoryCategory.delete(id);
    
        res.status(200).send({message: "Categoria deletada com sucesso!"})
    }catch(erro){
        res.status(400).send({message: "Erro ao deletar!"});
    }
}