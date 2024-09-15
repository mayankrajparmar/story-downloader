import ContactForm from "./ContactForm";

const ContactSection = () => {
  return (
    <section className="flex justify-center items-center pt-12 bg-dark-slate shadow-[0_0_76px_0_rgba(10,7,22,0.004)]">
      <div className="w-2/3">
        <ContactForm />
      </div>
    </section>
  );
};
export default ContactSection;
