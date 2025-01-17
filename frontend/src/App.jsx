import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Content from './pages/Content'
import Form from './pages/Form'
import ThankYouPage from './pages/ThankYou'
import MentorOnBoardForm from './pages/MentorOnBoardForm'
import LandingPage from './pages/LandingPage'
import ThankYouMentor from './pages/ThankYouMentor'
import Test from './pages/Test'
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
          <Route path="/thank-you" element={<ThankYouMentor />} />
          <Route path="/test" element={<Test />} />
          


        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App