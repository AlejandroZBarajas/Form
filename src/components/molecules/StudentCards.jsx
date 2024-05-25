// StudentCard.js
import React from 'react';

const StudentCard = ({ name, lastname, email, birthday, tutor, tutorContact }) => {
    return (
        <div className="student">
            <p>Name: {name} {lastname}</p>
            <p>Email: {email}</p>
            <p>Birthday: {birthday}</p>
            <p>Tutor: {tutor}</p>
            <p>Tutor Contact: {tutorContact}</p>
            <hr />
        </div>
    );
};

export default StudentCard;