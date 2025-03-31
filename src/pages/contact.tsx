import { ContactForm } from "../components/ContactForm";
import Footer from "../components/shared/Footer";

export interface IFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  comments: string;
}

export interface IFormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  comments?: string;
}

export const Contact = () => {
  return (
    <>
      <ContactForm />
      <Footer />
    </>
  );
};
