'use strict'

const Model = use('Model')
const DateTime = use('Luxon').DateTime

class Cliente extends Model {
  static get table() {
    return 'clientes'
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

  alugueis() {
    return this.hasMany('App/Models/Aluguel', 'id', 'id_usuario')
  }

  static castDates(field, value) {
    if (field === 'created_at') {
      return DateTime.fromISO(value).toFormat('yyyy-LL-dd HH:mm:ss')
    }
    return super.castDates(field, value)
  }
}

module.exports = Cliente
