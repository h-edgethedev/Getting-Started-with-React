import { useState, useEffect } from 'react'
import './App.css'


function FetchData() {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [displayedImagesArr, setDisplayedImageArr] = useState([])
  useEffect(() => {
    fetch("https://dog.ceo/api/breed/german/shepherd/images")
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        setLoading(false)
        console.log(data)
        setDisplayedImageArr(data.message.slice(0, 10))
        console.log("done")
        console.log(displayedImagesArr)
      })
      .catch((error) => {
        setError(error)
        setLoading(false)
      })
  }, [])

  if(loading){
    return(
      <p>Loading...</p>
    )
  }
  if (error){
    return <p>{error.message}</p>
  }
  return (
    <>
      <h1>Dog info</h1>
      <div>
        {
          displayedImagesArr.map((image, index) => (
            <img src={image} width={"500px"} height={"400px"} key={index} />
          ))
        }
      </div>
    </>
  )
}

export default FetchData;
