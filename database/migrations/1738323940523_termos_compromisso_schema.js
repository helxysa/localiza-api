'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TermosCompromissoSchema extends Schema {
  
  tableName = 'termos_compromissos'

  up () {
    this.create(this.tableName, (table) => {
      table.increments('id').primary()
      table.integer('id_aluguel').unsigned().references('id').inTable('alugueis').onDelete('CASCADE')
      table.text('texto').notNullable()
      table.timestamp('data_assinatura', { useTz: true })
    })
  }

  down () {
    this.drop(this.tableName)
  }
}

module.exports = TermosCompromissoSchema
