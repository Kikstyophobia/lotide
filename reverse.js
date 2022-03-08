const args = process.argv;

const reverse = function(words) {
  let empty = "";
  for (let i = words.length-1; i > -1; i--) {
    empty += words[i];
  }
  return empty;
};


for (let j = 2; j < args.length; j++) {
  console.log(reverse(args[j]));
}