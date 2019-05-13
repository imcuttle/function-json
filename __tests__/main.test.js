/**
 * @file main
 * @author imcuttle
 * @date 2018/4/4
 */
const { stringify, parse } = require('../')

describe('functionJson', function() {
  it('should spec', function() {
    expect(
      stringify(() => {
        console.log('112')
      })
    ).toMatchInlineSnapshot(`"\\"FUNCTION: () => {\\\\n      console.log('112');\\\\n    }\\""`)
  })

  it('should parse', async function() {
    expect(
      parse(
        stringify(a => {
          return '1' + '23' + a
        })
      )('4')
    ).toBe('1234')

    expect(
      await parse(
        stringify({
          abc: async a => {
            return Promise.resolve('123' + a)
          }
        })
      ).abc('4')
    ).toMatchInlineSnapshot(`"1234"`)
  })
})
