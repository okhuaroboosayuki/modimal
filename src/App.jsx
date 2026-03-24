import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";

import TopPageLoader, { PageLoader } from "./components/Loaders";
import AppLayout from "./components/AppLayout";
import NotFound from "./pages/NotFound";
import SignUp from "./features/auth/SignUp";
import Login from "./features/auth/Login";
import ResetPassword from "./features/auth/ResetPassword";
import UpdatePassword from "./features/auth/UpdatePassword";

const Home = lazy(() => import("./pages/Home"));
const SearchPage = lazy(() => import("./pages/SearchPage"));
const AllProducts = lazy(() => import("./pages/AllProducts"));
const TopsAndBlouses = lazy(() => import("./pages/TopsAndBlouses"));
const Pants = lazy(() => import("./pages/Pants"));
const DressesAndJumpsuits = lazy(() => import("./pages/DressesAndJumpsuits"));
const OutwearAndJackets = lazy(() => import("./pages/OutwearAndJackets"));
const Pullovers = lazy(() => import("./pages/Pullovers"));
const Tees = lazy(() => import("./pages/Tees"));
const ShortsAndSkirts = lazy(() => import("./pages/ShortsAndSkirts"));
const NewProducts = lazy(() => import("./pages/NewProducts"));
const Modiweek = lazy(() => import("./pages/Modiweek"));
const PlusSize = lazy(() => import("./pages/PlusSize"));
const BestSeller = lazy(() => import("./pages/BestSeller"));
const SingleProduct = lazy(() => import("./pages/SingleProduct"));
const AuthPage = lazy(() => import("./pages/AuthPage"));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000, // 60 seconds
      gcTime: 5 * 60 * 1000, // 5 minutes (garbage collection time)
      retry: 1, // Reduce retry attempts
      refetchOnWindowFocus: false, // Don't refetch when window regains focus
      refetchOnReconnect: true, // Refetch when reconnecting
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />

      <BrowserRouter>
        <TopPageLoader />
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route element={<AppLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="search" element={<SearchPage />} />
              <Route path="shop-all" element={<AllProducts />} />
              <Route path="tops-&-blouses" element={<TopsAndBlouses />} />
              <Route path="pants" element={<Pants />} />
              <Route
                path="dresses-&-jumpsuits"
                element={<DressesAndJumpsuits />}
              />
              <Route path="outwear-&-jackets" element={<OutwearAndJackets />} />
              <Route path="pullovers" element={<Pullovers />} />
              <Route path="tees" element={<Tees />} />
              <Route path="shorts-&-skirts" element={<ShortsAndSkirts />} />
              <Route path="new-in" element={<NewProducts />} />
              <Route path="modiweek" element={<Modiweek />} />
              <Route path="plus-size" element={<PlusSize />} />
              <Route path="best-seller" element={<BestSeller />} />
              <Route path="bundles" element={<AllProducts />} />
              <Route path="occasion-wear" element={<Modiweek />} />
              <Route path="matching-set" element={<Modiweek />} />
              <Route path="fall-collection" element={<AllProducts />} />
              <Route path="suiting" element={<NewProducts />} />
              <Route path="product/:productId" element={<SingleProduct />} />

              <Route element={<AuthPage />}>
                <Route path="create-account" element={<SignUp />} />
                <Route path="login" element={<Login />} />
                <Route path="update-password" element={<UpdatePassword />} />
                <Route path="reset-password" element={<ResetPassword />} />
              </Route>
            </Route>

            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>

      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: {
            duration: 3000,
            style: { background: "#f3fdfa", color: "#00966d" },
          },
          error: {
            duration: 3000,
            style: { background: "#fff2f2", color: "#c30000" },
          },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
            backgroundColor: "#f9f9f9",
            color: "#0c0c0c",
          },
        }}
      />
    </QueryClientProvider>
  );
}

export default App;
