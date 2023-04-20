# Contextual data

The lightning package provides a Contextual data that is used to **store data that can be accessed by all the middleware functions and the route handlers**. The `SetData` method is used to set data in the context, and the `GetData` method is used to retrieve data from the context.

```go
package main

import (
	"fmt"

	"github.com/go-labx/lightning"
)

func main() {
	app := lightning.NewApp()

	app.Use(func(ctx *lightning.Context) {
		ctx.SetData("session", map[string]interface{}{
			"userId":   123,
			"username": "Jack",
		})
		ctx.Next()
	})

	app.Use(func(ctx *lightning.Context) {
		session := ctx.GetData("session")
		// write your logic here...
		fmt.Println(session)

		ctx.Next()
	})

	app.Get("/api/user", func(ctx *lightning.Context) {
		session := ctx.GetData("session")
		// write your logic here...
		fmt.Println(session)

		ctx.Text(200, "hello world")
	})

	app.Run()
}
```

In the given code, two middleware functions are used. The first middleware function sets a session data in the context with a `userId` and a `username`. The second middleware function retrieves the session data from the context and does some logic with it. The session data is also retrieved in the route handler function.
