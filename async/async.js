getData();

async function getData() {
  const response = await fetch(
    "https://datausa.io/api/data?drilldowns=Nation&measures=Population"
  );
  console.log(response);
  console.log(data);
  length = data.data.length;
  //          console.log(length);

  labels = [];
  values = [];
  for (i = 0; i < length; i++) {
    labels.push(data.data[i].Year);
    values.push(data.data[i].Population);
  }
}
