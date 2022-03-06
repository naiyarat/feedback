import React from 'react'

function FeedbackList({ feedback }) {
    if (!feedback || feedback.length === 0) {
        return <p>No feedback yet</p> 
    }
    return <div className='feedback-list'>
        {feedback.map((item) => (
            <p>{item.rating}</p>
        ))}
    </div>
}

export default FeedbackList
