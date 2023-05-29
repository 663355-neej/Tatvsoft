import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {MainNavigation} from './component/MainNavigation';
import { ToastContainer } from 'react-toastify';
ReactDOM.render(<><ThemeProvider theme={theme}><BrowserRouter><Header/><main>
  <MainNavigation />
</main>
<Footer/>
</BrowserRouter>
  <ToastContainer />
</ThemeProvider></>, document.getElementById('root'));
