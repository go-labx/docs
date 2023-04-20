# Routing

The `Lightning` web framework provides a built-in router to handle incoming HTTP requests. In this article, we will discuss how to use the routing feature of the framework, including:

- Basic routing
- Route parameters
- Wildcards routing
- Route group

## Basic routing

Basics are the most fundamental form of routing in the `lightning` framework. It supports various HTTP request methods such as `GET`, `POST`, `PUT`, `DELETE`, etc. Here’s an example of a `GET` request:

```go
app.Get("/ping", func(ctx *lightning.Context) {
	ctx.JSON(http.StatusOK, map[string]string{
		"message": "pong",
	})
})
```

## Route Parameters

Route parameters are used to **match dynamic parts of the URL**. A parameter is denoted by a colon `:` followed by a name. For example, the URL pattern `/api/user/:id` will match any URL that starts with `/api/user/` and has a dynamic `id` parameter.

Here’s an example of a GET request:

```go
app.Get("/api/user/:id", func(ctx *lightning.Context) {
    userId := ctx.Param("id")
    // implementation
})
```

When a request is made to a route with parameters, the router will extract the parameter values from the URL and pass them to the handler function. The parameter values are stored in a map and can be accessed within the handler function.

In the examples above, `:id` is a parameter that can be accessed in the route handling function through `ctx.Param("id")`.

**Multiple dynamic parameters** can also be inserted, as shown in the following example:

```go
app.Get("/api/user/:userId/article/:articleId", func(ctx *lightning.Context) {
    userId := ctx.Param("userId")
    articleId := ctx.Param("articleId")
    // implementation
})
```

## Wildcards routing

Wildcard routes are used to **match any part of a URL**. A wildcard is denoted by an asterisk `*` followed by a name. For example, the URL pattern `/files/*filepath` will match any URL that starts with `/files/` and has a dynamic `filepath` parameter.

For example, the following code defines a GET route that will handle all requests that start with `/files/`:

```go
app.Get("/files/*filepath", func(ctx *lightning.Context) {
    filepath := ctx.Param("filepath")
    // implementation
})
```

This code defines a GET route with the URL pattern `/files/*filepath`. When a request is made to this route, the router will extract the `filepath` parameter from the URL and pass it to the handler function. The parameter is accessed within the function using `ctx.Param("filepath")`. This value can then be used in the implementation of the route handling function.

In addition to the above, the wildcard can also be followed by no name. For example:

```go
app.Get("/api/*", func(ctx *lightning.Context) {
    // implementation
})
```

In the example above, `*` is a wildcard character that matches any path.

## Routing Group

Route grouping is particularly useful when building large web applications with many routes. By grouping related routes together, developers can more easily navigate and maintain their codebase.

In addition to improved organization, route grouping also allows for more efficient middleware handling. Middleware functions can be applied to an entire route group, rather than being added individually to each route. This can reduce code duplication and improve application performance.

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

	// user group
	userGroup := app.Group("/api/user")
	userGroup.Use(func(ctx *lightning.Context) {
		fmt.Println("user group middleware --->")
		ctx.Next()
		fmt.Println("<--- user group middleware")
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
		fmt.Println("goods group middleware --->")
		ctx.Next()
		fmt.Println("<--- goods group middleware")
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

#### Route Nesting

Route nesting is a technique used to group related routes together in a hierarchical structure. This can be useful for organizing large applications with many routes.

To nest routes in Go, simply create a new group and add routes to it. The following code demonstrates how to nest routes in lightning:

```go
// user group
userGroup := app.Group("/api/user")
userGroup.Use(func(ctx *lightning.Context) {
    fmt.Println("user group middleware --->")
    ctx.Next()
    fmt.Println("<--- user group middleware")
})
userGroup.Get("/:userId", func(ctx *lightning.Context) {
    ctx.JSON(http.StatusOK, map[string]interface{}{
        "username": "zhangsan",
        "age":      20,
    })
})

// nested group
nestedGroup := userGroup.Group("/:userId/orders")
nestedGroup.Use(func(ctx *lightning.Context) {
    fmt.Println("nested group middleware --->")
    ctx.Next()
    fmt.Println("<--- nested group middleware")
})
nestedGroup.Get("/:orderId", func(ctx *lightning.Context) {
    ctx.JSON(http.StatusOK, lightning.Map{
        "order_id": "123456",
        "status":   "shipped",
    })
})
```

In the code above, a new group is created under the userGroup route with the pattern `/:userId/orders`. This group has its own middleware and endpoint that returns a JSON response with the order ID and status.

By nesting routes in this way, it becomes easier to manage and maintain complex applications with many routes.

## Conclusion

These are the three basic forms of routing in the `lightning` framework. Using these, you can create various complex routing rules. If you want to learn more about using the `lightning` framework, please refer to the official documentation.
