require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT;
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: "Odd numbers API",
      description: "LuxPM online assessment",
      contact: {
        name: "Javkhlan Gansukh",
      },
      servers: ["http://localhost:" + port],
    },
  },
  // ['.router/*.js']
  apis: ["./router/number.router.js"],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

require("./router/number.router")(app);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
