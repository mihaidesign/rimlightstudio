import UnderConstruction from "pages/under-construction";
import Layout from "./components/nav/layout";
import { Home } from "./pages/home";
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="*" element={<UnderConstruction />} />
    </Route>
  )
);
const App = () => {
  return (
    <main className="flex flex-col w-screen dark:bg-dark bg-grey-light items-center">
      <RouterProvider router={router} />
    </main>
  );
};

export default App;
