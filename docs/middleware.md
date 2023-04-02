# Middleware

In the Go programming language, middleware is used to handle logic that is common to multiple endpoints in an application. In the `Lightning` framework, middleware can be used to add functionality to an application's global scope or to specific routes.

## Global Scope

Middleware can be added to the application's global scope using the `app.Use()` method. This function takes a middleware function as its argument, which is called for every request to the application. Global scope middleware is useful for adding functionality that is common to all routes in the application, such as authentication or logging.

Here is an example of how to add global scope middleware in the `Lightning` framework:

```go
app.Use(func(ctx *lightning.Context) {
   // middleware logic goes here
   ctx.Next()
})
```

In this example, the middleware function is called for every request to the application. The `ctx.Next()` function is used to pass control to the next middleware function in the chain.

## Route Scope

Route-specific middleware can be added to a specific route by passing additional middleware functions as arguments to the route's handler function. These middleware functions are called in the order they are provided, and can be used to modify the request or response objects, or to perform additional logic before or after the route's main handler function.

Here is an example of how to add route scope middleware in the `Lightning` framework:

```
app.Get("/ping",
   func(ctx *lightning.Context) {
      // implement your routing middleware logic
      ctx.Next()
   },
   func(ctx *lightning.Context) {
      ctx.JSON(http.StatusOK, lightning.Map{
         "message": "pong",
      })
   })
```

In this example, the first middleware function is called before the route handler.

## Routing Group Scope

Routing Group scope middleware can be used to add functionality to a group of routes within an application.

```go
// create a new group of routes for "/api"
group := app.Group("/api")

group.Use(func(ctx *lightning.Context) {
   // write your middleware logic
   ctx.Next()
})
group.Use(func(ctx *lightning.Context) {
   // write your middleware logic
   ctx.Next()
})

group.Get("/ping", func(ctx *lightning.Context) {
   ctx.Text(http.StatusOK, "pong")
})
```

In this example, two middleware functions are added to the `/api` route group using the `group.Use()` method. These middleware functions are called before and after the group's route handlers, and can modify the request or response objects, or perform additional logic.

By using routing group scope middleware, developers can add functionality to a group of routes without duplicating code across each individual route.

## Conclusion

This document explains how to use middleware in `Lightning` to handle logic common to multiple endpoints. Middleware can be added globally or to specific routes, and can modify requests and responses. It allows developers to add functionality without duplicating code across multiple endpoints.
