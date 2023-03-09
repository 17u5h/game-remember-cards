const { it, describe, expect } = require('@jest/globals')
const { createDeck } = require('./src/initSetAndSupport')
// const { shuffleDeckAndPushCard } = require('./src/renderPlayScreen')

describe('output data of createDeck function from initAndSupport.ts', () => {
  it('should have set length', function () {
    const length = 4

    const deck = createDeck(length)

    expect(deck).toHaveLength(4)
  })

  it('should match arrays in array', function () {
    const length = 2
    const expected = [
      ['2', '10'],
      ['2', '10'],
    ]
    const mockMath = Object.create(global.Math)
    mockMath.random = () => 0.5
    global.Math = mockMath

    const deck = createDeck(length)

    expect(deck).toEqual(expected)
  })

  it('should throw error when difficulty is odd', function () {
    const difficulty = 3

    const expected = () => {
      createDeck(difficulty)
    }

    expect(expected).toThrowError(
      new Error(
        'Сгенерированно нечетное количество карт. Невозможно начать игру'
      )
    )
  })
})

// describe('output data of shuffleDeckAndPushCard function from renderPlayScreen.ts', () => {
//   it('should match array', function () {
//     const expected = [2, 10]
//     const mockMath = Object.create(global.Math)
//     mockMath.random = () => 0.5
//     global.Math = mockMath
//
//     const array = shuffleDeckAndPushCard()
//
//     expect(array).toEqual(expected)
//   })
// })
