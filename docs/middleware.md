# Middleware

In the Go programming language, middleware is used to handle logic that is common to multiple endpoints in an application. In the `lightning` framework, middleware can be used to add functionality to an application's global scope or to specific routes.

## Global Scope

Middleware can be added to the application's global scope using the `app.Use()` method. This function takes a middleware function as its argument, which is called for every request to the application. Global scope middleware is useful for adding functionality that is common to all routes in the application.

Here is an example of how to add global scope middleware in the `lightning` framework:

```go
app.Use(func(ctx *lightning.Context, next lightning.Next) {
   // middleware logic goes here
   next()
})
```

In this example, the middleware function is called for every request to the application. The `next()` function is used to pass control to the next middleware function in the chain.

## Route Scope

Route-specific middleware can be added to a specific route by passing additional middleware functions as arguments to the route's handler function. These middleware functions are called in the order they are provided, and can be used to modify the request or response objects, or to perform additional logic before or after the route's main handler function.

Here is an example of how to add route scope middleware in the `lightning` framework:

```
app.Get("/hello", func(ctx *lightning.Context) {
   // route handler logic goes here
}, func(ctx *lightning.Context, next lightning.Next) {
   // middleware logic goes here
   next()
})

```

In this example, the first middleware function is called before the route handler, and the second middleware function is called after the route handler. The `next()` function is used to pass control to the next middleware function in the chain.

## Conclusion

By using middleware in the `lightning` framework, developers can easily add functionality to their applications without duplicating code across multiple endpoints.
