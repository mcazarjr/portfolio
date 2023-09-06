import emailjs from "@emailjs/browser";
import { useRef } from "react";

const ContactForm = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const formSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = formRef.current;

    if (!form) return;

    emailjs
      .sendForm(
        "service_2stylnw",
        "template_6rbhuio",
        form,
        "8l-ZM6hweqX5G3DwL"
      )
      .then(
        (result) => {
          console.log(result.text);
          form.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <form
      ref={formRef}
      className="flex flex-col gap-4 w-full"
      onSubmit={formSubmitHandler}
    >
      <div>
        <label
          htmlFor="user_name"
          className="sr-only"
        >
          Name
        </label>
        <input
          type="text"
          name="user_name"
          id="user_name"
          placeholder="Name"
          className="w-full border border-primary rounded-md p-2"
          required={true}
        />
      </div>
      <div>
        <label
          htmlFor="user_email"
          className="sr-only"
        >
          Email
        </label>
        <input
          type="email"
          name="user_email"
          id="user_email"
          placeholder="Email"
          className="w-full border border-primary rounded-md p-2"
          required={true}
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="sr-only"
        >
          Message
        </label>
        <textarea
          name="message"
          id="message"
          placeholder="Message"
          className="w-full border border-primary rounded-md p-2 h-44"
          required={true}
        ></textarea>
      </div>
      <button
        type="submit"
        className="w-full bg-primary text-white rounded-md p-2 max-w-[10rem] self-end
            hover:bg-secondary transition-colors duration-300 ease-in-out"
      >
        Send
      </button>
    </form>
  );
};

export default ContactForm;
