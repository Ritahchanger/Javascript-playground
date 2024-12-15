// substract the product and sum of digits of an integer

var substractProductAndSum = function (n) {
  let nArray = n.toString().split("");

  let sum = 0;

  let product = 1;

  for (let i = 0; i < nArray.length; i++) {
    sum += parseInt(nArray[i]);

    product *= parseInt(nArray[i]);
  }

  console.log(`The difference is ${product - sum}`);
};

substractProductAndSum(234);
