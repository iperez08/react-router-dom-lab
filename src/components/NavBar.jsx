import { Link } from "react-router-dom"

const NavBar = () => {
    return (
        <>
            <Link to='/'>
                <li>Home</li>
            </Link>
            <Link to='/mailboxes'>
                <li>Mailboxes</li>
            </Link>
            <Link to='/new-mailbox'>
                <li>New Mailbox</li>
            </Link>
        </>
    )
}

export default NavBar