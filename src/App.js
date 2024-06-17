import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import Layout from './Components/Layout/Layout';
import Dashboard from './Components/Dashboard/Dashboard';
import AdminPage from './Components/Admin/AdminPage';
//import CounterContextProvider from './Context/CounterContext';
import UserContextProvider from './Context/UserContext';
import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute';
import Error404 from './Components/404/Error404';


let routes = createBrowserRouter([
  { path: '/', element: <Layout />, children: [
    { index: true, path:'/',element: <Home />},
    { path: 'Dashboard', element: <ProtectedRoute><Dashboard /></ProtectedRoute>},
    { path: 'Admin', element: <ProtectedRoute><AdminPage /></ProtectedRoute> },
    {path:'Login' , element:<Login/>},
    {path:'Register' , element:<Register/>},
    { path: 'NotFound', element: <Error404 /> },
    { path: '*', element: <Error404 /> },
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
