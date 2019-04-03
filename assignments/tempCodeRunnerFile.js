let combineName = (function () {
  let fName = "Robert";
  return function () {let lName="Pedersen"; let fullName = `${fName} ${lName}`; return fullName}
})();