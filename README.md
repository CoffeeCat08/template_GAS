# command shell

## set to not track by 'git'. 
  - [ ] .env
    ```sh
      git rm --cache .env
    ```
  - [ ] .clasp.json
    ```sh
      git rm --cache .clasp.json
    ```

## Install
  Install Node Packages. Command this.
  ```sh
    npm install
  ```

# Setting '.clasp.json' file.
```JSON
  "scriptId": "",
  "rootDir": "../../../dist/gas/xxx",
```
Set it according to your project.
```JSON
  "scriptId": "YOUR_PROJECT_GOOGLE_APP_ID",
  "rootDir": "../../../dist/gas/YOUR_PROJECT_NAME_FOLDER",
```

