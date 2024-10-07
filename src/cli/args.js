const parseArgs = () => {
  const args = process.argv.slice(2);

  let outputArgs = {};
  let output = "";

  for (let i = 0; i < args.length; i += 2) {
    const name = args[i].replace("--", "");
    const value = args[i + 1];
    outputArgs[name] = value;
  }

  const keys = Object.keys(outputArgs);

  Object.keys(outputArgs).forEach((key, ind) => {
    output += `${key} is ${outputArgs[key]}`;
    if (ind < keys.length - 1) {
      output += ", ";
    }
  });

  console.log(output);
};

parseArgs();
