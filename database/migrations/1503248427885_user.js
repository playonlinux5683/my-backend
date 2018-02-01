'use strict'

const Schema = use('Schema')

class UserSchema extends Schema {
  up() {
    this.create('users', collection => {
      collection.index('email_index', { email: 1 }, { unique: true })
      // table.string('username', 80).unique()
      // table.string('email', 254).unique()
      // table.string('password', 60)
      // table.timestamps()
    })
  }

  down() {
    this.drop('users')
  }
}

module.exports = UserSchema
