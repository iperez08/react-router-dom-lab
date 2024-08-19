import { useState } from "react"
import { Navigate, useNavigate } from "react-router-dom"

function MailboxForm(props) {
  const [formData, setFormData] = useState(
    {
      _id: '',
      boxSize: '',
      boxholder: '',
    }
  )

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value })
  }

  const navigate = useNavigate()
  const handleSubmit = (event) => {
    console.log(formData)
    event.preventDefault()
    props.addBox(formData)
    setFormData({
      _id: '',
      boxSize: '',
      boxholder: '',
    })
    navigate('/mailboxes')
  }

  return (
    <>
      <h1>New Mailbox</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor='boxholder'>Box Owner: </label>
        <input type='text' id='boxholder'
          name='boxholder'
          value={formData.boxholder}
          onChange={handleChange} /> <br />
        <label htmlFor='boxsize'>Box Size: </label>
        <select id='boxsize'
          name='boxSize'
          value={formData.boxSize}
          onChange={handleChange}>
          <option value=''>---- Select a Size ----</option>
          <option value='small'>Small</option>
          <option value='medium'>Medium</option>
          <option value='large'>Large</option>
        </select>
        <button type='submit'>Create Mailbox</button>
      </form>
    </>
  )
}

export default MailboxForm