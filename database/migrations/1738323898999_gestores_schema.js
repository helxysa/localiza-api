'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class GestoresSchema extends Schema {
   tableName = 'gestores'
  
  up () {
    this.create(this.tableName, (table) => {
      table.increments().primary()
      table.string('nome').notNullable()
      table.string('email').notNullable()
      table.string('senha').notNullable()
      table.string('nivel_acesso').notNullable()
      table.timestamp('created_at', { useTz: true })    })
  }

  down () {
    this.drop(this.tableName)
  }
}

module.exports = GestoresSchema
