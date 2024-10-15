import { useState } from "react";
import Card from "./card";

let person = {
    name: "OwO",
    last: "OwO2",
    age: 25,
    city: "New York",
} 
const [newAge, setAge] = useState(person.age) 

 const modificar = () => {
    console.log('owo');
    setAge(0);
}

function OwO () {

return(
    <>
  
  
        <h1>OwO</h1>
        <Card person = {{... person, age: newAge }} modificar= {modificar}></Card>
    </>
)

}
export default OwO;