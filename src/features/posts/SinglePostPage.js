import { Link } from 'react-router-dom'
import { useGetPostQuery } from '../../api/features/apiSlice'
import { Spinner } from '../../components/Spinner'
import { PostAuthor } from './PostAuthor'
import { ReactionButtons } from './ReactionButtons'

export const SinglePostPage = ({ match }) => {
  const { postId } = match.params

  const { data: post, isFetching, isSuccess } = useGetPostQuery(postId)

  let content

  if (isFetching) {
    content = <Spinner text="Loading..." />
  } else if (isSuccess) {
    content = (
      <article className="post">
        <h2>{post.title}</h2>
        <p className="post-content">{post.content}</p>
        <div>
          <PostAuthor userId={post.user} />
        </div>
        <ReactionButtons post={post} />
        <Link to={`/editPost/${post.id}`} className="button">
          Edit post
        </Link>
      </article>
    )
  }

  return <section>{content}</section>
}
