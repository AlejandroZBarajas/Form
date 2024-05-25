import { useState } from "react";
import Swal from "sweetalert2";
import Button from "../atoms/Button";
import { Student } from "../../data/Student";
import studentList from "../../data/Dependencies";
import Output from "../atoms/Output";
import './StudentListSection'

function studentListSection(){
    return(
        <div id="cardContainter">
            {
                function setData(){
                    const alumnData=[]
                    let current = studentList.getTail()
                    for(let i=0; i<studentList.getSize();i++){
                        let alumno
                        const studentname= current.getData().getStudname()
                        let studentlastname = current.getData().getStudLastname()
                        const studmail = current.getData().getStudmail()
                        const bday = current.getData().getStudbirthday()
                        const tutor = current.getData().getStudTutor()
                        const tutornum = current.getData().getStudTutorcontact()
                        alumno
                        alumnData.push(alumno)
                        current=current.getPrevious()
                        
                    }
                    <Output></Output>
                }

            }
        </div>
    )
}

export default studentListSection


