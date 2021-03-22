var number = require("../controller/number.controller");
module.exports = (app) => {
  /**
   * @swagger
   * /number/generate:
   *  post:
   *    description: Generate the first 20 odd numbers. If you pass the limit parameter it generates until to it
   *    parameters: [{"name":"limit","in":"query","required":false,"type":integer}]
   *    responses:
   *      '201':
   *        description: Numbers are successful generated
   *      '404':
   *        description: Python interpreter or python script is not found
   *      '500':
   *        description: Server side error, check your database schema
   */
  app.post("/number/generate", number.generate);
  /**
   * @swagger
   * /number:
   *  get:
   *    description:  List of generated odd numbers
   *    responses:
   *      '200':
   *        description: A successful response
   *      '500':
   *        description: Server side error, check your database schema
   */
  app.get("/number", number.list);
};
