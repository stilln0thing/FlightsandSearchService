const { create } = require("../controllers/flight-controller");

class CrudRepository{
  constructor(model){
    this.model = model;
  }


async create(){
try {
    const result = await this.model.create(data);
    return result;
} catch (error) {
    console.log("Something went wrong in the crud repo");
}
}
async destroy(modelId){
    try {
     const result = await this.model.destroy({
        where:{
            id:modelId
        }
     });
     return true;
    } catch (error) {
        console.log("Something went wrong in the crud repo");
    }
}
async get(modelId){
    try {
     const result = await this.model.findByPk(modelId);
     return result;
    } catch (error) {
        console.log("Something went wrong in the crud repo");
    }
}
async getAll(){
    try {
        const result = await this.model.findAll();
        return result;
    } catch (error) {
        console.log("Something went wrong in the crud repo");
    }
}
async update(modelId,data){
    try {
     const result = await this.model.update(data, {
        where: {
            id: modelId
        },
     });
     return result;
    } catch (error) {
        console.log("Something went wrong in the crud repo");
    }
}


}

module.exports = CrudRepository;