import React, { useEffect, useState } from 'react';
// import logo from './logo.svg';
import './App.css';
import Control from"./components/Control"
import { getFeatureData } from "./utils/api"

function App() {
  const [data, setData] = useState({ measurements: [] })
  let featureName

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
  return (
    <div className="app-container">
      <div className="header">
        <p> Control </p>
        <p> Dev </p>
        <p> Dev Out Tot </p>
      </div>
      <div className={featureName}>
        {data.measurements.map((m, i) => ( 
          <Control key={i} feature={m} />
        ))}
      </div>
    </div>
  )
}

export default App;
