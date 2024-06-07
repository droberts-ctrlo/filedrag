# File Drag Module

[![JS Tests](https://github.com/droberts-ctrlo/filedrag/actions/workflows/tests.yml/badge.svg)](https://github.com/droberts-ctrlo/filedrag/actions/workflows/tests.yml)

This module allows for simple drag and drop functionality for files. It is a simple module that allows for the user to drag and drop files into a designated area. This module is useful for any application that requires the user to upload files.

This is a jquery plugin. The definition of the options are as follows

```typescript
interface FileDragOptions {
    debug?: boolean; // If true, will log debug information to the console - default is false
    allowMultiple?: boolean; // If true, will allow multiple files to be uploaded - default is true
}
```

The module can be used as follows:

```typescript
$('#file-drag').fileDrag({
    debug: true,
    allowMultiple: false
});

$('#file-drag').on('onFileDrop', function(files) {
    console.log(files);
});
```

## Testing

Currently, due to Jest not working correctly with ESM, this has been removed, although unit tests do exist.
