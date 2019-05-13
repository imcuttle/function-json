/**
 * Make function to be serializable
 * @author imcuttle
 */

const PREFIX = 'FUNCTION: '

function stringify(obj, replacer, space, { jsonStringify = JSON.stringify } = {}) {
  return jsonStringify(
    obj,
    (key, value) => {
      // if we get a function, give us the code for that function
      if (typeof value === 'function') {
        return `${PREFIX}${value.toString()}`
      }
      return replacer ? replacer(key, value) : value
    },
    space
  )
}

function parse(text, reviver, { jsonParse = JSON.parse } = {}) {
  return jsonParse(text, (key, value) => {
    if (typeof value === 'string' && value.indexOf(PREFIX) === 0) {
      value = value.substring(PREFIX.length)
      let functionTemplate = `(${value})`
      return eval(functionTemplate)
    }
    return reviver ? reviver(key, value) : value
  })
}

module.exports = {
  parse,
  stringify
}
