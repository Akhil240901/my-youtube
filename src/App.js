import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import store from './utils/store';
import { Provider } from 'react-redux';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Maincontainer from './components/Maincontainer';
import WatchPage from './components/WatchPage';


const appRouter=createBrowserRouter([
  {
    path:"/",
    element:<Body/>,
    children:[
      {
         path:"/",
         element:<Maincontainer/>
      },
      {
         path:"/watch",
         element:<WatchPage/>
      }
    ]
  }
])

function App() {
  return (
    
    <Provider store={store}>
       <Header/>
       <RouterProvider router={appRouter}/>
    </Provider>
       
   
  );
}

export default App;
