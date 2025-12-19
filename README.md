To install dependencies:
```sh
bun install
```

To run:
```sh
bun run dev
```
Local: 
http://localhost:3000

Deployed: 
https://fastdeploy.deployor.dev/u/ident!5mfL4W/Haxmas-4/



Windows Powershell Commands:


POST- Create a new wish
<!--Local-->
```Invoke-RestMethod -Uri "http://localhost:3000/api/wishes" -Method POST -ContentType "application/json" -Body '{"item":"toy"}'```

```Invoke-RestMethod -Uri "http://localhost:3000/api/cookies" -Method POST -ContentType "application/json" -Body '{"item":"M&M"}'```

<!--Deployed-->
```Invoke-RestMethod -Uri "https://fastdeploy.deployor.dev/u/ident!5mfL4W/Haxmas-4/api/wishes" -Method POST -ContentType "application/json" -Body '{"item":"toy"}'```

```Invoke-RestMethod -Uri "https://fastdeploy.deployor.dev/u/ident!5mfL4W/Haxmas-4/api/cookies" -Method POST -ContentType "application/json" -Body '{"item":"M&M"}'```


PATCH - Mark wish as fulfilled
<!--Local-->
```Invoke-RestMethod -Uri "http://localhost:3000/api/wishes/1/fulfill" -Method PATCH```

```Invoke-RestMethod -Uri "http://localhost:3000/api/cookies/1/eat" -Method PATCH```

<!--Deployed-->
```Invoke-RestMethod -Uri "https://fastdeploy.deployor.dev/u/ident!5mfL4W/Haxmas-4/api/wishes/1/fulfill" -Method PATCH```

```Invoke-RestMethod -Uri "https://fastdeploy.deployor.dev/u/ident!5mfL4W/Haxmas-4/api/cookies/1/eat" -Method PATCH```


GET-List all wishes
<!--Local-->
``` Invoke-RestMethod -Uri"http://localhost:3000/Haxmas-4/api/wishes"```

``` Invoke-RestMethod -Uri"http://localhost:3000/Haxmas-4/api/cookies"```

<!--Deployed-->
``` Invoke-RestMethod -Uri"https://fastdeploy.deployor.dev/u/ident!5mfL4W/Haxmas-4/api/wishes"```

``` Invoke-RestMethod -Uri"https://fastdeploy.deployor.dev/u/ident!5mfL4W/Haxmas-4/api/cookies"```


DELETE - Delete a wish 
<!--Local-->
```Invoke-RestMethod -Uri "http://localhost:3000/api/wishes/1/" -Method DELETE```

```Invoke-RestMethod -Uri "http://localhost:3000/api/cookies/1/" -Method DELETE```

<!--Deployed-->
```Invoke-RestMethod -Uri "https://fastdeploy.deployor.dev/u/ident!5mfL4W/Haxmas-4/api/wishes/1" -Method DELETE```

```Invoke-RestMethod -Uri "https://fastdeploy.deployor.dev/u/ident!5mfL4W/Haxmas-4/api/cookies/1" -Method DELETE```
