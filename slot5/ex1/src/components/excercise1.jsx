export function Excercise1() {
  const double = x=>x*2;
  const islane = x => x>0;
    const sum = (...nums) =>
    nums.filter(x => typeof x === "number" && !isNaN(x)).reduce((a, b) => a + b, 0);
  const avg = (...nums) => {
    const valid = nums.filter(x => typeof x === "number" && !isNaN(x));
    if (valid.length === 0) return 0;
    return (valid.reduce((a, b) => a + b, 0) / valid.length).toFixed(2);
  };

  const person = {
    name: "Ann",
    address: {
      street: "123 Main St"
    }
  };
  const { address: { street, city =  "Unknown City" } } = person;
    return (
    <>
      <h1>Excercise 1</h1>
      <p>This is the first exercise component.</p>
      <p>Hàm double(5) : {double(5)}</p>
      <p>Số 5 là: {islane(5) ?"số dương": "số âm"}   </p>
      <hr />
      <p>sum(1,2,3): {sum(1,2,3)}</p>
      <p>sum(1,'x',4): {sum(1,'x',4)}</p>
      <p>avg(1,2,3,4): {avg(1,2,3,4)}</p>
      <p>avg(): {avg()}</p>
      <hr />
      <p>street: {street}</p>
      <p>city: {city}</p>
    </>
  );
}