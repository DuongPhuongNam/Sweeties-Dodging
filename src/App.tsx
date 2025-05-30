import { BrowserRouter } from "react-router";
import { App as AntApp, ConfigProvider } from "antd";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import MainRoutes from "./app/routes/MainRoutes/MainRoutes";

function App() {
  const queryClient = new QueryClient({
    defaultOptions: { queries: { refetchOnWindowFocus: false } },
  });

  // FIX: Đồng bộ basename với Vite base path
  const basename = process.env.NODE_ENV === 'production' 
    ? (import.meta.env.VITE_BASE_PATH || "/Sweeties-Dodging")
    : "/";

  return (
    <BrowserRouter basename={basename}>
      <AntApp component={false}>
        <ConfigProvider
          tag={{ className: "text-[14px] font-semibold py-1 px-2" }}
          theme={{
            token: {
              fontFamily: "Bai Jamjuree",
              colorLink: "#02cf5b",
              borderRadius: 4,
            },
          }}
        >
          <QueryClientProvider client={queryClient}>
            <MainRoutes />
          </QueryClientProvider>
        </ConfigProvider>
      </AntApp>
    </BrowserRouter>
  );
}

export default App;
