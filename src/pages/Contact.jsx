import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import Sandra3 from "../img/portfolio/sandra_3.jpg";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";
import { transition1, fadeUp } from "../transitions";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();
  const form = useRef();

  const emailSentToast = () =>
    toast.success(t("email_sent_success_message"), {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "light",
    });

  const emailNotSentToast = () =>
    toast.error(t("email_error_message"), {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "light",
    });

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm("service_n34xk3l", "template_reha55o", form.current, "7e0LUvjNuAd9HHdsW").then(
      (result) => {
        console.log(`Email Sent with Code ${result.text}`);
        form.current.reset();
        emailSentToast();
      },
      (error) => {
        console.log(error.text);
        emailNotSentToast();
      },
    );
  };

  return (
    <motion.section
      initial={fadeUp.initial}
      animate={fadeUp.animate}
      exit={fadeUp.exit}
      transition={transition1}
      className="page-shell"
    >
      <div className="container-editorial">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12 lg:pt-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...transition1, delay: 0.08 }}
            className="flex flex-col items-start text-left lg:col-span-6"
          >
            <p className="eyebrow mb-4">{t("contact_eyebrow")}</p>
            <h1 className="h1 mb-5 text-[2.85rem] sm:text-[3.5rem] lg:text-[4.5rem]">
              {t("contact_me_title")}
            </h1>
            <div className="divider-line mb-6 ml-0" />
            <p className="body-copy mb-8 max-w-md">{t("contact_intro")}</p>

            <form ref={form} onSubmit={sendEmail} className="flex w-full max-w-lg flex-col gap-y-2">
              <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                <input
                  className="input-editorial"
                  type="text"
                  name="user_name"
                  required
                  placeholder={t("name_placeholder")}
                />
                <input
                  className="input-editorial"
                  type="email"
                  name="user_email"
                  required
                  placeholder={t("email_placeholder")}
                />
              </div>
              <textarea
                className="input-editorial min-h-[120px] resize-y"
                name="message"
                required
                placeholder={t("message_placeholder")}
              />
              <button type="submit" className="btn-primary mt-8 self-start">
                {t("send_button")}
              </button>
              <ToastContainer />
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...transition1, delay: 0.16 }}
            className="lg:col-span-6"
          >
            <div className="media-compose mx-auto max-w-md lg:ml-auto lg:mr-0 lg:max-w-lg">
              <div className="frame-soft aspect-[4/5]">
                <img className="media-fill" src={Sandra3} alt="" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
