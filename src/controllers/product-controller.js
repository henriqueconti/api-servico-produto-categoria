const mongoose = require('mongoose');
const repositoryProduct = require('../repositories/product-repository')


exports.get = async (req, res, next) => {
    const data = await repositoryProduct.getProduct();
    
    res.status(200).send(data);
}

exports.post = async (req, res, next) => {
    try{
        await repositoryProduct.create(req.body);
        
        res.status(201).send({message: "Produto criado com sucesso!"})
    }catch(erro){
        res.status(400).send({message: "Erro ao criar produto!"});
    }
}

exports.put = async (req, res, next) => {
    const id = req.params.id;
    const body = req.body;

    await repositoryProduct.put(id, body);
    res.status(200).send({message: "Produto atualizado com sucesso!"});
}

exports.getById = async (req, res, next) => {
    const id = req.params.id;
    const data = await repositoryProduct.getById(id);
    
    if(data == null){
        res.status(404).send();
    }

    res.status(200).send(data)
}

exports.delete = async (req, res, next) => {
    const id = req.params.id;

    await repositoryProduct.delete(id);
    
    res.status(200).send({message: "Produto deletado com sucesso!"})
}