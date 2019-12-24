export function CalculateUniqueOptions(options) {
  const uniqueOptions = [];

  for (let rowIndex in options) {
    let row = options[rowIndex]; // whole row

    for (let colIndex in options[rowIndex]) {
      //console.log(colIndex);
      if (options[rowIndex][colIndex] !== []) {
        let rowOptions = [...row]; // copy of whole row
        let colOptions = column(colIndex, options); // whole column
        let sqrOptions = square(rowIndex, colIndex, options); // whole square

        //console.log(`${rowIndex},${colIndex} :  ${sqrOptions}`);
        rowOptions.splice(colIndex, 1);
        colOptions.splice(rowIndex, 1);
        sqrOptions.splice((colIndex - 3 * Math.floor(colIndex / 3) + 3 * rowIndex - 9 * Math.floor(rowIndex / 3)), 1);
        //console.log(`${rowIndex},${colIndex} :  ${sqrOptions}`);

        uniqueOptions[Number(rowIndex) * 9 + Number(colIndex)] = (
          checkUniqueOptions(rowOptions, options[rowIndex][colIndex]) //needs to be array of uniqueOptions
            .concat(checkUniqueOptions(colOptions, options[rowIndex][colIndex]))
            .concat(checkUniqueOptions(sqrOptions, options[rowIndex][colIndex])).splice(0, 1)
        );

      }
      else {
        uniqueOptions[Number(rowIndex) * 9 + Number(colIndex)] = [];
      }
    }
  };
  //console.table(uniqueOptions);
  return uniqueOptions;
}

// returns array containing column values from grid at [colIndex]
function column(colIndex, options) {
  let col = [];
  for (let rowIndex in options) {
    col.push(options[rowIndex][colIndex]);
  }
  return col;
}

// returns array containing values in the square of the value at [rowIndex][colIndex]
function square(rowIndex, colIndex, options) {
  let sqrWidth = 3;
  let sqr = new Array(sqrWidth * sqrWidth).fill(0);

  let newSqr = sqr.map((val, sqrIndex) => {
    let rowId = Math.floor(sqrIndex / sqrWidth) + sqrWidth * Math.floor(rowIndex / sqrWidth);
    let colId = sqrIndex - sqrWidth * Math.floor(sqrIndex / sqrWidth) + sqrWidth * Math.floor(colIndex / sqrWidth);
    return options[rowId][colId] || 0;
  });
  return newSqr;
}

// assumes possible values are 1 - 9
function checkUniqueOptions(concatGrps, thisOptions) {
  let foundOptions = [];
  let concatAllGrps = concatGrps.reduce((prev, curr) => prev.concat(curr));

  for (let option of thisOptions) {
    if (!concatAllGrps.includes(option)) {
      foundOptions.push(option);
    }
  }
  return foundOptions;
}

export default CalculateUniqueOptions;