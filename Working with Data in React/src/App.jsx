function App(){
  return(
    <>
    <Greeting name= "Heritage" />
    <Greeting name= "Phillips" />
    <Greeting name= "Mayowa" />
    </>
  )
}

function Greeting(props){
  console.log(props)
  return <h1>Hi {props.name}!</h1>
}

export default App