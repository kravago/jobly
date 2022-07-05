const { BadRequestError } = require("../expressError");


// Helper function to fill in query string for update statements in sql
// Input: [Object] that contains fields to update
// Output: [Object] with two values:
//        setCols: < query string with parameterization >,
//        values: < list of values for each field to update in the order of setCols >

function sqlForPartialUpdate(dataToUpdate, jsToSql) {
  const keys = Object.keys(dataToUpdate);
  if (keys.length === 0) throw new BadRequestError("No data");

  // {firstName: 'Aliya', age: 32} => ['"first_name"=$1', '"age"=$2']
  const cols = keys.map((colName, idx) =>
      `"${jsToSql[colName] || colName}"=$${idx + 1}`,
  );

  return {
    setCols: cols.join(", "),
    values: Object.values(dataToUpdate),
  };
}

module.exports = { sqlForPartialUpdate };
