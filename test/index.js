const noop = () => {}
const { a, ...rest } = { a: 1, b: 2, c: 3 }
noop(a)
noop(rest)
