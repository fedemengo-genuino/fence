'use strict'

/**
 * node-fence
 * @license MIT
 * @copyright Slynova - Romain Lanz <romain.lanz@slynova.ch>
 */

const Ability = require('./ability')

class ViewAbility extends Ability {

  /**
   * Constructor.
   *
   * @param  {object} resource
   * @param  {array|object|null} fields
   * @return {void}
   */
  constructor (resource, fields = null) {
    super(resource, fields)

    this.type = Ability.VIEW
  }

}

module.exports = ViewAbility
