const Marquee = require('../src/marquee.js')

describe('Marquee Validation', () => {
    it('should fail if a prop is missing', async () => {
        try {
            new Marquee({
                element: '#test'
                // velocity is missing
            })
        } catch (e) {
            expect(e instanceof TypeError).toBe(true);
        }

        try {
            new Marquee({
                // element is missing
                velocity: 1
            })
        } catch (e) {
            expect(e instanceof TypeError).toBe(true);
        }
    })

    it('should fail if a prop type is not valid', async () => {
        try {
            new Marquee({
                element: '#test',
                velocity: 'not a number'
            })
        } catch (e) {
            expect(e instanceof TypeError).toBe(true);
        }

        try {
            new Marquee({
                element: ['not a string'],
                velocity: 1
            })
        } catch (e) {
            expect(e instanceof TypeError).toBe(true);
        }
    })

    it('should run if html content is correct', async () => {
        document.body.innerHTML = `<div id="test"><div>content</div></div>`

        const m = new Marquee({
            element: '#test',
            velocity: 1
        })

        m.run()
    })

    it('should fail if html content is incorrect', async () => {
        document.body.innerHTML = `<div id="test">missing child element</div>`

        try {
            const m = new Marquee({
                element: '#test',
                velocity: 1
            })

            m.run()
        } catch (e) {
            expect(e.message === `Cannot read property 'style' of null`).toBe(true);
        }
    })
});
