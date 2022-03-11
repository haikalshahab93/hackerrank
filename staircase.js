let n = 3;

function staircase(n) {
  // Write your code here
  let output = "";
  for (let b = 0; b < n; b++) {
    for (let k = 0; k < n; k++) {
      if (b + k > n - 2) {
        output += "#";
      } else {
        output += " ";
      }
    }
    output += "\n";
  }

  console.log(output);
}

staircase(n)
