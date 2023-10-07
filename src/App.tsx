import { z } from 'zod';

function App() {

  const userSchema = z.object({
    username: z.string(),
    age: z.number().optional(),
    isAbove18: z.boolean(),
    birthday: z.date(),
    test: z.any()
  }) //Every validation is required in zod you need to use these field
  //* if not then you can use optional method

  const user = { username: "Mayank" };

  const ans = userSchema.parse(user)
  console.log(userSchema.safeParse(user).success)

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
