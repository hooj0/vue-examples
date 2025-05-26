// https://cn.vitest.dev/api/expect.html
// https://cn.vitest.dev/api/assert.html
import { expect, test, describe } from 'vitest'

const sum = (a, b) => a + b;

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3)
});

test('should work as expected', () => {
    expect(Math.sqrt(4)).toBe(2)
});

test('这是一个测试', () => {
    console.log('这是一个测试，xxxx');
});

const person = {
    isActive: true,
    age: 32,
}

describe('person', () => {
    test('person is defined', () => {
        expect(person).toBeDefined()
    })

    test('is active', () => {
        expect(person.isActive).toBeTruthy()
    })

    test('age limit', () => {
        expect(person.age).toBeLessThanOrEqual(32)
    })
})