module.exports = {
  extends: ['@commitlint/config-conventional'],
  plugins: ['commitlint-plugin-function-rules'],
  rules: {
    'type-empty': [0],
    'subject-empty': [0],
    'type-enum': [0],
    'function-rules/type-enum': [
      2,
      'always',
      parsed => {
        if (!parsed.header.match(/^\[:.+:.+]/)) {
          return [false, `🤪 Your commit has to be done with cz-emoji-azot for this project\nnpm i -g cz-emoji-azot`]
        }
        if (!parsed.header.match(/^\[:.+:.+].+/)) {
          return [false, `🤭 You must provide at least a short description`]
        }
        return [true]
      }
    ]
  }
}