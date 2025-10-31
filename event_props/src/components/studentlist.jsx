import { Component } from "react";

export class StudentList extends Component {

    render(){
        return <div>
             <table>
                <th>ID</th>
                <th>Name</th>
                <th>Grade</th>
             </table>
             <table>
             <td>{this.props.students.map((value,index)=>(<tr key={index}>{value.id}</tr>))}</td>
             <td>{this.props.students.map((value,index)=>(<tr key={index}>{value.name}</tr>))}</td>
             <td>{this.props.students.map((value,index)=>(<tr key={index}>{value.grade}</tr>))}</td>
             </table>
        </div>
    }
}


