# Movie DB search query

### To run this app
Clone this repo
```bash
$ git clone https://github.com/Pipeman/movie-db.git
$ cd movie-db
```
Run an npm install, this will install all the dependencies set for this app
```bash
$ npm install
```
At this point you are ready to go. To run you app in your local machine do the following
```bash
$ npm run start
```
This command will run under the development mode, so do not use it in production.
To produce a build to deploy in production, run the following:
```bash
$ npm run build
```
This command will create a new `./dist` folder that will contain everything you need to deploy.

### Test
To run the tests type the following:
```bash
$ npm run test
```
There are unit and snapshot tests for every file.

## TODO
* Add styling: There is no CSS for this app (which make is quite ugly), basic webpack configuration to build it is already in place in `webpack.config.js`. The CSS files should be added in the same folder as the components and imported into the component `.js` file.
* Secure the API key: For the purpose of the task my API key is delivered with the app, but in a real world scenario this can't be an option. An ideal solution should be to have a backend in which the key is stored securely and that offers a generic endpoint (something like `http://my-awesome-movie-db.app/search/movie?query=`) to mask the real API call. This might also be stored under a login admission.
* Handle missing images: there are cases where the returned image path is `null`. There should be a default placeholder to handle this cases.
* Navigate into a film details: add a component for the film view page.
* Page navigation: at the moment it retrieves simple the first page, but there should be a button at the end of the page that gives you the ability to navigate between the pages. The searched movie is stored in the state of `FormContainer` under `searchedMovie` so it would be just a case to add a new state that stores the viewed page.
* Cache the results: it could add a cache to store the searches already made and serve them instead of asking the movieDB api. This could be maken with a backend but in a certain extent it could be made also in the frontend with some sort of memoization of the searched movie.
* Debounce the search or do it through a button: at the moment every change in the input will trigger a request to the api. I am not going to hide, it was done in this way only for development, initially...
* Better organise the components: I don't think it is a good idea to put the results of the search inside the form. Initially the form was chosen to give a bit of organization.
* Cure the accessibility of the app: make use of `ARIA` attributes and make the page navigable through the keyboard.
* Manage better the case of empty searched movie
* Manage errors from the server