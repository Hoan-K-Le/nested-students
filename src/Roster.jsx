import React, { Component } from 'react';
import Student from './Student'

class Roster extends Component {
    render() {
        const studentsArr = this.props.students.map((student, index) => {
            return(
                // implimit declare student in the return
                <Student 
                    scores={student.scores}
                    // create a key
                    key={`KeyStudent-${index}`}

                    name={student.name}

                    bio={student.bio}

                    date={student.scores.date}
                    
                    score={student.scores.score}
                />
            )
        })
    return (
        <>
            {studentsArr}
        </>
    )
    }
}

export default Roster