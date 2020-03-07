## IDE
### vscode
git clone 중에 node_modules 크기가 커서 .gitignore 어쩌구 나오면 무시
### android studio(version >= 3.5.x)
SDK platforms -> Android 8.1 (Oreo) install 

## macOS

```
$ sudo npm link lib/
$ rm -rf lib/node_modules/base64-js lib/node_modules/buffer lib/node_modules/ieee754 lib/node_modules/regenerator-runtime
: android rebuild project(android studio -> .../chairApp/android open!)
$ react-native run-android
```

## windows10

```
: android clean project && rebuild project(android studio -> .../chairApp/android open -> 상단탭 build)
> react-native run-android
```
