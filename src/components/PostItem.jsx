import { MyButton } from './UI/button/MyButton'

export const PostItem = ({ mapId, remove, ...props }) => {
  const { id, title, body } = props.post

  return (
    <div className="post">
      <div className="post__content">
        <strong>
          {id}. {title}
        </strong>
        <div>{body}</div>
      </div>
      <div className="post__btns">
        <MyButton onClick={() => remove(props.post)}>Удалить</MyButton>
      </div>
    </div>
  )
}
