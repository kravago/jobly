const { sqlForPartialUpdate } = require('./sql');

describe("helper function", function () {
    test("test output", function () {
        const u = {firstName: "test", lastName: "user"}
        const columnMapping = {firstName: 'first_name', lastName: 'last_name'}
        const result = sqlForPartialUpdate(u, columnMapping);
        expect(result).toEqual({
            setCols: '"first_name"=$1, "last_name"=$2',
            values: [ 'test', 'user' ]
          })
    })
})