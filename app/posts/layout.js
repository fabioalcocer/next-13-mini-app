import Counter from '../index/components/Counter'

function PostsLayout ({ children }) {
  return (
    <>
      <h1>Posts</h1>
      <Counter />
      {children}
    </>
  )
}

export default PostsLayout
