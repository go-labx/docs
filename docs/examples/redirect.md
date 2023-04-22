# Redirect

In this article, we will explore how to use the redirect functionality in the `Lightning` framework.

### Code Example

Let's start by looking at a code example that demonstrates how to use the redirect functionality in `Lightning`:

```go
package main

import (
	"net/http"

	"github.com/go-labx/lightning"
)

func main() {
	app := lightning.NewApp()

	app.Get("/foo", func(ctx *lightning.Context) {
		// Redirect to /baz with a 301 status code
		ctx.Redirect(http.StatusMovedPermanently, "/baz")
	})

	app.Get("/bar", func(ctx *lightning.Context) {
		// Redirect to /baz with a 302 status code
		ctx.Redirect(302, "/baz")
	})

	app.Get("/baz", func(ctx *lightning.Context) {
		// Return a JSON response with a "message" key and "pong" value
		ctx.JSON(http.StatusOK, map[string]string{
			"message": "pong",
		})
	})

	app.Run()
}
```

In this example, we create a new Lightning application and define three routes: `/foo`, `/bar`, and `/baz`. The `/foo` and `/bar` routes both redirect the user to the `/baz` route, but with different HTTP status codes. The `/baz` route returns a JSON response with a "message" key and "pong" value.

### Using the Redirect Function

To use the redirect functionality in `Lightning`, we simply need to call the `ctx.Redirect` method. This method takes two arguments: the HTTP status code to use for the redirect, and the URL to redirect to.

In the example above, we use two different HTTP status codes for the redirects: http.StatusMovedPermanently (which corresponds to a 301 status code) and 302.