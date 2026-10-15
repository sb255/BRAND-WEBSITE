import { useState } from "react";
import { useForm } from "react-hook-form";
import useWeb3Forms from "@web3forms/react";

function ContactForm() {
  const [result, setResult] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const { submit } = useWeb3Forms({
    access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY,

    settings: {
      from_name: "Contact Team Groxifi",
      subject: "Contact form to get in touch",
    },

    onSuccess: (message) => {
      setResult(message || "Message sent successfully!");
      reset();
    },

    onError: (message) => {
      setResult(message || "Failed to send message.");
    },
  });

  async function onSubmit(data) {
    setResult("");
    await submit(data);
  }

  return (
    <div>
      <h2>Contact Us</h2>

      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            {...register("name", {
              required: "Name is required",
              minLength: {
                value: 2,
                message: "Name must have at least 2 characters",
              },
            })}
            placeholder="Enter your name"
          />
          {errors.name && (
            <p role="alert">{errors.name.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Enter a valid email address",
              },
            })}
            placeholder="Enter your email"
          />
          {errors.email && (
            <p role="alert">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            {...register("message", {
              required: "Message is required",
              minLength: {
                value: 10,
                message: "Message must have at least 10 characters",
              },
            })}
            placeholder="Write your message"
          />
          {errors.message && (
            <p role="alert">{errors.message.message}</p>
          )}
        </div>

        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
      </form>

      {result && <p role="status">{result}</p>}
    </div>
  );
}


export default ContactForm