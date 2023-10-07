import { z } from 'zod';

function App() {

  const userSchema = z.object({
    username: z.string().min(3),
    age: z.number().gt(5).optional(),
    isAbove18: z.boolean(),
    birthday: z.date(),
    test: z.any(),
    hobbies: z.enum(['programming', 'guitar'])
  }) //Every validation is required in zod you need to use these field
  //* if not then you can use optional method

  const user = { username: "Hek", age: 6, isAbove18: true, birthday: new Date(), test: 542, hobbies: "guitar" };

  const ans = userSchema.parse(user)
  console.log(userSchema.safeParse(user).success)

  //cool thing is we don't need to create new type for typescript
  // * we can use infer

  type User = z.infer<typeof userSchema>

  return (
    <>
      <p>{ }</p>
    </>
  )
}

export default App
