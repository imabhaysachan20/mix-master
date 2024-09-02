import { createBrowserRouter, RouterProvider} from "react-router-dom";
import {Homelayout,Landing,Error,CockTail,About,Newsletter} from "./pages/index"
import Err from "./pages/Error"
import 'react-toastify/dist/ReactToastify.css';
import { QueryClient,QueryClientProvider } from '@tanstack/react-query';

import {loader as landingLoader} from "./pages/Landing"
import {loader as cocktailLoader} from "./pages/CockTail"
import {action as formAction} from "./pages/Newsletter"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
const queryClient = new QueryClient({
  defaultOptions:{
  queries:{
    staleTime:1000*60*5
  }
}
})

const router = createBrowserRouter([
  {
    path:'/',
    element:<Homelayout/>,
    errorElement: <Err />,
    
    children: [
      {
        index:true,
        element:<Landing/>,
        loader:landingLoader(queryClient)
      },
      {
        path:'/about',
        element:<About/>
      },
      {
        path:'/news',
        action:formAction,
        element:<Newsletter/>
      },
      {
        path:'/cocktail/:id',
        element:<CockTail/>,
        loader:cocktailLoader(queryClient)
      },
    ]
  }
 
])
const App = () => {
  return <QueryClientProvider client={queryClient}>
  <RouterProvider router={router}/>
  </QueryClientProvider>
  
};
export default App;
