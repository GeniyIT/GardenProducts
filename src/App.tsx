import { Provider } from 'react-redux';
import { store } from './store';
import AppRoutes from './routes';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import './styles/global.css'; // Общие стили

export function App() {
  return (
    <Provider store={store}>
      <div className="app-container">
        <Header />
        <main>
          <AppRoutes />
        </main>
        <Footer />
      </div>
    </Provider>
  );
}
