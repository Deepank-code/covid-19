import { FormControl, Select ,MenuItem, Card, CardContent} from "@material-ui/core";
import { getDefaultNormalizer } from "@testing-library/dom";
import React,{useEffect, useState} from "react";
import './App.css';
import  Infoboxes  from "./Infoboxes"
// import Map from "./Map";
import Table from "./Table";
import Footer from "./Footer";

function App() {
const [countries, setCountry]=useState([]);
const [country,setCountryy]=useState("worldwide");
const [countryinfo,setcountryinfo]=useState({});
const [tabledata,setTabledata]=useState([]);

useEffect(()=>{
  fetch("https://disease.sh/v3/covid-19/all")
  .then((response)=>response.json() )
   .then((data)=>{
     setcountryinfo(data);
   });
 

},[]);

 useEffect(()=>{
   const  getCountriesData=async()=>{
     await fetch("https://disease.sh/v3/covid-19/countries")
     .then((response)=>response.json())
     .then((contdata)=>{
       const countries=contdata.map((country)=>({
         name:country.country,
         value :country.countryInfo.iso2,
       }));
           setCountry(countries);
           setTabledata(contdata);
      
     });
     
   }
getCountriesData();
 },[]);

const handleChange= async (event)=>{

  const countrycode=event.target.value;
 
  const url= countrycode==="worldwide"
  ? "https://disease.sh/v3/covid-19/countries/all"
   :
   `https://disease.sh/v3/covid-19/countries/${countrycode}`
  
   await fetch(url)
   .then((response)=>response.json()) 
  .then((data)=>{
    setCountryy(countrycode)
    setcountryinfo(data);

   });
  
   

  

}
console.log(countryinfo);
  return (<>
  <div className="app">
  <div className="app_left">
    <div className="app_header">
    <div className="heading">
    <h1>Covid 19 Tracker</h1>
    </div>
    <FormControl>
      <Select className="menu" variant="outlined" value={country} onChange={handleChange} >
    <MenuItem value='worldwide'  >WorldWide</MenuItem>
     { countries.map(country=>{
       return <MenuItem className="slide" value={country.value}>{country.name}</MenuItem>
     })}


      </Select>
    </FormControl>


     
    </div>
    <div className="app_stats">
    <Infoboxes className="active" heading=" Active cases" cases={countryinfo.todayCases} total={countryinfo.cases}/>
    <Infoboxes  className="recov" heading=" Recoveries "    cases={countryinfo.todayRecovered} total={countryinfo.recovered}/>
    <Infoboxes className="death" heading="Death stats" cases={countryinfo.todayDeaths} total={countryinfo.deaths}/>
  </div> 
  {/* <Map/> */} <Footer className="footer"/>
  </div>
  <Card className="app_right">
<CardContent >
  <h2 className="tableh"> Live cases by country</h2>
  <Table countries={tabledata}/>
   <h3>WorldWide cases stats</h3>
  <div className="globe">

  </div>
  
</CardContent>
  </Card>
  
  </div>
 
    </>
  );
}

export default App;
