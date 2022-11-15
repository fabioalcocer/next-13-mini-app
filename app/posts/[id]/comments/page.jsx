const fetchComments = async (id) => {
  await new Promise(resolve => setTimeout(resolve, 3000))
  // throw new Error('Error fetching comments')

  return fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}/comments`,
    {
      next: {
        revalidate: 60
      }
    }
  ).then((res) => res.json())
}

async function Comments ({ params }) {
  const { id } = params
  const comments = await fetchComments(id)

  return (
    <>
      <h1>Estos son los comentarios del Post {id}</h1>
      <ul style={{ background: '#444d', fontSize: '11px' }}>
        {comments.map((comment) => (
          <li key={comment.id}>
            <h2>{comment.name}</h2>
            <p>{comment.email}</p>
          </li>
        ))}
      </ul>
    </>
  )
}

export default Comments
