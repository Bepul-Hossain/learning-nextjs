import axios from 'axios';

const Post = ({ post }) => {
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
};

export async function getServerSideProps({ params }) {
  const res = await axios.get(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  );
  const post = res.data;

  return {
    props: {
      post,
    },
  };
}

export default Post;