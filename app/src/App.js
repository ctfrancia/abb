import React, { useEffect, useState } from 'react';
// import logo from './logo.svg';
import './App.css';
import Control from"./components/Control"
import { getFeatureData } from "./utils/api"

function App() {
  const [data, setData] = useState({ measurements: [] })
  let status

  useEffect(() => {
      const fetchData = async () => {
        const featureData = await getFeatureData()
        if (featureData.err !== null) {
          console.error("something went wrong with fetching data, check server is running", featureData.err)
          return
        }

        console.log("feature data.data", featureData.data)
        setData({measurements: featureData.data})
      }

      fetchData()
      console.log("DATA", data)
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  data.measurements.forEach(item => {
    if (item.status === "error") {
      status = "error"
    } else if (item.status === "caution") {
      status = "caution"
    } else {
      status = "good"
    }
  })
  return (
    <div className="app-container">
      <div className="header">
        <p className="feature-name"> Feature's Name</p>
      </div>
      <div className="labels">
        <p> Control </p>
        <p> Dev </p>
        <p> Dev Out Tot </p>
        <p> status </p>
      </div>
        {data.measurements.map((m, i) => (
          <Control key={i} measurements={m}/>
        ))}
      </div>
  )
}

export default App;
