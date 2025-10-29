import { Component } from "react";
// import profileimg from "../assets/images/student2.jpeg";

export class StudentProfileCard extends Component {
  render() {
    console.log(this.props);
    return (
        <div style={{border: "1px solid black", width :"14rem",height:"20rem",borderRadius:"5%",backgroundColor:"skyblue",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
            <p>student identity card</p>
            <img src={this.props.imgUrl} height={200} width={100} style={{borderRadius:10}}/>
            <h4 style={{margin:0}}>{this.props.name}</h4>
            <p style={{margin:0}}>{this.props.class}</p>
            <p style={{margin:0}}>{this.props.rollno}</p>
        </div>
    )

  }


}
