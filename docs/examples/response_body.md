# Response Body

In this article, we will explore the various response handling functions available in the Lightning framework. With these functions, we can easily set HTTP responses in a variety of formats, including `plain text`, `JSON`, `XML`, and `file downloads`. This makes the Lightning framework a powerful tool for building web applications in Go.

### Setting Plain Text Responses

To set a plain text response, we can use the `ctx.Text` function. This function takes two arguments: the HTTP status code and the text to be returned. For example, the following code sets a plain text response with the message "hello world":

```go
app.Get("/text", func(ctx *lightning.Context) {
    ctx.Text(http.StatusOK, "hello world")
})
```

### Setting JSON Responses

To set a JSON response, we can use the `ctx.JSON` function. This function takes two arguments: the HTTP status code and a struct to be serialized as JSON. For example, the following code sets a JSON response with a Person struct:

```go
type Person struct {
    Name string `xml:"name" json:"name"`
    Age  int    `xml:"age" json:"age"`
    City string `xml:"city" json:"city"`
}

app.Get("/json", func(ctx *lightning.Context) {
    ctx.JSON(http.StatusOK, &Person{
        Name: "zhangsan",
        Age:  20,
        City: "Hangzhou",
    })
})
```

### Setting XML Responses

To set an XML response, we can use the `ctx.XML` function. This function takes two arguments: the HTTP status code and a struct to be serialized as XML. For example, the following code sets an XML response with a Person struct:

```go
type Person struct {
    Name string `xml:"name" json:"name"`
    Age  int    `xml:"age" json:"age"`
    City string `xml:"city" json:"city"`
}

app.Get("/xml", func(ctx *lightning.Context) {
    ctx.XML(http.StatusOK, &Person{
        Name: "zhangsan",
        Age:  20,
        City: "Hangzhou",
    })
})
```

### Serving Files

To serve a file, we can use the `ctx.File` function. This function takes one argument: the path to the file to be served. For example, the following code serves the README.md file:

```go
app.Get("/file", func(ctx *lightning.Context) {
    err := ctx.File("./README.md")
    if err != nil {
        ctx.Fail(-1, err.Error())
    }
})
```
