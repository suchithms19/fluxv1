import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Content from './Content'
import Form from './pages/Form'
import ThankYouPage from './pages/ThankYou'
import MentorOnBoardForm from './componenets/MentorOnBoardForm'
import LandingPage from './componenets/LandingPage'
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Content />} />
          <Route path="/customerform" element={<Form />} />
          <Route path="/thankyou" element={<ThankYouPage />} />
          <Route path="/mentorform" element={<MentorOnBoardForm />} />
          <Route path="/mentor" element={<LandingPage />} />
          


        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App