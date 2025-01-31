'use strict'

const Veiculo = use('App/Models/Veiculo')

class VeiculoController {
    async index({ request, response }) {
        try {
            const veiculos = await Veiculo.all()
            return response.json(veiculos)
        } catch (error) {
            return response.status(500).json({ error: 'Erro ao buscar veículos' })
        }
    }
}

module.exports = VeiculoController
