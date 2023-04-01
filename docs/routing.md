# Routing

`lightning` framework is a lightweight web framework that supports fast development, easy scalability, and high performance. In this article, we will discuss how to use the routing feature of the `lightning` framework.

## Basics

Basics are the most fundamental form of routing in the `lightning` framework. It supports various HTTP request methods such as GET, POST, PUT, DELETE, etc. Here’s an example of a GET request:

```go
app.Get("/ping", func(ctx *lightning.Context) {
    ctx.JSON(map[string]string{
        "message": "pong",
    })
})
```

## Route Parameters

Route Parameters are an advanced form of routing in the `lightning` framework. It allows you to define parameters in the route path and pass data through them. Here’s an example of a GET request:

```go
app.Get("/api/article/:articleId", func(ctx *lightning.Context) {
    articleId := ctx.Param("articleId")
    // implementation
})
```

In the examples above, `:articleId` is a parameter that can be accessed in the route handling function through `ctx.Param("articleId")`.

## Wildcards

Wildcards are another advanced form of routing in the `lightning` framework. It supports the use of a wildcard character to match any path. Here’s an example of a GET request:

```go
app.Get("/api/*", func(ctx *lightning.Context) {
    // implementation
})
```

In the example above, `*` is a wildcard character that matches any path.

## Conclusion

These are the three basic forms of routing in the `lightning` framework. Using these, you can create various complex routing rules. If you want to learn more about using the `lightning` framework, please refer to the official documentation.
