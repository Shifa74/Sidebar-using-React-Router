import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/Root";
import BMICalculator from "./pages/BMI Calculator/BMICalculator";
import FAQ from "./pages/FAQ/FAQ";
import Github from "./pages/Github User Search/Github";
import ImageCarousel from "./pages/Image Carousel/ImageCarousel";
import QuoteGenerator from "./pages/Quote Generator/QuoteGenerator";
import ShoppingList from "./pages/Shooping List/ShoppingList";
import VideoPlayer from "./pages/Video Player/VideoPlayer";
import Calculator from "./pages/Calculator/Calculator";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "faq", element: <FAQ /> },
      { path: "image_carousel", element: <ImageCarousel /> },
      { path: "quote_generator", element: <QuoteGenerator /> },
      { path: "shopping_list", element: <ShoppingList /> },
      { path: "github", element: <Github /> },
      { path: "video_player", element: <VideoPlayer /> },
      { path: "bmi_calculator", element: <BMICalculator /> },
      { path: "calculator", element: <Calculator /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
