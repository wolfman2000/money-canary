function SimpleRngFactory() {
  // thank http://stackoverflow.com/a/19301306
  var mask = 0xffffffff,
    seed = 123456789,
    misc = 987654321;

  function setSeed(intNumber) {
    seed = intNumber;
  }

  function random() {
    misc = (36969 * (misc & 65535) + (misc >> 16)) & mask;
    seed = (18000 * (seed & 65535) + (seed >> 16)) & mask;
    var result = ((misc << 16) + seed) & mask;
    result /= 4294967296;
    return result + 0.5;
  }

  return {
    seed: setSeed,
    random: random
  };
}