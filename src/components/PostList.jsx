import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { PostItem } from './PostItem'
import { Loader } from './UI/Loader/Loader'

export const PostList = ({
  posts,
  title,
  remove,
  isPostsLoading,
  postError,
}) => {
  return (
    <div>
      <h1>
        {isPostsLoading
          ? 'Загрузка постов...'
          : posts.length
          ? title
          : 'Список пуст'}
      </h1>
      {isPostsLoading ? <Loader /> : postError ? <h2>Ошбика загрузки</h2> : ''}
      <TransitionGroup>
        {posts.map((el, id) => (
          <CSSTransition key={el.id} timeout={500} classNames="post">
            <PostItem remove={remove} mapId={id + 1} post={el} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  )
}
