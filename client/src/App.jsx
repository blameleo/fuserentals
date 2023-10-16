import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Booking from "./pages/Booking";
import Details from "./pages/Details";
import Payment from "./pages/Payment";
import Book from "./pages/Book";
import PaymentSuccess from "./pages/PaymentSuccess";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route exact path="/booking" element={<Booking />} />
          <Route exact path="/details" element={<Details />} />
          <Route exact path="/payment" element={<Payment />} />
          <Route exact path="/book" element={<Book />} />
          <Route exact path="/paysuccess" element={<PaymentSuccess />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
