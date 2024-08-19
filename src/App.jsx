import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import MailboxForm from './components/MailboxForm'
import MailboxDetails from './components/MailboxDetails'
import MailboxList from './components/MailboxList'

let mailboxCounter = 1

const App = () => {

  const [mailboxes, setMailboxes] = useState([])

  const addBox = (formData) => {
    console.log(formData)
    const newFormData = { ...formData, _id: mailboxCounter++ }
    console.log(newFormData)
    setMailboxes([...mailboxes, newFormData])
  }



  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<main><h1>Post Office</h1></main>} />
        <Route path='/mailboxes' element={<MailboxList mailboxes={mailboxes}/>} />
        <Route path='/new-mailbox' element={<MailboxForm addBox={addBox} />} />
        <Route path='/mailboxes/:mailboxId' element={<MailboxDetails mailboxes={mailboxes} />} />
        <Route path='/*' element={<h2>Mailbox Not found!</h2>} />
      </Routes>
    </>
  )
}

export default App