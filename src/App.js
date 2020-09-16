import React from 'react';
import {useState,useEffect} from "react"
import "react-bootstrap"
import { Container } from 'react-bootstrap';
import "./App.css"
import ChartView from "./ChartView"
import tamilNadu from "./topoJSON"
import { ComposableMap, Geographies, Geography,Marker } from 'react-simple-maps';

function App() {

    const [Hidden,changeHidden] = useState("hidden") 
    const [dynCity,changedynCity] = useState("") 
    const [city,changeCity] = useState("")  
    const [count,changeCount] = useState("")
    useEffect(()=>{
    const url = "http://localhost/json.php";
    fetch(url)
    .then(response => response.json())
    .then(data1 => {
          
       changeCity(Object.keys(data1))
       changeCount(Object.values(data1))
  
  })},[])

    function cityName(elem){

        changeHidden("cases");
        changedynCity(elem.target.attributes.id.nodeValue)
   

    }
    const PROJECTION_CONFIG = {
        scale: 2000,
        center: [78.9629, 22.5937]
    };
    const markers = [
        {
          markerOffset: -5,
          name: city[0],
          coordinates: [-1000.75,11.20]
        },
        { markerOffset:7, name:city[1] , coordinates: [-1000.01,12.5] },
        { markerOffset: 5, name: city[2], coordinates: [-999.81, 13] },
        { markerOffset: -5, name: city[3], coordinates: [-1003.05, 11] },
        { markerOffset: -5, name: city[4], coordinates: [-1000.4, 11.54] },
        { markerOffset: -5, name: city[5], coordinates: [-1002.2, 10.38] },
        { markerOffset: -5, name:city[6], coordinates: [-1002.6, 11.5] },
        { markerOffset: -5, name:city[7], coordinates: [-1000.96, 11.84] },
        { markerOffset: 8.2, name: city[8], coordinates: [-1000.17,12.86] },
        { markerOffset: -5, name:city[9], coordinates: [-1001.8, 10.9] },
        { markerOffset: -5, name:city[10], coordinates: [-1002.1, 9.9] },
        { markerOffset:10, name:city[11], coordinates: [-1000.2,10.7] },
        {
            markerOffset: -5,
            name: city[12],
            coordinates: [-1001.8, 11.35]
          },
          { markerOffset: -5, name:city[13] , coordinates: [-1001.15,11.3] },
          { markerOffset: -5, name: city[14], coordinates: [-1001.2, 10.38] },
          { markerOffset: -5, name: city[15], coordinates: [-1001.4,9.3] },
          { markerOffset: -5, name: city[16], coordinates: [-1000.55,12.99] },
          { markerOffset: -5, name: city[17], coordinates: [-1001.7, 11.7] },
          { markerOffset: -5, name:city[18], coordinates: [-1001.43, 9.9] },
          { markerOffset: -5, name:city[19], coordinates: [-1002.5, 9.1] },
          { markerOffset: -5, name: city[20], coordinates: [-1000.82,10.8] },
          { markerOffset: -5, name:city[21], coordinates: [-1002.5, 9.9] },
          { markerOffset: -5, name:city[22], coordinates: [-999.9,13.3] },
          { markerOffset: -5, name:city[23], coordinates: [-1000.5,10.7] },
          {
            markerOffset: -5,
            name: city[24],
            coordinates: [-1002, 8.9]
          },
          { markerOffset: -5, name:city[25] , coordinates: [-1001.3, 10.99] },
          { markerOffset: -5, name: city[26], coordinates: [-1002.4, 8.6] },
          { markerOffset: -5, name: city[27], coordinates: [-1001.35,12.55] },
          { markerOffset: 6, name: city[28], coordinates: [-1002.5, 11] },
          { markerOffset: 6, name: city[29], coordinates: [-1001,12.5] },
          { markerOffset: -5, name:city[30], coordinates: [-1001,12.9] },
          { markerOffset: -3, name:city[31], coordinates: [-1000.5,12.1] },
          { markerOffset: -5, name: city[32], coordinates: [-1002.1, 9.5] },
          { markerOffset: -5, name:city[33], coordinates: [-1001.7, 12.1] },
          { markerOffset: 6, name:city[34], coordinates: [-1002.6, 8.3] },
          { markerOffset: -5, name:city[35], coordinates: [-1003.35, 11.45] },
          { markerOffset: -5, name: city[36], coordinates: [-1002, 12.6] },
      ];
    
    return(

    <div>
        <Container className="container1">

            
            <h1>Active Corono cases in Tamilnadu daily district wise</h1>


        </Container>
        <div className="bar-graph">
            <ChartView city={city} count={count} />
            
        </div>
        <div className="heading">
            <h2 className="h1-map">Tamilnadu Active Corono cases</h2>
        </div> 
        <div className={Hidden}>
            <span className="city">{dynCity}</span>
            <br></br>
            <span className="count">Active-Cases:{count[city.indexOf(dynCity)]}</span>
        </div>
           
        <ComposableMap
            projectionConfig={PROJECTION_CONFIG}
            projection="geoMercator"
            viewBox="100 600 600 2000"
            data-tip=""
            style={{position:"sticky"}}
            >
            <Geographies geography={tamilNadu}>
                {({geographies}) => geographies.map(geo => (
                <Geography
                    geography={ geo }
                    stroke="#FFF"    
                    style={{
                        default: {
                          fill: "lightblue",
                          outline: "none"
                        },
                        hover: {
                          fill: "#F53",
                          outline: "none",
                          cursor:"pointer"
                          
                        },
                        pressed: {
                          fill: "#E42",
                          outline: "none"
                        }
                        
                    }}
                    
                    
                    />
                ))}
            </Geographies>
            {markers.map( items => (
                    <Marker key={items.name} coordinates={items.coordinates}  >
                        
                        <circle r={2} fill="#F00" stroke="#fff" strokeWidth={1} id={items.name} style={{cursor:"pointer"}} onClick={cityName}/>
                        
                        <text
                            textAnchor="middle"
                            y={items.markerOffset}
                            style={{ fontFamily: "system-ui", fill: "#5D5A6D",fontSize:"4.2px"}}
                        >
                            {items.name}
                        </text>
              
                    </Marker>
                ))}
        </ComposableMap>
      
  );
    </div>
    

    )
  
}

export default App
