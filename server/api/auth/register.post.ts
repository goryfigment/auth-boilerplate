import { hash } from "bcrypt"

export default defineEventHandler(async (event) => {
    const body = await readBody(event)

    const userExists = await prisma.users.findFirst({
        where: { 
          OR: [
            { email: body.email },
            { username: body.username }
          ]
        }
    })

    if(userExists) {
      throw createError({
        statusCode: 403,
        statusMessage: "User already exists",
      })
    }

    await prisma.users.create({
      data: {
        email: body.email,
        username: body.username,
        password: await hash(body.password, 12)
      },
    })

    setResponseStatus(event, 201)
    
    return { message: "User created" }
})

