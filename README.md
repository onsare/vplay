Application to stream videos build with react and redux.
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

This project is hosted in Heroku [here](https://vplay-smartduka.herokuapp.com).

## Installation

```
git clone https://github.com/onsare/vplay.git
cd into the cloned repo
run npm install (Install all the app dependencies)
run npm start (To run in dev mode)
run npm run build (To generate production build)
```

## Folder Structure

```
my-app/
  README.md
  node_modules/
  package.json
  static.json
  .env
  .gitignore
  public/
    assets/
    index.html
    favicon.ico
  src/
    components/
      forms/
        LoginForm.js
        RegisterForm.js
      pages/
        Categories.js
        Category.js
        Dashboard.js
        HomePage.js
        LoginPage.js
        ProfilePage.js
        RegisterPage.js
        SettingsPage.js
      partials/
        Banner.js
        Footer.js
        Header.js
        Navbar.js
      routes/
        GuestRoute.js
        ProtectedRoute.js
      states/
        loadingState.js
    redux/
      actions/
        categories.js
        user.js
        videos.js
      reducers/
        categories.js
        index.js
        user.js
        videos.js
      types.js
    utils/
      setAuthorizationHeader.js
    api.js
    App.css
    App.js
    index.css
    index.js

```
