import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import Layout from './Components/Layout/Layout';
import Dashboard from './Components/Dashboard/Dashboard'
//import CounterContextProvider from './Context/CounterContext';
import UserContextProvider, { UserContext } from './Context/UserContext';
import { useContext } from 'react';
import { useEffect } from 'react';
import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute';


let routes = createBrowserRouter([
  { path: '/', element: <Layout />, children: [
    { index: true, path:'/Home',element: <ProtectedRoute><Home /></ProtectedRoute>},
    { path: 'Dashboard', element: <ProtectedRoute><Dashboard /></ProtectedRoute>},
    // { path: 'Cart', element: <ProtectedRoute><Cart /></ProtectedRoute> },
    // { path: 'Categories', element: <ProtectedRoute><Categories /></ProtectedRoute>},
    // { path: 'Brands', element: <ProtectedRoute><Brands /></ProtectedRoute>},
    {path:'Login' , element:<Login/>},
    {path:'Register' , element:<Register/>},
  ] }
])

function App() {






  return <UserContextProvider>
    {/* <CounterContextProvider>
    </CounterContextProvider> */}
    <RouterProvider router={routes}></RouterProvider>
  </UserContextProvider>
  // <UserContextProvider>
  //   <CounterContextProvider>
  //     <RouterProvider router={routes}></RouterProvider>
  //   </CounterContextProvider>
  // </UserContextProvider>
  
  


}

export default App;
