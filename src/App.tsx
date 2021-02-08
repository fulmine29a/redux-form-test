import React from 'react';
import './styles/App.sass';
import {Provider} from 'react-redux'
import {store} from "./store";
import {TestForm} from "./components/blocks/TestForm/TestForm";

function App() {
  return (
    <Provider store={store}>
      <main className="container">
        <div className="row">
          <TestForm/>
        </div>
      </main>
    </Provider>
  );
}

export default App;
