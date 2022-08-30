# SingleSpa - ModuleFederation failure example

The case is as follow:

1. `App1` uses module federation and exposes one component.
2. `App2` uses module federation to read the exposed component from `App1`

The above works as long as `single-spa` is not added to the projects. So `App2` will use the `App1` components.

But when `single-spa` is added, `App2` no longer works as standalone, it cannot apparently load the `App1` components anymore with the following error:
```
ChunkLoadError: Loading chunk vendors-node_modules_vue_vue-loader-v15_lib_runtime_componentNormalizer_js-node_modules_vueti-2692ba failed.
```

Also on the `root` project which is a `single-spa` container, it loads `App1` successfully but can't load `App2`.

