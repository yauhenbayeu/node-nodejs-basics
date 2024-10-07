const parseEnv = () => {
  let outputRow = "";
  const envData = process.env;

  Object.keys(envData).forEach((key) => {
    outputRow += `RSS_${key}:${envData[key]}; `;
  });
  console.log(outputRow);
};

parseEnv();
