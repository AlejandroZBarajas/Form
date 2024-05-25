import { useState } from "react";
import Swal from "sweetalert2";
import Button from "../atoms/Button";
import { Student } from "../../data/Student";
import studentList from "../../data/Dependencies";
import Output from "../atoms/Output";
import { auxArray } from "../../data/Dependencies";
import StudentCard from "../molecules/StudentCards";
import './StudentListSection'

function StudentListSection(){

    
        let current = studentList.getTail()
        for(let i=0; i<studentList.getSize();i++){          
            auxArray.push(current)
            current=current.getPrevious()          
        }



    
    return(
        <div id="cardContainter">
            {
                auxArray.students.map(student=><StudentCard names={student.names} lastname={student.lastname} mail={student.mail} bday={student.bday} tutor={student.tutor} tutornum={student.tutornum}></StudentCard>)
            }
        </div>
    )



}

export default StudentListSection


