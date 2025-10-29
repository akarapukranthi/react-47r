import { Component } from "react";
import { StudentProfileCard } from "./components/student";
import Profile1 from "./assets/images/student2.jpeg";
import Profile2 from "./assets/images/student3.jpeg";

  export class App extends Component {
  render() {
    return (
      <div style={{alignItems:"center"}}>
        <h2>Student Data</h2>
        
        <StudentProfileCard name="kranthi" class="BTech-CSE" rollno="1243561872" imgUrl={Profile1}/>
        <StudentProfileCard name="rakesh" class="BTech-ECE" rollno="2103243515" imgUrl={Profile2}/>

      </div>
    )
  }
}