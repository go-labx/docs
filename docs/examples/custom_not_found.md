# Custom not found

`Lightning` Framework provides an easy way to customize the 404 error functionality by modifying the `NotFoundHandler`. For example:

```go
package main

import (
	"fmt"
	"github.com/go-labx/lightning"
	"net/http"
)

func main() {
	app := lightning.NewApp()

	app.NotFoundHandler = func(ctx *lightning.Context) {
		ctx.JSON(http.StatusOK, map[string]interface{}{
			"code": 404,
			"msg":  fmt.Sprintf("API %s -> %s not found.", ctx.Method, ctx.Path),
		})
	}

	app.Get("/ping", func(ctx *lightning.Context) {
		ctx.JSON(http.StatusOK, map[string]string{
			"message": "pong",
		})
	})

	app.Run()
}
```

In the above code, when a user tries to access an API that doesn't exist, the `NotFoundHandler` will handle the error and return a JSON response with a 404 error code and a message indicating the API endpoint that was not found.

To customize this functionality, we can also modify the `NotFoundHandler` to return a different response or redirect the user to a custom error page.

For example, we could modify the `NotFoundHandler` to redirect the user to a custom 404 error page as follows:

```go
app.NotFoundHandler = func(ctx *lightning.Context) {
  ctx.Redirect(http.StatusMovedPermanently, "/404")
}
```

This code will redirect the user to a custom 404 error page at the `/404` endpoint.

Overall, the `NotFoundHandler` provides a simple way to customize the 404 error functionality in the Lightning Framework.
