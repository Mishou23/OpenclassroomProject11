import { configureStore } from '@reduxjs/toolkit'
import userLogin from './reducers/userlogin'
import userAccount from './reducers/useraccount.jsx'
import profilUpdate from './reducers/profilupdate.jsx'
const store = configureStore({
    reducer: {
        user: userLogin,
        userAccount: userAccount,
        userUpdate : profilUpdate,
    }

})

export default store;