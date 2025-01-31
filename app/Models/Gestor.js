'use strict'

const Model = use('Model')
const DateTime = use('Luxon').DateTime

class Gestor extends Model {
  static get table() {
    return 'gestores'
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

  static castDates(field, value) {
    if (field === 'created_at') {
      return DateTime.fromISO(value).toFormat('yyyy-LL-dd HH:mm:ss')
    }
    return super.castDates(field, value)
  }
}

module.exports = Gestor
