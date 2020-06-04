# How to use Angular Elements in another Angular Project

1. [Create Angular Element Library](https://notiz.dev/blog/create-a-component-library-for-angular-and-the-web)
2. `ng add ngx-build-plus --project elements`
3. Run `ng build --project elements --prod --single-bundle --output-hashing none` to build the elements to a single bundle.
4. Update your `angular.json` to include elements in your app

```
..
"scripts": [
              "dist/elements/main-es5.js"
            ]
...
```

5. Define `schemas: [CUSTOM_ELEMENTS_SCHEMA]` in your `AppModule`.
6. Use it in your template `<lib-component></lib-component>`.
7. Profit 💆


---


[ngx-build-plus](https://github.com/manfredsteyer/ngx-build-plus)
