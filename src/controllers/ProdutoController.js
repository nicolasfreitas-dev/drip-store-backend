const ProdutoModel = require("../model/ProdutoModel.js");

class ProdutoController {

    async findAll(req, res) {
        const dados = await ProdutoModel.findAll();

        res.json(dados);
    }

    async findByPk(req, res) {
        const id = req.params.id;

        const dados = await ProdutoModel.findByPk(id);

        res.status(200).json(dados);
    }

    async create(req, res) {
        const body = req.body;

        ProdutoModel.create(body);

        res.status(201).json({
            message: "Usuário cadastrado com sucesso!"
        });
    }

    async update(req, res) {
        const id = req.params.id;
        const body = req.body;

        await ProdutoModel.update(body, {
            where: {
                id: id
            },
        });
        
        res.status(200).json({
            message: "Usuário atualizado com sucesso!"
        });
    }

    async delete(req, res) {
        const id = req.params.id;

        await ProdutoModel.destroy({
            where: {
                id: id
            },
        });
        
        res.status(200).json({
            message: "Usuário deletado com sucesso!"
        });
    }
}

module.exports = ProdutoController;