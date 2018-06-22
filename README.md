## Resin Hiring Challenge


## Design Considerations

  22/6
  My first idea is to use only react state to manipulate whatever is needed in the application. Reason being that state
  doesn't have a ton of data. The side effect of this choice is that I'll need some callbacks in order to keep the components up-to-date among themselves.

  For the page structure, I'm inclined to have three main pieces: Header, Table and Slider.
  1. The header will contain static info only.
  2. The table will fetch data from the remote server and keep it as its internal state.
  3. The slider will be displayed after some lightbulb was selected from the table and updating its value will fire an patch http call.

### Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

You can find the most recent version of this guide [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

