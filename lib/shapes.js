class Logo {
	constructor(text, shapeColor, textColor) {
		;(this.text = text),
			(this.shapeColor = shapeColor),
			(this.textColor = textColor)
	}
}

class Circle extends Logo {
	constructor(text, shapeColor, textColor) {
		super(text, shapeColor, textColor)
	}

	generateCircle(text, shapeColor, textColor) {
		return `<svg version="1.1"
     width="300" height="200"
     xmlns="http://www.w3.org/2000/svg">
    <circle cx="150" cy="107" r="80" fill="${shapeColor}" />
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>

    </svg>`
	}

	render() {
		return `circle cx="150" cy="100" r="80" fill="${shapeColor}" />
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>`
	}
}

class Square extends Logo {
	constructor(text, shapeColor, textColor) {
		super(text, shapeColor, textColor)
	}

	generateSquare(text, shapeColor, textColor) {
		return `<svg version="1.1"
     width="300" height="200"
     xmlns="http://www.w3.org/2000/svg">
    <rect x="74" y="33" width="150" height="150" fill="${shapeColor}"/>
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>

    </svg>`
	}

	render() {
		return `<rect x="10" y="10" width="30" height="30" fill="${shapeColor}"/>
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>`
	}
}

class Triangle extends Logo {
	constructor(text, shapeColor, textColor) {
		super(text, shapeColor, textColor)
	}

	generateTriangle(text, shapeColor, textColor) {
		return `<svg version="1.1"
     width="300" height="200"
     xmlns="http://www.w3.org/2000/svg">
    <polygon points="150,20 30,150 270,150" fill="${shapeColor}"/>
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>

    </svg>`
	}

	render() {
        return `<polygon points="200,10 250,190 160,210" fill="${shapeColor}"" />
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>`
	}
}



module.exports = { 
    Circle,
    Square,
    Triangle
 }
