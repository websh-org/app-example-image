WebShellApp
  .manifest({
    "v": 0,
    "name": "Image Viewer Example App",
    "short_name": "Image Viewer",
    "version": "0.0.1",
    "icon": "icon.svg",
    "description": "The image viewer example app for WebShell ",
    "license": "MIT",
    "homepage": "https://github.com/websh-org/app-example-image#readme",
    "repository": "https://github.com/websh-org/app-example-image.git",
    "issues": "https://github.com/websh-org/app-example-image/issues",
    "api": {
      "file": {
        "open": ["inage"],
        "formats": {
          "inage": {
            "name": "Image File",
            "type": "image/png",
            "accept": "image/*",
            "encoding": "dataurl"
          }
        }
      }
    }
  })

const viewer = document.getElementById("viewer");

WebShellApp.command("file-open", function ({ format, content, type, extension }) {
  // you can do different things here based on the type, format and extansion
  viewer.src = content;
  
})
