Share your Ultrastar screen over the web.

It uses Google Firebase for the initial bootstrapping, make sure these keys are set:

* `karaoke/background` - url to background image
* `karaoke/songlist` - array of `{artist, title, variants}` objects. `variants` itself is an array of `SongType` ints.
* `karaoke/websocket` - url of a websocket where application state is updated with. See `App.js` for valid keys.

## Commands

* `yarn start` - run the application in development mode
