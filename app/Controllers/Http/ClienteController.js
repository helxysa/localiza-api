'use strict'

const Cliente = use('App/Models/Cliente')

class ClienteController {
    async index({ request, response }) {
        try {
            const clientes = await Cliente.all()
            return response.json(clientes)
        } catch (error) {
            return response.status(500).json({ error: 'Erro ao buscar clientes' })
        }
    }
}

module.exports = ClienteController
