import { createContext, useState, useEffect } from "react";

const feedbackContext = createContext()

export const FeedbackProvider = ({children}) => {
    const [isLoading, setIsLoading] = useState(true)

    const [feedback, setFeedback] = useState([])

    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false
    })

    useEffect(() => {
        fetchFeedback()
    }, [])

    // Fetch feedback
    const fetchFeedback = async () => {
        const response = await fetch('/feedback?_sort=id&_order=desc')
        const data = await response.json()
        setFeedback(data)
        setIsLoading(false)
    }

	const deleteFeedback = (id) =>{
		if (window.confirm('Are you sure you want to delete')) {
			setFeedback(feedback.filter((item) => item.id !== id))
		}
	}
	const addFeedback = async (newFeedback) => {
        const response = await fetch('/feedback', {
            method: 'POST',
            headers: { 'Content-Type' : 'application/json'},
            body: JSON.stringify(newFeedback)
        })
        const data = await response.json()
		setFeedback([data, ...feedback])
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
        isLoading,
        deleteFeedback,
        addFeedback,
        editFeedback,
        updateFeedback,
        
    }}>
        {children}
    </feedbackContext.Provider>
}


export default feedbackContext