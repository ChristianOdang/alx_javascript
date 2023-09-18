
class Rectangle {
    constructor(w, h) {
        if (w > 0) {
            this.width = w
        }
        if (h > 0) {
            this.height = h
        }
    }

    print() {
        let str = ''
        for (let i = 0; i < this.height; i++) {
            str += 'X'.repeat(this.width) + '\n'
        }
        console.log(str.slice(0, -1))
    }

    rotate() {
        const tmp = this.width
        this.width = this.height
        this.height = tmp
    }

    double() {
        this.width *= 2
        this.height *= 2
    }
}

module.exports = Rectangle
