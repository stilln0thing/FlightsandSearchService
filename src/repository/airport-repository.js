const CrudRepository = require('./crud-repository');
const {} = require('../models/index')
class AirplaneRepository extends CrudRepository{
    constructor(){
        super(Airport);
    }
}

module.exports = AirplaneRepository;