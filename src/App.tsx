import { TypeOf, z } from 'zod';

function App() {

  const userSchema = z.object({
    username: z.string(),
  })

  const user = { username: "Mayank" };

  const ans = userSchema.parse(user)
  console.log(userSchema.parse(user))

  //cool thing is we don't need to create new type for typescript
  // * we can use infer

  type User = z.infer<typeof userSchema>

  return (
    <>
      <p>{ans.username}</p>
    </>
  )
}

export default App
