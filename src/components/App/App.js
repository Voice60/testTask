import { Provider } from 'react-redux';
import store from '../../redux/store';
import FilmsTable from '../FilmsTable/FilmsTable';
import MoviesSearchForm from '../MoviesSearchForm/MoviesSearchForm';
import styles from './App.module.scss';

function App() {
  return (
    <Provider store={store}>
      <div className={styles.wrap}>
        <h1 className={styles.appTitle}>Films</h1>
        <MoviesSearchForm />
        <FilmsTable />
      </div>
    </Provider>
  )
}

export default App;
