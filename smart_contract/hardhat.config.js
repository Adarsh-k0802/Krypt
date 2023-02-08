

require('@nomiclabs/hardhat-waffle');

module.exports={
  solidity: '0.8.0',
  networks:{
    goerli:{
      url:'https://eth-goerli.g.alchemy.com/v2/Blw-GIfg9vy0RSIDMxurtQ3Yka2nZOHk',
      accounts:['64b5dfae959158a2d209ea0aaca5c36d2fdc7869257bc9a8c181129c1c4603e0'],
    },
  },
};