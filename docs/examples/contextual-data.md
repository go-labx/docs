# Contextual data

The `Lightning` framework provides a powerful feature called **`Contextual Data`** that allows developers to store and retrieve data within the context of a request. This feature is particularly useful for storing session data, user information, and other request-specific data.

```go
package main

import (
	"fmt"

	"github.com/go-labx/lightning"
)

func main() {
	app := lightning.NewApp()

	// Middleware to set session data
	app.Use(func(ctx *lightning.Context) {
		ctx.SetData("session", map[string]interface{}{
			"userId":   123,
			"username": "Jack",
		})
		ctx.Next()
	})

	// Middleware to get session data
	app.Use(func(ctx *lightning.Context) {
		session := ctx.GetData("session")
		// write your logic here...
		fmt.Println(session)

		ctx.Next()
	})

	// Route to handle GET request to /api/user
	app.Get("/api/user", func(ctx *lightning.Context) {
		session := ctx.GetData("session")
		// write your logic here...
		fmt.Println(session)

		ctx.Text(200, "hello world")
	})

	// Run the app
	app.Run()
}
```

In the provided code block, we can see an example of how to use the Contextual Data feature in the `Lightning` framework. The code sets up two middleware functions that use the `ctx.SetData()` method to store session data in the context of the request. The first middleware function sets the session data, while the second middleware function retrieves the session data using the `ctx.GetData()` method.

In addition to middleware functions, the Contextual Data feature can also be used in route handlers. In the provided code block, we can see an example of a route handler that retrieves the session data using the `ctx.GetData()` method.

```go
app.Get("/api/user", func(ctx *lightning.Context) {
    session := ctx.GetData("session")
    // write your logic here...
})
```

Overall, the **Contextual Data** feature in the `Lightning` framework provides a powerful and flexible way to store and retrieve data within the context of a request. By using this feature, developers can easily manage session data, user information, and other request-specific data in their applications.
