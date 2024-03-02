export default function Profile({ username, email, picture }) {
    return (
        <div>
            <div className="username">{username}</div>
            <div className="email">{email}</div>
            <div className="picture">{picture}</div>
        </div>
    )
}
