import "./index.css";
import Post from "../PostCard";
import posts from "../../Constants/Posts";
import users from "../../Constants/Users";

function CardWrapper() {
    return (
        <div className="card-wrapper">
            {posts.map((post, ind) => {
                let user = users.find((user) => {
                    return post.userId === user.id;
                });
                return (
                    <Post
                        key={ind}
                        img={user.profileSmall}
                        name={user.name}
                        address={
                            user.address.suite +
                            ", " +
                            user.address.street +
                            ", " +
                            user.address.city
                        }
                        title={post.title}
                        body={post.body}
                    />
                );
            })}
        </div>
    );
}

export default CardWrapper;
