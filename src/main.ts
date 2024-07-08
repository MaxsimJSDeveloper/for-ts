import "./style.css";

function countProps(object: any): number {
  let propCount: number = 0;
  const keys = Object.keys(object);
  const values = [];

  for (let key of keys) {
    values.push(object[key]);
    console.log(values);
    propCount += 1;
  }

  console.log(propCount);

  return propCount;
}

countProps({});
countProps({ name: "Mango", age: 2 });
countProps({ mail: "poly@mail.com", isOnline: true, score: 500 });
