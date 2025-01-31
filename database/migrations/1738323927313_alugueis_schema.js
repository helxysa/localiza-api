'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AlugueisSchema extends Schema {
  tableName = 'alugueis'

  up () {
    this.create(this.tableName, (table) => {
      table.increments('id').primary()
      table.integer('id_usuario').unsigned().references('id').inTable('clientes').onDelete('CASCADE')
      table.integer('id_veiculo').unsigned().references('id').inTable('veiculos').onDelete('CASCADE')
      table.timestamp('data_inicio', { useTz: true }).notNullable()
      table.timestamp('data_fim', { useTz: true }).notNullable()
      table.decimal('valor_total', 10, 2).notNullable()
      table.boolean('termo_assinado').defaultTo(false)
      table.timestamp('created_at', { useTz: true })
    })
  }

  down () {
    this.drop(this.tableName)
  }
}

module.exports = AlugueisSchema
