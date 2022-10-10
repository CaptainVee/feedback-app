import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid"


const feedbackContext = createContext()



export const FeedbackProvider = ({children}) => {

    const [feedback, setFeedback] = useState([
        {
            id: 1,
            text: 'This item is from context',
            rating: 5,
        },
        {
            id: 2,
            text: 'This item is from contejjjjjxt',
            rating: 9,
        },
        {
            id: 3,
            text: 'This itegggggm is from context',
            rating: 3,
        },
    ])

    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false
    })

	const deleteFeedback = (id) =>{
		if (window.confirm('Are you sure you want to delete')) {
			setFeedback(feedback.filter((item) => item.id !== id))
		}
	}
	const addFeedback = (newFeedback) => {
		newFeedback.id = uuidv4()
		setFeedback([newFeedback, ...feedback])
	}

    // set item to be updated
    const editFeedback = (item) => {
        setFeedbackEdit({
            item,
            edit: true
        })
    }

    // Update the item
    const updateFeedback = (id, upditem) => {
        setFeedback(feedback.map((item) => (item.id === id ? {...item, ...upditem} : item))
        )
    }

    return <feedbackContext.Provider value={{
        feedback,
        feedbackEdit,
        deleteFeedback,
        addFeedback,
        editFeedback,
        updateFeedback,
        
    }}>
        {children}
    </feedbackContext.Provider>
}


export default feedbackContext