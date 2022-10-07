
import Card from "../components/shared/Card"
import {Link} from 'react-router-dom'

function AboutPage() {
  return (
    <Card>
        <div className="about">
            <h1>About This Project</h1>
            <p>This is a boring react app to leave a feedback we don't care about</p>
            <p>Version 1.0</p>


            <p>
                <Link to="/">back to home</Link>
            </p>
        </div>
    </Card>
  )
}

export default AboutPage