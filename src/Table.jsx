import React from "react";
import "./table.css"


function Table(props){
    return(
        <div className="table">



      {props.countries.map(country=> <tr>
                  <td>{country.country}</td>
                  <td>{country.cases}</td>

              </tr>)};
              
              
          
        </div>
        
    )
}
export default Table;