ejs-transform-loader
====================

A webpack loader for compiling ejs style files at build time.

```bash
npm install ejs-transform-loader
```


```javascript
// webpack.config.js
module.exports = {
  module: {
    rules: [
      {
        test: /\.ejs$/,
        loader: `ejs-transform-loader`,
        options: {
          data: { testFiles: process.env.TEST_FILES }
        }
      },
    ],
  },
}
```

```ejs
// some-file.ejs
const testFiles = [ <%= testFiles %> ];
```
