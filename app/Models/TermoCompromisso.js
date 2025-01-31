'use strict'

const Model = use('Model')
const DateTime = use('Luxon').DateTime

class TermoCompromisso extends Model {
  static get table() {
    return 'termos_compromissos'
  }

  static get timestamps() {
    return true
  }

  static get createdAtColumn() {
    return 'data_assinatura'
  }

  static get updatedAtColumn() {
    return null
  }

  aluguel() {
    return this.belongsTo('App/Models/Aluguel', 'id_aluguel', 'id')
  }

  static castDates(field, value) {
    if (field === 'data_assinatura') {
      return DateTime.fromISO(value).toFormat('yyyy-LL-dd HH:mm:ss')
    }
    return super.castDates(field, value)
  }
}

module.exports = TermoCompromisso
