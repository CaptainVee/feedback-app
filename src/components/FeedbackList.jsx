import { motion, AnimatePresence } from "framer-motion"
import { useContext } from "react"
import FeedbackItem from "./FeedbackItem"
import feedbackContext from "../context/FeedbackContext"

function FeedbackList() {

    const {feedback} = useContext(feedbackContext)

    if (!feedback || feedback.length === 0) {
        return <div>No feedbck</div>
    } else{
        return (
            <div className="feedback-list">
                <AnimatePresence>
                {feedback.map((data) => (
                <motion.div key={data.id} initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
                    <FeedbackItem 
                    key={data.id} 
                    item={data} 
                    />
                </motion.div>
            ))}
            </AnimatePresence>
            </div>
          )
    }

}

export default FeedbackList