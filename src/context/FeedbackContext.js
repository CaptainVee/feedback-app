import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid"


const feedbackContext = createContext()



export const FeedbackProvider = ({children}) => {

    const [feedback, setFeedback] = useState([
        {
            id: 1,
            text: 'This item is from context',
            rating: 5,
        }
    ])
	const deleteFeedback = (id) =>{
		if (window.confirm('Are you sure you want to delete')) {
			setFeedback(feedback.filter((item) => item.id !== id))
		}
	}
	const addFeedback = (newFeedback) => {
		newFeedback.id = uuidv4()
		setFeedback([newFeedback, ...feedback])
	}

    return <feedbackContext.Provider value={{
        feedback,
        deleteFeedback,
        addFeedback,
    }}>
        {children}
    </feedbackContext.Provider>
}


export default feedbackContext