import { useState } from "react";
import Swal from "sweetalert2";
import Field from "../molecules/Field";
import Button from "../atoms/Button";
import './SectionForm.css'
import { Student } from "../../data/Student";
import studentList from "../../data/Dependencies";

function SectionForm() {
    const [nombreAlumno, setnombreAlumnos] = useState('')
    const [apellidos, setapellidos] = useState('')
    const [email, setemail]= useState ('')
    const [fechaNacimiento, setfechaNacimiento] = useState('')
    const [tutor, settutor] = useState('')
    const [numeroTutor, setnumeroTutor] = useState ('')

    const handlerClick = (event) => {
        Swal.fire({
            title: "Exito!",
            text:  "Alumno creado",
            footer: ` ${nombreAlumno}  ${apellidos}`,
            imageUrl: "https://www.svgrepo.com/show/493719/react-javascript-js-framework-facebook.svg",
            imageHeight: 250,
            imageAlt: "React Image"
        });
        let student = new Student 
        student.funciona()
        student.setStudname(nombreAlumno)
        student.setStudlastname(apellidos)
        student.setStudemail(email)
        student.setStudbirthday(fechaNacimiento)
        student.setStudTutor(tutor)
        student.setStudTutorcontact(numeroTutor)
        console.log("se creo un estudiante: "+student.getStudname())
        studentList.addElement(student)
    }


    return (
        <div id="login_section">
            <Field type="text" placeholder="ej. Daniela" text="Nombre del Alumno (a)" val= {nombreAlumno} fnVal={setnombreAlumnos}/>
            <Field type="text" placeholder="ej. De la Cruz Jimenez" text="Apellidos" val= {apellidos} fnVal={setapellidos}/>
            <Field type="email" placeholder="ejemplo@gmail.com" text="email" val={email} fnVal={setemail}/>
            <Field type="date" placeholder="16/07/2024" text="Fecha de nacimiento" val= {fechaNacimiento} fnVal={setfechaNacimiento}/>
            <Field type="text" placeholder="ej. Antonio de la Cruz" text="Nombre del tutor (a)" val={tutor} fnVal={settutor}/>
            <Field type="number" placeholder="ej. 9612767861" text="Numero telefónicp del tutor" val={numeroTutor} fnVal={setnumeroTutor}/>

            <Button type="submit" title="Crear Alumno" onclick={handlerClick}/>
        </div> 
     );
}

export default SectionForm;