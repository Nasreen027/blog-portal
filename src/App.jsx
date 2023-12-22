import './App.css'
import { QueryClient, QueryClientProvider } from 'react-query';
import { ConfigProvider } from 'antd';
import { BrowserRouter } from 'react-router-dom';
import AuthenticatedRoutes from './routes/AuthenticatedRoutes';
import UnAuthenticatedRoutes from './routes/UnAuthenticatedRoutes';
import { AuthServices } from './services/auth.services';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnmount: false,
      refetchOnReconnect: false,
      retry: 0,
      staleTime: 5 * 1000, //cache expiry time
    },
  },
});

const antdDesignConfig = {
  token: { colorPrimary: "#00b96b" },
};

function App() {
 const authenticated = AuthServices.isUserLoggedIn();
  return (
    <>
    <ConfigProvider theme={antdDesignConfig}>
      <QueryClientProvider client={queryClient}>
        <div className="app">
          <BrowserRouter>
          {authenticated ? (<AuthenticatedRoutes/>) : (<UnAuthenticatedRoutes/>)} 
          </BrowserRouter>
        </div>
      </QueryClientProvider>
    </ConfigProvider>

    </>
  )
}

export default App;