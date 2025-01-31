'use strict'

const Aluguel = use('App/Models/Aluguel')

class AluguelController {
    async index({ request, response }) {
        try {
            const alugueis = await Aluguel.all()
            return response.json(alugueis)
        } catch (error) {
            return response.status(500).json({ error: 'Erro ao buscar alugueis' })
        }
    }


    
}

module.exports = AluguelController
