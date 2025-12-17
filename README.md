To install dependencies:
```sh
bun install
```

To run:
```sh
bun run dev
```

open http://localhost:3000

https://fastdeploy.deployor.dev/u/ident!5mfL4W/Haxmas-4/

https://fastdeploy.deployor.dev/u/ident!5mfL4W/Haxmas-4/api/wishes


Windows Powershell Commands:

GET-List all wishes
``` Invoke-RestMethod -Uri"https://fastdeploy.deployor.dev/u/ident!5mfL4W/Haxmas-4/api/wishes"```

POST- Create a new wish
``` Invoke-RestMethod -Uri "https://fastdeploy.deployor.dev/u/ident!5mfL4W/Haxmas-4/api/wishes" -Method POST -ContentType "application/json" -Body '{"item":"toy"}'```

PATCH - Mark wish as fulfilled
``` Invoke-RestMethod -Uri "https://fastdeploy.deployor.dev/u/ident!5mfL4W/Haxmas-4/api/wishes/1/fulfill" -Method PATCH```

DELETE - Delete a wish 
``` Invoke-RestMethod -Uri "https://fastdeploy.deployor.dev/u/ident!5mfL4W/Haxmas-4/api/wishes/1" -Method DELETE```
