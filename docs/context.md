# Context

The Context struct in the lightning represents the context of an HTTP request / response. It contains information about the request and response, as well as methods for manipulating them.

## Request

The Request of the Lightning framework's Context struct provides various methods for accessing and manipulating the HTTP request data. These methods allow developers to retrieve the raw request body or parse it as JSON, access URL parameters and query parameters, and access the HTTP method and URL path of the request.

It contains the following fields:

- `ctx.Method`: the HTTP method of the request
- `ctx.Path`: the URL path of the request

In addition to these fields, the Request also provides the following methods:

The URL parameters parsed from the request URL. These parameters may be used to access request parameters in the request.

### ctx.Param(key string)

returns the value of a URL parameter for a given key.

### ctx.Params()

returns all URL parameters for the reqest.

### ctx.Query(key string)

returns the value of a given query parameter.

### ctx.Queries()

returns all query parameters for the reqest.

### ctx.RawBody()

returns the raw origin request body.

### ctx.StringBody()

returns the origin request body as a string.

### ctx.JSONBody(v interface{})

parses the origin request body as JSON and stores the result in v.

### ctx.Header(key string)

returns the value of a given header.

### ctx.Headers()

returns all headers for the request

### ctx.Cookie(name string)

returns the cookie with the given name.

### ctx.Cookies()

returns all cookies from the request.

### ctx.UserAgent()

returns the user-agent of the request.

### ctx.Referer()

returns the referer of the request.

### ctx.RemoteAddr()

returns the remote address of the request.

## Response

### ctx.Status()

returns the HTTP status code of the response.

### ctx.SetStatus(code int)

sets the HTTP status code for the response.

### ctx.AddHeader(key, value string)

adds a new header key-value pair to the response.

### ctx.SetHeader(key string, value string)

sets the value of a given header in the response.

### ctx.DelHeader(key string)

deletes a given header from the response.

### ctx.SetCookie(key string, value string)

sets a new cookie with the given key-value pair.

### ctx.SetCustomCookie(cookie \*http.Cookie)

sets a custom cookie in the response.

### ctx.JSON(code int, obj interface{})

writes a JSON response with the given status code and object.

### ctx.Text(code int, text string)

writes a plain text response with the given status code and format.

### ctx.XML(code int, obj interface{})

writes an XML response with the given status code and object.

### ctx.File(filepath string)

writes a file as the response.

### ctx.Redirect(code int, url string)

redirects the request to a new URL with the given status code.

### ctx.Success(data interface{})

writes a successful response with the given data.

### ctx.Fail(code int, msg string)

writes a failed response with the given code and message.

## Contextual Data

Contextual Data in the `Lightning` framework is used to store custom data fields that can be accessed throughout the middleware chain, which can be passed along the entire middleware chain. The Contextual Data component includes the following methods:

### GetData(key string)

Returns the value of a custom data field for the context.

### SetData(key string, value interface{})

Sets the value of a custom data field for the context.

### DelData(key string)

Deletes a custom data field from the context.

By using the Context struct and its components, developers can easily manage the state of an HTTP request/response throughout the middleware chain.

## Conclusion

In summary, the Context struct and its components are essential to building web applications in Go with the Lightning framework. Understanding how to use the Request, Response, and Contextual Data components enables developers to build more robust and flexible web applications.
