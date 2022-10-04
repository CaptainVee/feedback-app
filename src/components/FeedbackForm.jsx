
import Card from "./shared/Card"
import Button from "./shared/Button"
import {useState} from 'react'

function FeedbackForm() {
    const [text, setText] = useState('')
    const [btnDisabled, setBtnDisabled] = useState(true)
    const [message, setMessage] = useState('')

    const handleTextChange = (e) => {
        if(text === ''){
            setBtnDisabled(true)
            setMessage(null)
        }

        setText(e.target.value)
    }
  return (
    <Card>
        <form>
            <h2>How would you rate your service with us</h2>
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