'use strict'

const Model = use('Model')

class Token extends Model {

  /**
   * A token belongs to one user
   *
   * @method user
   *
   * @return {Object}
   */
  user() {
    return this.belongsTo('App/Models/User')
  }
}

module.exports = Token
