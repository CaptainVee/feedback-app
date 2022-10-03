
function FeedbackStats({ feedback }) {
    // Calculate average rating
    let avg = feedback.reduce((acc, cur) =>{
        return acc + cur.rating
    }, 0) / feedback.length

    // make the average to one decimal place and replace a .0 to a whole number
    avg = avg.toFixed(1).replace(/[.,]0$/, '')

  return (
    <div className="feedback-stats">
        <h4>{feedback.length} Reviews</h4>
        <h4>Average Rating: {isNaN(avg) ? 0 : avg}</h4>
    </div>
  )
}

export default FeedbackStats