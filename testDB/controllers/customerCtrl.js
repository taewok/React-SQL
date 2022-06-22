const connection = require("../dbConfig");

const customerCtrl = {
  getCustomer: async (req, res) => {
    connection.query("select * from customer", (error, rows) => {
      if (error) throw error;
      res.send(rows);
    });
  },
};

module.exports = customerCtrl;