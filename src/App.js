import './App.css';
import { createBrowserRouter, RouterProvider, BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Add from './pages/Add';
import List from './pages/List';


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>
    },
    {
      path: "/add",
      element: <Add/>
    },
    {
      path: "/list",
      element: <List/>
    }
  ])

  return (
        <div className="App">
          <RouterProvider router={router}/>
        </div>

  );
}

export default App;
