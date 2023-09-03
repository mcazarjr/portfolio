import { forwardRef } from "react";
const ContactSection = forwardRef<HTMLElement, {}>((props, ref) => {
  return (
    <section
      id="contact"
      ref={ref}
    >
      ContactSection
    </section>
  );
});

export default ContactSection;
