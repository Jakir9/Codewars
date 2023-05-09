function sumMix(x) {
  let total = 0;

  x.forEach((item) => {
    if (item.valueOf() !== "integer") {
      total += parseInt(item);
    } else {
      total += item;
    }
  });

  return total;
}
