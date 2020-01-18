export default class Marquee {
    constructor(props) {
        this.validate(props)
        this.props = props
        this.setElement()
        this.setChild()
    }

    setElement() {
        this.element = document.querySelector(this.props.element)
        // this.element.style.overflow = 'hidden'
    }

    validate(props) {
        [
            { name: 'element', type: '' },
            { name: 'velocity', type: 0 }
        ].forEach((valid) => {
            if (!props[valid.name] || typeof props[valid.name] !== typeof valid.type) {
                throw `"${valid.name}" property is mandatory and must be a type of "${typeof valid.type}"`
            }
        })
    }

    setChild() {
        this.child = this.element.firstElementChild
        // this.child.style.display = 'inline-flex'
        // this.child.style.position = 'relative'
        this.child.style.right = '-' + this.element.offsetWidth + 'px';
    }

    run() {
        // console.log('run? ' + (new Date()).getTime())
        let rightPosition = parseFloat(this.child.style.right);
        rightPosition += this.props.velocity

        let parentOffsetWidth = this.element.offsetWidth
        let childOffsetWidth = this.child.offsetWidth

        if (rightPosition > childOffsetWidth) {
            rightPosition = -parentOffsetWidth;
        }

        if (null === this.element.querySelector(':hover')) {
            this.child.style.right = rightPosition + 'px'
        }

        requestAnimationFrame(this.run.bind(this));
    }
}
