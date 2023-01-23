import { useRouter } from 'next/router'

const Post = ({ post }) => {
    const router = useRouter()
    const { id } = router.query

    return (
        <main>
            <p>Post: {id}</p>
            <p>server name: {post.serverName}</p>
            <p>server id: {post.serverId}</p>
        </main>)
}

export async function getServerSideProps({ params }) {
    // params contains the post `id`.
    // If the route is like /posts/1, then params.id is 1)
    const post = {
        serverName: "Los Gamers",
        serverId: "25473245522876",
    }

    // Pass post data to the page via props
    return { props: { post } }
}

export default Post
