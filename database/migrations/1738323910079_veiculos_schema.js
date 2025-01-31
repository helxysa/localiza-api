'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class VeiculosSchema extends Schema {

  tableName = 'veiculos'

  up () {
    this.create(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('modelo').notNullable()
      table.string('marca').notNullable()
      table.integer('ano').notNullable()
      table.string('placa').unique().notNullable()
      table.string('tipo').notNullable()
      table.boolean('disponivel').defaultTo(true)
      table.decimal('valor_diaria', 10, 2).notNullable()
      table.timestamp('created_at', { useTz: true })
      table.integer('id_gestor').unsigned().references('id').inTable('gestores').onDelete('CASCADE')

    })
  }

  down () {
    this.drop(this.tableName)
  }
}

module.exports = VeiculosSchema
