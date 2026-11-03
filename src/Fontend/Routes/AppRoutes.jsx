import { Route, Routes } from "react-router-dom";
import PagesWithNavbar from "../Layouts/PagesWithNavbar";
import Home from "../Main/Home";
import Services from "../Main/Services";
import Styles from "../Main/Styles/Styles";
import Review from "../Main/Review/Review";
import Contact from "../Main/contact/contact";
import About from "../Main/About/About";
import Visit from "../Main/visit";
import Book from "../Main/book";
import Where from "../Main/where";
import Appointment from "../Main/Appointment";
import BookingSuccess from "../Main/BookingSuccess";
import Details from "../Main/details";
import Confirm from "../Main/confirm";
import Login from "../Main/Login";
import NotFound from "../Main/NotFound";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<PagesWithNavbar />}>
        <Route index element={<Login />} />
        <Route path="home" element={<Home />} />
        <Route path="services" element={<Services />} />
        <Route path="styles" element={<Styles />} />
        <Route path="reviews" element={<Review />} />
        <Route path="contact" element={<Contact />} />
        <Route path="about" element={<About />} />
        <Route path="home-visit" element={<Visit />} />
        <Route path="booking" element={<Book />} />
        <Route path="where" element={<Where />} />
        <Route path="appointment" element={<Appointment />} />
        <Route path="booking-success" element={<BookingSuccess />} />
        <Route path="details" element={<Details />} />
        <Route path="confirm" element={<Confirm />} />
        <Route path="login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
