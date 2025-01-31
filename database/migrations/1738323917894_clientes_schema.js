'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ClientesSchema extends Schema {

  tableName = 'clientes'

  up () {
    this.create(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('nome').notNullable()
      table.string('cpf').unique().notNullable()
      table.string('email').unique().notNullable()
      table.string('senha').notNullable()
      table.string('endereco').notNullable()
      table.string('telefone').notNullable()
      table.string('nivel_acesso').notNullable()
      table.timestamp('created_at', { useTz: true })
    })
  }

  down () {
    this.drop(this.tableName)
  }
}

module.exports = ClientesSchema
