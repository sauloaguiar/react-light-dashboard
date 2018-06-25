## Resin Hiring Challenge


### Design Considerations

  22/6
  My first idea is to use only react state to manipulate whatever is needed in the application. Reason being that state
  doesn't have a ton of data. The side effect of this choice is that I'll need some callbacks in order to keep the components up-to-date among themselves.

  For the page structure, I'm inclined to have three main pieces: Header, Table and Slider.
  1. The header will contain static info only.
  2. The table will fetch data from the remote server and keep it as its internal state.
  3. The slider will be displayed after some lightbulb was selected from the table and updating its value will fire an patch http call.

  24/6
  I actually decided to move the http calls to the App component. My motivation is that the App component will serve as the
  only data host. Other components like Table and Slider will receive data as props and callbacks to update data back on the App component.

  The Table and the Slider component will be displayed only after data has been loaded.
  Even after the loading, the Slider won't be displayed. Only after the user clicks on a specific row the Slider will appear.
  I'm assuming that the id's from each lightbulb will be positive integers only as I have set 0 as the default value for
  selectedRow. Slider's range will go from 1 to 100 using 1 as step. Even though the UI gets updated as the user plays with the Slider, only after the mouse leaves the Slider the http call will be fired.

### References
  Some weblinks that were helpful throught the development
  - https://engineering.musefind.com/react-lifecycle-methods-how-and-when-to-use-them-2111a1b692b1
  - https://scotch.io/tutorials/how-to-use-the-javascript-fetch-api-to-get-data
  - https://medium.freecodecamp.org/the-right-way-to-test-react-components-548a4736ab22

### Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

You can find the most recent version of this guide [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

