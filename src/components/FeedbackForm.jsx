
import Card from "./shared/Card"
import RatingSelect from "./RatingSelect"
import Button from "./shared/Button"
import {useState, useContext, useEffect} from 'react'
import FeedbackContext from "../context/FeedbackContext"

function FeedbackForm() {
    const [text, setText] = useState('')
    const [rating, setRating] = useState(1)
    const [btnDisabled, setBtnDisabled] = useState(true)
    const [message, setMessage] = useState('')

    const {addFeedback, feedbackEdit, updateFeedback} = useContext(FeedbackContext)

    useEffect(() => {
        if (feedbackEdit.edit === true) {
            setBtnDisabled(false)
            setText(feedbackEdit.item.text)
            setRating(feedbackEdit.item.rating)
        }
    }, [feedbackEdit])

    const handleTextChange = (e) => {
        if(text === ''){
            setBtnDisabled(true)
            setMessage(null)
        } else if(text !== '' && text.trim().length <= 10 ){
            setMessage('text must be atleast 10 charactersss')
            setBtnDisabled(true)
        } else {
            setMessage(null)
            setBtnDisabled(false)
        }

        setText(e.target.value)
    }

    const handleSubmit = (e) => {
        if(text.trim().length > 10){
            const newFeedback = {
                text,
                rating,
            }

            if (feedbackEdit.edit === true) {
                updateFeedback(feedbackEdit.item.id, newFeedback)
                
            } else {
                addFeedback(newFeedback)
            }

            setText('')
        }

        e.preventDefault()
    }

  return (
    <Card>
        <form onSubmit={handleSubmit}>
            <h2>How would you rate your service with us</h2>
            <RatingSelect selected={rating} select={(rating) => setRating(rating) } />
            <div className="input-group">
                <input onChange={handleTextChange} type="text" name="" id="" placeholder="write a review" value={text}/>
                <Button type="submit" isDisabled={btnDisabled}>send</Button>
            </div>
            {message && <div className="message">{message}</div>}
        </form>
    </Card>
  )
}

export default FeedbackForm