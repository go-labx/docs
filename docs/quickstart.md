---
sidebar_position: 1
---

# Quickstart

🚀🚀🚀 lightning is a lightweight and fast web framework for Go. It is designed to be easy to use and highly performant.

## Requirements

- Go 1.19 or above

## Installation

Once you have installed Go, you can install `lightning` using the following command:

```bash
go get github.com/go-labx/lightning
```

## Usage

To start building your web application, create a new file `app.go` and add the following code:

```go
package main

import (
	"net/http"

	"github.com/go-labx/lightning"
)

func main() {
	app := lightning.DefaultApp()

	app.Get("/ping", func(ctx *lightning.Context) {
		ctx.JSON(http.StatusOK, map[string]string{
			"message": "pong",
		})
	})

	app.Run()
}
```

In this example, we have created a simple web application that serves a JSON response at the URL `/ping`.

- The `lightning.DefaultApp()` function initializes a new instance of the framework.
- the `app.Get()` function defines a new route that responds to HTTP GET requests at the specified URL.
- The `ctx.JSON()` function is used to send a JSON response to the client.

## Running the Application

To run the application, use the following command:

```bash
go run app.go
```

## Additional Features

The go `lightning` framework has many additional features that make it a powerful tool for developing web applications, including:

- 🎨 Built-in JSON and HTML rendering
- ⚡ Fast routing, with routing algorithm implemented based on Trie tree
- 🔥 Support for grouping routes and applying middleware to specific groups
- 📝 Supports middleware, include global scope and route socpe middleware
- 🚀 Customizable 404 Not Found and 500 Internal Server Error handler functions
- 🎉 And much more!

To learn more about these features and how to use them, check out the official go `lightning` framework documentation.

## Conclusion

With this basic example and additional features, you can begin exploring the go `lightning` framework and building your own web applications.

🎉 🎉 🎉 Happy coding!
