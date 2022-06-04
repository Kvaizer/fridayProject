import React from 'react';
import {Route, Routes} from 'react-router-dom';
import TestPage from '../../TestPage/TestPage';

export const PATH = {
    LOGIN_PAGE: '/login-page',
    REGISTRATION: '/registration',
    PROFILE_PAGE: '/profile-page',
    ERROR_404: '*/',
    PASSWORD_RECOVERY: '/password-recovery',
    ENTER_NEW_PASSWORD: '/enter-new-password',
    TEST_PAGE: '/test-page',
}

const AppRoutes = () => {
    return (
        <div>
            <div>
                <Routes>
                    <Route path={PATH.LOGIN_PAGE} element={<div>LOGIN PAGE</div>}/>
                    <Route path={PATH.REGISTRATION} element={<div>REGISTRATION</div>}/>
                    <Route path={PATH.PROFILE_PAGE} element={<div>PROFILE_PAGE</div>}/>
                    <Route path={PATH.ERROR_404} element={<div>ERROR_404</div>}/>
                    <Route path={PATH.PASSWORD_RECOVERY} element={<div>PASSWORD_RECOVERY</div>}/>
                    <Route path={PATH.ENTER_NEW_PASSWORD} element={<div>ENTER_NEW_PASSWORD</div>}/>
                    <Route path={PATH.TEST_PAGE} element={<div><TestPage/></div>}/>
                </Routes>
            </div>
        </div>
    );
};

export default AppRoutes;