import { Route, Routes } from 'react-router-dom';
import './globals.css';
import AuthLayout from './_auth/AuthLayout';
import SignInForm from './_auth/SignInForm';
import SignUpForm from './_auth/SignUpForm';
import RootLayout from './_root/RootLayout';
import Home from './_root/pages/Home';

const App = () => {
    return (
        <main className='flex h-screen'>
            <Routes>
                <Route element={<AuthLayout/>}>
                    <Route path='/sign-in' element={<SignInForm/>}/>
                    <Route path='/sign-up' element={<SignUpForm/>}/>
                </Route>
                <Route element={<RootLayout/>}>
                    <Route index element={<Home/>}/>
                </Route>
            </Routes>
        </main>
    );
};

export default App;