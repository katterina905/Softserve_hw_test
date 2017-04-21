QUnit.test( "toString", function( assert ) {
   var result = toString('Nik');
    assert.ok(result, 'Passed!')
});

QUnit.test( "toString", function( assert ) {
    var result = toString(14);
    assert.equal(result, false, 'Passed!')
});

QUnit.test( "toString", function( assert ) {
    var result = toString(false);
    assert.equal(result, false, 'Passed!')
});

QUnit.test( "calculator", function( assert ) {
    var result = calculator(2,1,2);
    assert.equal(result, 5, 'Passed!')
});

QUnit.test( "createString", function( assert ) {
    var result = createString(9,8,9);
    assert.equal(result, '989', 'Passed!')
});

QUnit.test( "sumInString", function( assert ) {
    var result = sumInString(2,3,5);
    assert.equal(result, '55', 'Passed!')
});

QUnit.test( "sumInString", function( assert ) {
    var result = sumInString(2,3,5);
    assert.ok(result, 'Passed!')
});

QUnit.test( "findMax", function( assert ) {
    var result = findMax([2,3,5]);
    assert.equal(result, 5, 'Passed!')
});

QUnit.test( "findMin", function( assert ) {
    var result = findMin([7,1,-8,8,9]);
    assert.equal(result, 2, 'Passed!')
});

QUnit.test( "copyArr", function( assert ) {
    var result = copyArr([8,9,7,8,9,11,89,-7896]);
    assert.deepEqual(result,[8,9,7,8,9,11,89,-7896], 'Passed!');
});

QUnit.test( "findMaxArgument", function( assert ) {
    var result = findMaxArgument(5,10,1005);
    assert.equal(result, 1005, 'Passed!')
});

QUnit.test( "bond", function( assert ) {
    var result = bond('Hello','dreamboat');
    assert.ok(result, 'Passed!')
});

QUnit.test( "calculationArguments", function( assert ) {
    var result = calculationArguments('dsk58fds',false);
    assert.equal(result, 57, 'Passed!')
});

QUnit.test( "calculationArguments", function( assert ) {
    var result = calculationArguments('dsk58fds',true);
    assert.equal(result, 59, 'Passed!')
});