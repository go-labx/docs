# Cookie

In this article, we will explore how to use Lightning's cookie functionality to manage cookies in your web application.

## Setting a Cookie

To set a cookie in Lightning, you can use the `SetCookie` method of the Context object. This method takes two arguments: the name of the cookie and its value.

```go
ctx.SetCookie("sid", "sid:xxxxxxxxxx")
```

This will set a cookie named "sid" with the value "sid:xxxxxxxxxx". The cookie will be sent to the client in the response headers.

You can also set additional options for the cookie, such as the `expiration time`, `the domain`, and `the path`. To do this, you can use the `http.Cookie` struct and pass it to the `SetCustomCookie` method.

```go
ctx.SetCustomCookie(&http.Cookie{
    Name:  "sessionId",
    Value: "sessionId:xxxxxxxxxx",
    Path:  "/",
})
```

This will set a cookie named "sessionId" with the value "sessionId:xxxxxxxxxx", and a path of "/".

## Retrieving a Cookie

To retrieve a cookie in Lightning, you can use the `Cookie` method of the Context object. This method takes the name of the cookie as an argument and returns its value.

```go
cookie := ctx.Cookie("sid")
```

This will retrieve the value of the "sid" cookie.

You can also retrieve all cookies sent by the client using the `Cookies` method.

```go
cookies := ctx.Cookies()
```

This will retrieve all cookies sent by the client.

## Code Example

The full sample code is as follows：


```go
package main

import (
	"fmt"
	"net/http"

	"github.com/go-labx/lightning"
)

func main() {
	app := lightning.NewApp()

	app.Get("/ping", func(ctx *lightning.Context) {
		// get the value of the "sid" cookie
		cookie := ctx.Cookie("sid")
		fmt.Println(cookie)

		// get all cookies
		cookies := ctx.Cookies()
		fmt.Println(cookies)

		// set a new cookie
		ctx.SetCookie("sid", "sid:xxxxxxxxxx")

		// set a custom cookie
		ctx.SetCustomCookie(&http.Cookie{
			Name:  "sessionId",
			Value: "sessionId:xxxxxxxxxx",
			Path:  "/",
		})

		ctx.JSON(http.StatusOK, map[string]string{
			"message": "pong",
		})
	})

	app.Run()
}
```
