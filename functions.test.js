const {
    returnTwo, 
    greeting, 
    add,
} = require('./functions')

test('should return 2', () => {
    expect(returnTwo()).toEqual(2);
});

describe('greetings test', () => {
    test('should return name in greeting', () => {
        expect(greeting('James')).toEqual('Hello, James.');
    });
    test('should return name in greeting', () => {
        expect(greeting('Jill')).toEqual('Hello, Jill.');
    });

});

describe('add tests', () => {
    test('shoud return 3', () => {
        expect(add(1,2)).toEqual(3);
    });
    test('shoud return 3', () => {
        expect(add(5,9)).toEqual(14);
    });
        
})