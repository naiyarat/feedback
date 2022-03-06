import {useState} from 'react'
import Header from './components/Header'
import FeedbackList from './components/FeedbackList'
import FeedBackData from './data/FeedBackData'

function App() {
    const [feedback, setFeedback] = useState({ FeedBackData })
    
    return (
        <>
            <Header />
            <div>
                <FeedbackList feedback={feedback}/>
            </div>
        </>
    )
}

export default App