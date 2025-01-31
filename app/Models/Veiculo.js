'use strict'

const Model = use('Model')
const DateTime = use('Luxon').DateTime

class Veiculo extends Model {
  static get table() {
    return 'veiculos'
  }

  static get timestamps() {
    return true
  }

  static get createdAtColumn() {
    return 'data_cadastro'
  }

  static get updatedAtColumn() {
    return null
  }

  gestor() {
    return this.belongsTo('App/Models/Gestor', 'id_gestor', 'id')
  }

  static castDates(field, value) {
    if (field === 'data_cadastro') {
      return DateTime.fromISO(value).toFormat('yyyy-LL-dd HH:mm:ss')
    }
    return super.castDates(field, value)
  }
}

module.exports = Veiculo
