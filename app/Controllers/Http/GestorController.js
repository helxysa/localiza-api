'use strict'

const Gestor = use('App/Models/Gestor')

class GestorController {
    async index({ request, response }) {
        try {
            const gestores = await Gestor.all()
            return response.json(gestores)
        } catch (error) {
            return response.status(500).json({ error: 'Erro ao buscar gestores' })
        }
    }
}

module.exports = GestorController
