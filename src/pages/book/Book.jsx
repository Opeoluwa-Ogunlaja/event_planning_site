import { Link } from "react-router-dom";
import { arrow_left as ArrowLeft } from "../../assets/icons/regular";
import "./book.scss";
import { absolutePath } from "../../data";
import { Formik } from "formik";
import * as Yup from "yup";
import { TextField } from "../../components/FormFields";

const bookingFormSchema = Yup.object().shape({
  firstName: Yup.string().min(2).max(20).required(),
  lastName: Yup.string().min(2).max(20).required(),
  email: Yup.string().email().required(),
});

const BookingForm = () => {
  const fieldClasses = "py-3 bg-white rounded-md";
  return (
    <Formik
      validationSchema={bookingFormSchema}
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
      }}
      onSubmit={(values, actions) => {

      }}
    >
      {({ handleSubmit, isSubmitting }) => {
        return (
          <form onSubmit={handleSubmit} className="mt-8 grid grid-cols-1 gap-3">
            <TextField
              field={{
                icon: <></>,
                placeholder: "Enter your first name...",
                type: "text",
                name: "firstName",
                label: "First name",
              }}
              key={"firstName"}
              className={fieldClasses}
            />

            <TextField
              field={{
                icon: <></>,
                placeholder: "Enter your last name...",
                type: "text",
                name: "lastName",
                label: "Last name",
              }}
              key={"lastName"}
              className={fieldClasses}
            />

            <TextField
              field={{
                icon: <></>,
                placeholder: "Enter your email...",
                type: "text",
                name: "email",
                label: "Email",
              }}
              key={"email"}
              className={fieldClasses}
            />

            <button
              type="submit"
              className="mt-4 w-full rounded-md bg-primary py-3 text-xl font-bold text-white hover:bg-opacity-70 transition-all"
            >
              Book Now
            </button>
          </form>
        );
      }}
    </Formik>
  );
};

const Book = () => {
  return (
    <div
      className="section-container relative grid min-h-[100dvh] grid-cols-1 grid-rows-1 bg-primary-blue-grad"
      style={{
        placeItems: "center",
        placeContent: "center",
      }}
    >
      <h1 className="hidden">Booking page</h1>
      <div className="container w-full rounded-md bg-white px-8 py-5 shadow-lg sm:w-1/2">
        <header className="flex flex-col gap-10">
          <div className="flex justify-between">
            <Link
              to={absolutePath("")}
              className="flex items-center gap-3 text-lg font-bold text-highlight-blue"
            >
              <ArrowLeft className="" /> Go back Home
            </Link>
          </div>
          <div className="space-y-1">
            <h2 className=" text-2xl font-bold text-normal">Booking Form</h2>
            <p className="max-w-[45ch] text-light">
              Fill this form in order to get started. This form is required for
              mutual trust between us.
            </p>
          </div>
        </header>
        <BookingForm />
      </div>
    </div>
  );
};

export default Book;
