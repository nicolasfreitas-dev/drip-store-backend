const UsuarioModel = require("../model/UsuarioModel.js");

class UsuarioController {

    async findAll(req, res) {
        const dados = await UsuarioModel.findAll();

        res.json(dados);
    }

    async findByPk(req, res) {
        const id = req.params.id;

        const dados = await UsuarioModel.findByPk(id);

        res.status(200).json(dados);
    }

    async create(req, res) {
        const body = req.body;

        UsuarioModel.create(body);

        res.status(201).json({
            message: "Usuário cadastrado com sucesso!"
        });
    }

    async update(req, res) {
        const id = req.params.id;
        const body = req.body;

        await UsuarioModel.update(body, {
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

        await UsuarioModel.destroy({
            where: {
                id: id
            },
        });
        
        res.status(200).json({
            message: "Usuário deletado com sucesso!"
        });
    }
}

module.exports = UsuarioController;