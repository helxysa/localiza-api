'use strict'

const TermoCompromisso = use('App/Models/TermoCompromisso')

class TermoCompromissoController {
    async index({ request, response }) {
        try {
            const termosCompromisso = await TermoCompromisso.all()
            return response.json(termosCompromisso)
        } catch (error) {
            return response.status(500).json({ error: 'Erro ao buscar termos de compromisso' , error: error.message})
        }
    }
}

module.exports = TermoCompromissoController
