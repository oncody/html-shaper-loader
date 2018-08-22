// import * as formatter from './formatter';
const fs = require('fs');
const htmlShaper = require('html-shaper');

module.exports = function(source) {
// export default function(source) {
  const formattedSource = htmlShaper.formatHtml(source);
  fs.writeFile(this.resourcePath, formattedSource);
  return formattedSource;
};

// module.exports = function(content, map, meta) {
//   var callback = this.async();
//   someAsyncOperation(content, function(err, result) {
//     if (err) {
//       return callback(err);
//     }
//
//     callback(null, result, map, meta);
//   });
// };
