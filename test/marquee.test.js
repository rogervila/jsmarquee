const Marquee = require('../src/marquee.js').default

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
});
