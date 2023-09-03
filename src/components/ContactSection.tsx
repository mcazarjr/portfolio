import { forwardRef } from "react";
const ContactSection = forwardRef<HTMLElement, {}>((props, ref) => {
  console.log(props);
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
