# Response Header

In an HTTP response, headers are metadata used to describe the content and format of the response. In `Lightning`, the following methods can be used to manipulate response headers:

```go
package main

import (
	"net/http"

	"github.com/go-labx/lightning"
)

func main() {
	app := lightning.DefaultApp()

	app.Get("/ping", func(ctx *lightning.Context) {
		// Add multiple headers with the same key "foo"
		ctx.AddHeader("foo", "bar")
		ctx.AddHeader("foo", "baz")
		ctx.AddHeader("foo", "baq")

		// set a header with key "id" and value "ewh2mime9purchaser4error"
		ctx.SetHeader("id", "ewh2mime9purchaser4error")

		// delete all headers with key "bar"
		ctx.DelHeader("bar")

		ctx.JSON(http.StatusOK, lightning.Map{
			"message": "pong",
		})
	})

	app.Run()
}
```

### AddHeader

The `AddHeader` method is used to add multiple headers with the same key. In the provided code block, we can see that `ctx.AddHeader("foo", "bar")`, `ctx.AddHeader("foo", "baz")`, and `ctx.AddHeader("foo", "baq")` all add headers with the key "foo". This means that the response will have multiple headers with the same key, each with a different value.

### SetHeader

The `SetHeader` method is used to set a single header with a specific key and value. In the provided code block, we can see that `ctx.SetHeader("id", "ewh2mime9purchaser4error")` sets a header with the key "id" and the value "ewh2mime9purchaser4error". This means that the response will have a single header with the key "id" and the value "ewh2mime9purchaser4error".

### DelHeader

The `DelHeader` method is used to delete all headers with a given key. In the provided code block, the `DelHeader` method is called with the argument "bar", which means that all headers with the key "bar" will be deleted.

