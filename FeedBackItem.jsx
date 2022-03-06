import { useState } from "react"

function FeedBackItem() {
    const [rating, setRating] = useState(7)
    const [text, setText] = useState("This is some text")


    return (
        <div className="card">
            <div className="num-display">{rating}</div>
            <div className="text-display">{text}</div>
        </div>
    )
}

export default FeedBackItem