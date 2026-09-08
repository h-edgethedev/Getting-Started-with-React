import { useMemo } from "react";

function ExpensiveSquare({ num, timer }) {
  console.log("ExpensiveSquare rendered");

  function calculateSquare(n) {
    console.log("Calculating square...");
    return n * n;
  }

  const squared = useMemo(() => calculateSquare(num), [num]);

  return (
    <p>
      Square of {num}: {squared}
    </p>
  );
}
export default ExpensiveSquare;