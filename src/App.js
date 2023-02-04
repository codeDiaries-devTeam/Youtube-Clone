import { Provider } from 'react-redux';
import './App.css';
<<<<<<< HEAD
=======
import store from './redux/app/store';
>>>>>>> 93c2bf3f634f8218475fd4f4840c43acaba7b80a
import AppRouter from './router/AppRouter';

function App() {
  return (
<<<<<<< HEAD
    <>
    <AppRouter/>
    </>
=======
    <Provider store={store}>
      <AppRouter />
    </Provider>
>>>>>>> 93c2bf3f634f8218475fd4f4840c43acaba7b80a
  );
}

export default App;
