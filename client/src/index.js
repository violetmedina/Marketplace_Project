import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {createStore} from 'redux'
import reducer from './store/reducer'
import { Provider } from 'react-redux';
import BaseLayout from './components/layout/BaseLayout';
import AddNewProduct from './components/AddNewProduct';
import FilterCategory from './components/FilterCategory';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import Test from './components/Test';

const store = createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <Provider store={store}>
        <Router>
            <BaseLayout>
                <Routes>
                    <Route path='/' element={<App />} />
                    <Route path='/addproduct' element={<AddNewProduct/>} />
                    <Route path='/category/:category' element={<FilterCategory/>} />
                    <Route path='/signin' element={<SignIn/>} />
                    <Route path='/signup' element={<SignUp/>} />
                    <Route path='/test' element={<Test/>} />
                </Routes>
            </BaseLayout>
        </Router>
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
