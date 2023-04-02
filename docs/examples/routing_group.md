# Routing Group

Route grouping is particularly useful when building large web applications with many routes. By grouping related routes together, developers can more easily navigate and maintain their codebase.

The following code demonstrates how to use route group in lightning:

```go
package main

import (
	"fmt"
	"github.com/go-labx/lightning"
	"net/http"
)

func main() {
	app := lightning.NewApp()

	userGroup := app.Group("/api/user")
	userGroup.Use(func(ctx *lightning.Context) {
		// implementation
		ctx.Next()
	})
	userGroup.Get("/:userId", func(ctx *lightning.Context) {
		ctx.JSON(http.StatusOK, map[string]interface{}{
			"username": "zhangsan",
			"age":      20,
		})
	})

	// goods group
	goodsGroup := app.Group("/api/goods")
	goodsGroup.Use(func(ctx *lightning.Context) {
		// implementation
		ctx.Next()
	})
	goodsGroup.Get("/:alias", func(ctx *lightning.Context) {
		ctx.JSON(http.StatusOK, lightning.Map{
			"title":       "goods title",
			"description": "goods description",
		})
	})

	app.Run()
}
```

The code above defines two route groups: `/api/user` and `/api/goods`. Each group has its own middleware and endpoints.
