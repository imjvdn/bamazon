var mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'rootroot',
  database: 'bamazon_db',
});
console.log('Welcome to your Database!');
connection.connect(function (err) {
  if (err) {
    throw err;
  }
  console.log('connected as id ' + connection.threadId);
  connection.query('select * from Products', function (err, res) {
    if (err) {
      throw err;
    }
    console.log(res);
  });

  connection.query(
    'select * from Products where department_name = "Dairy"',
    function (err, res) {
      if (err) {
        throw err;
      }
      console.log(res);
    }
  );

  // connection.query(
  //   'select product_name, count(*) from Products group by stock_quantity having count(*)> 1',
  //   function (err, res) {
  //     if (err) {
  //       throw err;
  //     }
  //     console.log(res);
  //   }
  // );

  // connection.query('select * from Products where dairy = "Milk"', function (
  //   err,
  //   res
  // ) {
  //   if (err) {
  //     throw err;
  //   }
  //   console.log(res);
  // });

  connection.end();
});
