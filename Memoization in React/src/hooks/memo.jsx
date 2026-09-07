function ExpensiveSquare({ num }) {
  function calculateSquare(n) {
    console.log("calculating square...")
    return n*n
  }
  const squared = calculateSquare(num)
  return(
    <p>
      Square of {num}: {squared}
    </p>
  )
}

export default ExpensiveSquare;