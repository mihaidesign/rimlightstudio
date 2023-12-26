import UnderConstruction from "pages/under-construction";
import Header from "./components/nav/Header";
import { Home } from "./pages/home";
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";

// import UnderConstruction from "./pages/under-construction";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Header />}>
      <Route index element={<Home />} />
      <Route path="*" element={<UnderConstruction />} />
      {/* <Route path="login" element={<Login />} /> */}
      {/* <Route path="register" element={<Register />} /> */}
    </Route>
  )
);
const App = () => {
  // useEffect(() => {
  //   if (localStorage.theme === 'dark' || (!('theme' in localStorage))) {
  //     document.documentElement.classList.add('dark');
  //   } else {
  //     document.documentElement.classList.remove('dark');
  //   }

  // }, []);
  return (
    <div className="flex flex-col w-screen dark:bg-dark bg-grey-light items-center">
      <RouterProvider router={router} />
      {/* <Home /> */}
      {/* <UnderConstruction /> */}
    </div>
  );
};

export default App;
