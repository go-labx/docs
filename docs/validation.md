# Validation

`Lightning` is a Go web framework that provides a lot of useful features, including validating user input. In this document, we will explore how to use the validating feature of the `Lightning` framework.

## Validating User Input

Validating user input is an essential part of any web application. It ensures that the data entered by the user is correct and meets the requirements of the application. `Lightning` provides a simple and easy-to-use way to validate user input.

### Defining a Struct

To validate user input, we first need to define a struct that represents the data we want to validate. In the example code provided, we have defined a `User` struct that contains fields for user data.

```go
type User struct {
	Name     string `validate:"required" json:"name"`
	Password string `validate:"required,min=8,max=32" json:"password"`
	Email    string `validate:"required,email" json:"email"`
}
```

In this struct, each field has a validate tag that specifies the validation rules for that field. In this case, the `Name` field is required, the `Password` field is required and must be between 8 and 32 characters long, and the `Email` field is required and must be a valid email address.

You can find the detailed descriptions of the `validations` used in the fields contained on the structs below:

* [Detailed docs](https://pkg.go.dev/github.com/go-playground/validator?tab=doc)

### Binding and Validating User Input

Once you have defined your validation struct, you can use it to validate incoming request data. In the following example, we use the `JSONBody` method to bind and validate the request body to the User struct:

```go
app.Post("/validate", func(ctx *lightning.Context) {
    // Create a new User struct
    var user = &User{}

    // Bind and validate the request body to the User struct
    if err := ctx.JSONBody(user, true); err != nil {
        // If there is an error, return it as JSON
        ctx.Fail(-1, err.Error())
        return
    }

    // If there is no error, return the User struct as JSON
    ctx.Success(user)
})
```

In this route, we create a new `User` struct and bind the request body to it using the `JSONBody` method. This method automatically validates the input based on the validation tags defined in the struct.

If there is an error during validation, the `JSONBody` method returns an error, which we can handle by returning a JSON response with the error message.

If there is no error during validation, we can return the User struct as a JSON response.

## Conclusion

Validating user input is an essential part of any web application. `Lightning` provides a simple and easy-to-use way to validate user input using struct tags. By defining a struct with validation tags and using the `JSONBody` method, we can easily bind and validate user input in our routes.