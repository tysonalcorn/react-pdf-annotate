const reactComponents = require('@neutrinojs/react-components');
const mocha = require('@neutrinojs/mocha');

module.exports = {
  options: {
    root: __dirname,
  },
  use: [
    reactComponents(),
    mocha(),
  ],
};
