let postamat = [null, null, null, "1432HGF", null];
let balance = 500;
let price = 100;
let codeBase = "A001DFX0";

let smsCode = "A001DFX0";
let packageId = "1432HGF";

function givePackage(smsCode, codeBase, balance, price, postamat, packageId) {
  if (smsCode === codeBase) {
    console.log(
      `Заберите посылку ${packageId} из ячейки №${postamat.indexOf(packageId) + 1}. 
      Ваш счет составляет: ${balance - price}ед.`
    );
  } else {
    console.log("Error. Unable to get a package.");
  }
}

givePackage(smsCode, codeBase, balance, price, postamat, packageId);
