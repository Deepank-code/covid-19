import { Card, CardContent, Typography } from "@material-ui/core";
import React from "react";
import "./Card.css";
const istrue=true;
// 
function Infoboxes(props){
  return <>
  <Card className="card" >
  <CardContent >
  <Typography className="secheading" color="primary" variant="h5" >
   {props.heading}
     </Typography>
 <h2 className= {istrue ?"cases":null}>{props.cases}</h2>
  <Typography className="total" color="#9c27b0">
   Total   {props.total}
  </Typography>
  </CardContent>

  </Card>
  
  </>

}
export default Infoboxes;