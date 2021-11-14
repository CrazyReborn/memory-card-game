const images = require('./images');

test('images object includes list array that consists of 10 objects', () => {
    expect(images.default.list.length).toBe(10);
})

test('first object of list array is beet and the last is tomato', () => {
    expect(images.default.list[0].name).toBe('beet');
    expect(images.default.list[images.default.list.length - 1].name).toBe('tomato');
})

test('call shuffle function on images object and check for first and last element not to be beet and tomato', () => {
    images.default.shuffle();
    expect(images.default.list[0].name).not.toBe('beet');
    expect(images.default.list[images.default.list.length - 1].name).not.toBe('tomato');
})