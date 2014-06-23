# grunt-newman

> Grunt plugin for [Newman](https://github.com/a85/Newman) - The collection runner for Postman

## Options

Default example:
```
newman: {
  default_options: {
    options: {
        iterationCount: 2,
        stopOnError: true,
        url: "https://www.getpostman.com/collections/6f4387fee8d33e05fb69"
    }
  }
}
```

Specify the number of collection iterations iterationCount
```
newman: {
  default_options: {
    options: {
        iterationCount: 2
    }
  }
}
```

Specify the stop on error setting. See [Newman documentation](https://github.com/a85/Newman) for specific usage of stop on error.
```
newman: {
  default_options: {
    options: {
        stopOnError: true
    }
  }
}
```

Specify the url of the collection. Useful for working in teams or groups.
```
newman: {
  default_options: {
    options: {
        url: "https://www.getpostman.com/collections/6f4387fee8d33e05fb69"
    }
  }
}
```

Specify the disk location of collection.
```
newman: {
  default_options: {
    options: {
        collection: "../../my_relative_path/collection.json"
    }
  }
}
```