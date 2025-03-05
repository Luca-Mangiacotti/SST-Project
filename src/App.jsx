import { BrowserRouter, Routes, Route } from "react-router";
import HomePage from "./Pages/HomePage";
import DefaultLayout from "./Layout/DefaultLayout";




export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route element= {<DefaultLayout/>}>
        <Route path="/" element= {<HomePage/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
  );
}
