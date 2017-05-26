# eslint-config-binded

Base ESLint configuration for Binded JavaScript projects.

This is a slightly customised version of
[eslint-config-airbnb](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb).

It also includes all necessary dependencies instead of specifying them
as peerDependencies.

## Usage

```
npm install --save-dev eslint-config-binded-browser
```

.eslintrc
```
{
  "extends": "binded-browser"
}
```
