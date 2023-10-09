import classes from "./Contact.module.css";
import { HiOutlineMail } from "react-icons/hi";
import { SiMessenger } from "react-icons/si";
import { AiFillPhone } from "react-icons/ai";
import useContactForm from "./ContactForm";

const Contact = () => {
  const { form, sendEmail } = useContactForm();

  return (
    <section id="contact">
      <h5>Get in Touch</h5>
      <h2>Contact</h2>
      <div className={`container ${classes.contactContainer}`}>
        <div className={classes.contactOptions}>
          <article className={classes.contactOption}>
            <HiOutlineMail className={classes.contactIcon} />
            <h4>Email</h4>
            <h5>giorgi.zhorzholiani.1@btu.edu.ge</h5>
            <a href="mailto:giorgi.zhorzholiani.1@btu.edu.ge">Send me email</a>
          </article>

          <article className={classes.contactOption}>
            <SiMessenger className={classes.contactIcon} />
            <h4>Messenger</h4>
            <h5>Zhorzholiani Giorgi</h5>
            <a
              href="https://m.me/profile.php?id=100009651918102"
              target="_blank"
            >
              Send me message
            </a>
          </article>

          <article className={classes.contactOption}>
            <AiFillPhone className={classes.contactIcon} />
            <h4>Phone</h4>
            <h5>+995 595-02-66-30</h5>
            <h5>+995 568-68-59-76</h5>
            <a
              href="https://api.whatsapp.com/send?phone+995595026630"
              target="_blank"
            >
              Call me
            </a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Enter Your Full Name"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Enter Your Email"
            required
          />
          <textarea
            rows={7}
            name="message"
            placeholder="Your Message"
            required
          />
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
