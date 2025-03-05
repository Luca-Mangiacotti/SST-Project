import { BrowserRouter, Routes, Route } from "react-router";
//import del layout
import DefaultLayout from "./Layout/DefaultLayout";
//import dei componenti
import HomePage from "./Pages/HomePage";
import TravelDetails from "./Pages/TravelDetails";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/detail/:id" element={<TravelDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
