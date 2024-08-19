import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function MailboxDetails(props) {
  const { mailboxes } = props
  const { mailboxId } = useParams()
  const [mailboxDetails, setMailboxDetails] = useState({})

  const thisMailbox = mailboxes.find((mailbox) => mailbox._id === Number(mailboxId))
  useEffect(() => {
    setMailboxDetails(thisMailbox)
  }, [])

  return (
    <>
      {thisMailbox ?
        (<>
          <h1>Mailbox {mailboxDetails._id}</h1>
          <p>Boxholder: {mailboxDetails.boxholder}</p>
          <p>Box Size: {mailboxDetails.boxSize}</p>
        </>)
        : (<h2>Mailbox Not Found!</h2>)
      }
    </>
  )
}

export default MailboxDetails