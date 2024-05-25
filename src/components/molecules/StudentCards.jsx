import StudentName from '../atoms/StudentNames';
import React from 'react';

const StudentCard = ({ name, lastname, email, birthday, tutor, tutorContact }) => {
    return (
        <div className="student">
            <StudentName>{props.names}</StudentName>
            
            <p>Email: {email}</p>
            <p>Birthday: {birthday}</p>
            <p>Tutor: {tutor}</p>
            <p>Tutor Contact: {tutorContact}</p>
            <hr />
        </div>
    );
};

export default StudentCard;