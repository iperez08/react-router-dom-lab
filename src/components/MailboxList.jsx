import { Link } from "react-router-dom"


function MailboxList(props) {
  const { mailboxes } = props

  return (
    <>
      <h1>
        Mailbox List
      </h1>
      <ul>
        {mailboxes.map((mailbox) => {
          return (
            <Link
              key={mailbox._id}
              to={`/mailboxes/${mailbox._id}`}>
              <li
                className='mail-box'>
                Mailbox {mailbox._id}
              </li>
            </Link>
          )
        })}
      </ul>
    </>
  )
}

export default MailboxList

