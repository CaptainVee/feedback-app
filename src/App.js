import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import FeedbackStats from "./components/FeedbackStats"
import FeedbackForm from "./components/FeedbackForm"
import FeedbackList from "./components/FeedbackList"
import AboutPage from "./pages/AboutPage"
import AboutIconLink from "./components/AboutIconLink"
import { FeedbackProvider } from './context/FeedbackContext'

function App() {

	return (
		<FeedbackProvider>
			<Router>
			<Header />
			<div className="container">
				<Routes>
					<Route exact path="/" element={
						<>
						<FeedbackStats />
						<FeedbackForm />
						<FeedbackList />
						<AboutIconLink/>
						</>
					}>
					</Route>
					
					<Route path="/about" element={<AboutPage />}/>
				</Routes>
				
			</div>	
			</Router>
		</FeedbackProvider>
		)
}

export default App