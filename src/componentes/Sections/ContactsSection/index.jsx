import { IoIosMailOpen } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import styles from "./styles.module.scss";

export const ContactsSection = () => {
  return (
    <section id="contacts" className={styles.backgroundSection}>
      <div className="container">
        <div className={styles.flexBox}>
          <div className={styles.titleBox}>
            <h2 className="title two white">
              Let's set up a conversation and
              <span>
                <em> develop our creativity </em>
              </span>
              together?
            </h2>
            <p className="paragraph grey">
              Advertise your brand organically within Dribbble’s design
              inspiration feed.
            </p>
          </div>

          <div className={styles.contactsBox}>
            <div className={styles.whatsappContact}>
              <div>
                <FaWhatsapp size={25} />
              </div>

              <div>
                <h3 className="title three white">My phone</h3>
                <p className="paragraph grey">
                  I'm available for a voice chat, let's about creativity <br />
                  together?
                </p>
                <span className="title four white">Call Now</span>
              </div>
            </div>

            <div className={styles.emailContact}>
              <div>
                <IoIosMailOpen size={25} />
              </div>

              <div>
                <h3 className="title three white">My email</h3>
                <p className="paragraph grey">
                  Send me an email reporting feedbacks, <br />
                  suggestions and ideas
                </p>
                <span className="title four white">Send email now</span>
              </div>
            </div>

            <div className={styles.linkedinContact}>
              <div>
                <FaLinkedinIn size={25} />
              </div>

              <div>
                <h3 className="title three white">My LinkedIn</h3>
                <p className="paragraph grey">
                  We can create more constant interactions as well <br />
                  as a sharing network
                </p>
                <span className="title four white">Go to LinkedIn Now</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
