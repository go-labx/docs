# Cookie

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

- To get a cookie, we use the `ctx.cookie()` method which returns the cookie with the given name.
- To retrieve all cookies, we can use the `ctx.Cookies()` method which returns a slice of all cookies.
- To set a new cookie, we use the `ctx.SetCookie()` method which takes in the name and value of the cookie as arguments.
- To set a custom cookie, we use the `ctx.SetCustomCookie()` method which takes in a pointer to an http.Cookie struct as an argument.
