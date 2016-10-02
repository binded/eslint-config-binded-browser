module.exports = {
  extends: 'airbnb',
  parser: 'babel-eslint',
  rules: {
    'consistent-return': 0,
    'no-param-reassign': [2, { props: false }],
    semi: [2, 'never'],
    camelcase: 0,
    'no-underscore-dangle': 0,
  },
}
