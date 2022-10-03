
import FeedbackItem from "./FeedbackItem"

function FeedbackList({ feedback, handleDelete }) {
    if (!feedback || feedback.length === 0) {
        return <div>No feedbck</div>
    } else{
        return (
            <div className="feedback-list">{feedback.map((data) => (
                <FeedbackItem 
                key={data.id} 
                item={data} 
                handleDelete={handleDelete}/>
            ))}</div>
          )
    }

}

export default FeedbackList