Object.defineProperty(exports, "__esModule", {
  value: true
});


// 1993 Park-Miller LCG
// https://gist.github.com/blixt/f17b47c62508be59987b

const LCG = s => {
  return () => {
    s = Math.imul(48271, s) | 0 % 2147483647;
    return (s & 2147483647) / 2147483648;
  };
};

// export default LCG;
exports.default = LCG;
