import { useEffect, useMemo, useState } from 'react'
import './styles/App.css'
import { PostList } from './components/PostList'
import { PostForm } from './components/PostForm'
import { PostFilter } from './components/PostFilter'
import { MyModal } from './components/UI/MyModal/MyModal'
import { MyButton } from './components/UI/button/MyButton'
import { usePosts } from './hooks/usePosts'
import PostService from './API/PostService'
import { useFetching } from './hooks/useFetching'
import { getPageCount, getPagesArray } from './utils/pages'
import { Pagination } from './components/UI/pagination/Pagination'

function App() {
  const [posts, setPosts] = useState([])
  const [filter, setFilter] = useState({ sort: '', query: '' })
  const [modal, setModal] = useState(false)
  const [totalPages, setTotalPages] = useState(0)
  const [limit, setLimit] = useState(10)
  const [page, setPage] = useState(1)
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)

  const pagesArray = getPagesArray(totalPages)

  const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
    const response = await PostService.getAll(limit, page)
    setPosts(response.data)
    const totalCount = response.headers['x-total-count']
    setTotalPages(getPageCount(totalCount, limit))
  })

  useEffect(() => {
    fetchPosts()
  }, [page])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
    setModal(false)
  }

  const removePost = (post) => {
    setPosts(posts.filter((el) => el.id !== post.id))
  }

  const changePage = (page) => {
    setPage(page)
  }

  return (
    <div className="App">
      <div className="control-menu">
        <MyButton onClick={() => setModal(true)}>Создать пост</MyButton>
        <PostFilter filter={filter} setFilter={setFilter} />
      </div>
      <PostList
        postError={postError}
        isPostsLoading={isPostsLoading}
        remove={removePost}
        posts={sortedAndSearchedPosts}
        title="Список постов"
      />
      <Pagination pagesArray={pagesArray} page={page} changePage={changePage} />
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </MyModal>
    </div>
  )
}

export default App
