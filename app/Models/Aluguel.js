'use strict'

const Model = use('Model')
const moment = use('moment')

class Aluguel extends Model {
  static get table() {
    return 'alugueis'
  }

  static get timestamps() {
    return true
  }

  static get createdAtColumn() {
    return 'created_at'
  }

  static get updatedAtColumn() {
    return null
  }

  cliente() {
    return this.belongsTo('App/Models/Cliente', 'id_usuario', 'id')
  }

  veiculo() {
    return this.belongsTo('App/Models/Veiculo', 'id_veiculo', 'id')
  }

  termoCompromisso() {
    return this.hasOne('App/Models/TermoCompromisso', 'id', 'id_aluguel')
  }

  static castDates(field, value) {
    if (field === 'data_inicio' || field === 'data_fim' || field === 'created_at') {
      return moment(value).format('YYYY-MM-DD HH:mm:ss')
    }
    return super.castDates(field, value)
  }
}

module.exports = Aluguel
