import { useContext, useRef } from "react";
import NotificationContext from "../../store/NotificationContext";
import classes from "./newsletter-registration.module.css";

function NewsletterRegistration() {
  const emailRef = useRef();
  const notificationCtx = useContext(NotificationContext);

  function registrationHandler(event) {
    event.preventDefault();
    notificationCtx.showNotification({
      title: "Signing up...",
      message: "Registering your email!",
      status: "pending",
    });
    fetch("/api/newsletter", {
      method: "POST",
      body: JSON.stringify({
        email: emailRef.current.value,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        notificationCtx.showNotification({
          title: "Signed up successfully",
          message: "Registered your email!",
          status: "success",
        });
      });
  }

  return (
    <section className={classes.newsletter}>
      <h2>Sign up to stay updated!</h2>
      <form onSubmit={registrationHandler}>
        <div className={classes.control}>
          <input
            type="email"
            id="email"
            placeholder="Your email"
            aria-label="Your email"
            required
            ref={emailRef}
          />
          <button>Register</button>
        </div>
      </form>
    </section>
  );
}

export default NewsletterRegistration;
