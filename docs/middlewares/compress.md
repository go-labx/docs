# compress

This is a middleware for [lightning](https://github.com/go-labx/lightning) that provides compression for HTTP responses. It supports four compression algorithms: `Brotli`, `Deflate`, `Gzip`, and `Zstd`.

## Installation

To install the middleware, run the following command:

```bash
go get github.com/lightning-contrib/compress
```

## Usage

To use the middleware, import the package and add it to your lightning middleware chain:

```go
package main

import (
	"github.com/go-labx/lightning"
	"github.com/lightning-contrib/compress"
)

func main() {
	app := lightning.NewApp()

	app.Use(compress.Default())

	app.Get("/ping", func(ctx *lightning.Context) {
		ctx.Text(200, "hello world")
	})

	app.Run(":6789")
}
```

By default, the middleware will use the following compression levels:

- Brotli: brotli.DefaultCompression
- Deflate: flate.DefaultCompression
- Gzip: gzip.DefaultCompression

You can customize the compression levels by passing options to the New function:

```
app.Use(compress.New(
    compress.WithBrotliCompressionLevel(6),
    compress.WithDeflateCompressionLevel(9),
    compress.WithGzipCompressionLevel(1),
))
```

## Supported Encodings

The middleware supports the following encodings:

- br (Brotli)
- deflate (Deflate)
- gzip (Gzip)
- zstd (Zstd)

If the client sends a request with an Accept-Encoding header that includes one of these encodings, the middleware will compress the response using the corresponding algorithm.


## API Documentation

For detailed API documentation and usage examples, please refer to the [documentation](https://pkg.go.dev/github.com/lightning-contrib/compress).
