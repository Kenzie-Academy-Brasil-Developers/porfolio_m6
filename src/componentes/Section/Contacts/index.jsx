import { IoIosMailOpen } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

export const Contacts = () => {
  return (
    <section>
      <h2>
        Let's set up a conversation and {""}
        <span>develop our creativity</span> {""}
        together?
      </h2>
      <p>
        Advertise your brand organically within Dribbble’s {""}
        design inspiration feed.
      </p>

      <div>
        <div>
          <FaWhatsapp />
        </div>
        <h3>My phone</h3>
        <p>
          I'm available for a voice chat, let's about creativity <br />
          together?
        </p>
        <span>Call Now</span>
      </div>

      <div>
        <div>
          <IoIosMailOpen />
        </div>
        <h3>My email</h3>
        <p>
          Send me an email reporting feedbacks, <br />
          suggestions and ideas
        </p>
        <span>Send email now</span>
      </div>

      <div>
        <div>
          <FaLinkedinIn />
        </div>
        <h3>My LinkedIn</h3>
        <p>
          We can create more constant interactions as well <br />
          as a sharing network
        </p>
        <span>Go to LinkedIn Now</span>
      </div>
    </section>
  );
};
