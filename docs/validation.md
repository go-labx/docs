# Validation

## Defining a Struct for Validation

To use validation in `Lightning`, you need to define a struct that represents the data you want to validate. For example, let's say you want to validate user data that includes a name, password, and email. You can define a struct like this:

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

## Binding and Validating Request Data

Once you have defined your validation struct, you can use it to validate incoming request data. In the following example, we use the `BindAndValidate` method to bind and validate the request body to the User struct:

```go
app.Post("/validate", func(ctx *lightning.Context) {
    // Create a new User struct
    var user = &User{}

    // Bind and validate the request body to the User struct
    if err := ctx.BindAndValidate(user); err != nil {
        // If there is an error, return it as JSON
        ctx.JSON(http.StatusOK, lightning.Map{
            "err": err.Error(),
        })
        return
    }

    // If there is no error, return the User struct as JSON
    ctx.JSON(http.StatusOK, lightning.Map{
        "user": user,
    })
})
```

In this example, we create a new User struct and then use the `BindAndValidate` method to bind and validate the request body to the struct. If there is an error, we return it as JSON. If there is no error, we return the User struct as JSON.

## Conclusion

Validation is an important feature in web development, and `Lightning` makes it easy to validate incoming request data. By defining a validation struct and using the `BindAndValidate` method, you can ensure that your application only processes valid data.

