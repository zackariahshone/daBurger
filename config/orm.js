const connection = require('./connection');

const orm = {
    selectAll: function (tableInput) {
        const queryString = "SELECT * FROM burgers";
        connection.query("SELECT * FROM burgers", function (err, result) {
            if (err) throw err;
            console.log(result);
        });
    },
    selectOne: function (burgerID) {
        console.log(burgerID);
        const queryString = "SELECT FROM * burgers WHERE id = ?";
        connection.query(queryString, [burgerID], function(err, result){
            //if(err) throw err;
            console.log(result);
        });
    },
    updateProduct: function() {
        console.log("Updating all Rocky Road quantities...\n");
        const query = connection.query(
          "UPDATE burgers SET ? WHERE ?",
          [
            {
                burger_name: burgername
            },
            {
                devoured: devoured
            }
          ],
          function(err, res) {
            if (err) throw err;
            console.log(res.affectedRows + " products updated!\n");
            // Call deleteProduct AFTER the UPDATE completes
            deleteProduct();
          });
    }
}

module.exports = orm;