// Importing other modules
const inquirer = require('inquirer')
const fs = require('fs')
const { Circle, Triangle, Square } = require('./lib/shapes')

// Inquirer prompts for user to decide what logo to generate
inquirer
	.prompt([
		// User is asked to decide the shape of the logo
		{
			type: 'list',
			name: 'shape',
			message: 'Please choose the shape of your logo from the options',
			choices: ['Circle', 'Triangle', 'Square'],
		},
		// User is asked to choose the text for the logo with a maximum of 3 characters.
		{
			type: 'input',
			name: 'text',
			message: 'Please input up to 3 characters for your logo',
			validate: function (input) {
				const length = input.length <= 3
				if (!length) {
					return 'Please choose upto 3 characters'
				}
				return true
			},
		},
		// User is asked what color the text should be
		{
			type: 'input',
			name: 'textColor',
			message:
				'Please enter the color you want for your text. Example: Color keyword (blue, white, or red) or using the hexadecimal number (#0000FF, #FFFFFF, or #FF0000)',
            validate: function (input) {
                const length = input.length > 0;
                if (!length) {
                    return 'Please choose a valid color'
                }
                return true;
            }    
		},
        // User is asked what color the shape of their logo should be
        {
			type: 'input',
			name: 'shapeColor',
			message:
				'Please enter the color you want for your shape. Example: Color keyword (blue, white, or red) or using the hexadecimal number (#0000FF, #FFFFFF, or #FF0000)',
            validate: function (input) {
                const length = input.length > 0;
                if (!length) {
                    return 'Please choose a valid color'
                }
                return true;
            }    
        }
	])
	.then((answers) => {
        let svg;
        if (answers.shape === 'Circle') {
            svg = new Circle(answers.text, answers.shapeColor, answers.textColor).generateCircle()
        } else if (answers.shape === 'Triangle') {
            svg = new Triangle(answers.text, answers.shapeColor, answers.textColor).generateTriangle()
        } else if (answers.shape === 'Square') {
            svg = new Square(answers.text, answers.shapeColor, answers.textColor).generateSquare()
        }
        return svg;
	})
    .then((svg) => {
    // this write the files based on the answers 
    fs.writeFile('./examples/logo.svg', svg, (err) =>
    err ? console.error(err) : console.log('Generated logo.svg!')
    )
    })
	.catch((error) => {
        console.error(error);
	})

