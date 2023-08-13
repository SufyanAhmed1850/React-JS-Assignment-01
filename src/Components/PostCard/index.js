import "./index.css";

function Post({ img, name, address, title, body }) {
    return (
        <div className="card">
            <div className="header">
                <div className="profile-image">
                    <img src={img} alt="Profile Image" />
                </div>
                <div className="profile-info">
                    <p className="name">{name}</p>
                    <p className="address">{address}.</p>
                </div>
            </div>
            <div className="body">
                <h1>{title}</h1>
                <p>{body}</p>
            </div>
        </div>
    );
}

export default Post;
