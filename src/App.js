import store from "./Redux/store";
import Main from "./Pages/Main";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}

export default App;
