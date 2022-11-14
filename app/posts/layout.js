import Counter from './Counter'

function PostsLayout ({ children }) {
  return (
    <>
      <h1>Este es el layout de los Posts</h1>
      <Counter />
      {children}
    </>
  )
}

export default PostsLayout
