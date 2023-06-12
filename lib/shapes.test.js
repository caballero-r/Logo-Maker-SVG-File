// Importing Module
const { Circle, Triangle, Square } = require('./shapes');

// Testing Circle Render
describe('Circle', () => {
    // This test to see if the input of the text, shapeColor, and textColor are in fact rendered the correctly in our generated circle
    it('Should render the Circle shape with the following: text = TXT, shapeColor = blue, textColor= white', () => {
        const shape = new Circle('TXT', 'blue', 'white');
        const product = `<circle cx="150" cy="100" r="80" fill="blue" />
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">TXT</text>`;
        expect(shape.render()).toEqual(product)
    })
})

// Testing Triangle Render
describe('Triangle', () => {
    // This test to see if the input of the text, shapeColor, and textColor are in fact rendered the correctly in our generated triangle
    it('Should render the Triangle shape with the following: text = SOS, shapeColor = green, textColor= yellow', () => {
        const shape = new Triangle('SOS', 'green', 'yellow');
        const product = `<polygon points="200,10 250,190 160,210" fill="green" />
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="yellow">SOS</text>`;
        expect(shape.render()).toEqual(product)
    })
})

// Testing Square Render
describe('Square', () => {
    // This test to see if the input of the text, shapeColor, and textColor are in fact rendered the correctly in our generated Square
    it('Should render the Square shape with the following: text = SOS, shapeColor = green, textColor= yellow', () => {
        const shape = new Square('POP', 'red', 'black');
        const product =`<rect x="10" y="10" width="30" height="30" fill="red"/>
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="black">POP</text>`;
        expect(shape.render()).toEqual(product)
    })
})