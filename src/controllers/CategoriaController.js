const CategoriaModel = require("../model/CategoriaModel.js");

class CategoriaController {

    async findAll(req, res) {
        const dados = await CategoriaModel.findAll();

        res.json(dados);
    }

    async findByPk(req, res) {
        const id = req.params.id;

        const dados = await CategoriaModel.findByPk(id);

        res.status(200).json(dados);
    }

    async create(req, res) {
        const body = req.body;

        CategoriaModel.create(body);

        res.status(201).json({
            message: "Categoria cadastrada com sucesso!"
        });
    }

    async update(req, res) {
        const id = req.params.id;
        const body = req.body;

        await CategoriaModel.update(body, {
            where: {
                id: id
            },
        });
        
        res.status(200).json({
            message: "Categoria atualizada com sucesso!"
        });
    }

    async delete(req, res) {
        const id = req.params.id;

        await CategoriaModel.destroy({
            where: {
                id: id
            },
        });
        
        res.status(200).json({
            message: "Categoria deletada com sucesso!"
        });
    }
}

module.exports = CategoriaController;