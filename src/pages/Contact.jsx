import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import Sandra3 from "../img/portfolio/sandra_3.webp";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";
import { transition1, fadeUp } from "../transitions";
import { useTranslation } from "react-i18next";
import { EMAILJS_PUBLIC_KEY, EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID } from "../config/emailjs";

const MIN_SUBMIT_MS = 2500;

const Contact = () => {
  const { t } = useTranslation();
  const form = useRef();
  const mountedAt = useRef(0);

  useEffect(() => {
    mountedAt.current = Date.now();
  }, []);
  const [sending, setSending] = useState(false);

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

  const emailNotSentToast = (message) =>
    toast.error(message || t("email_error_message"), {
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
    if (sending) return;

    const data = new FormData(form.current);
    // Honeypot: bots fill it, humans never see it.
    if (data.get("company")) {
      form.current.reset();
      emailSentToast();
      return;
    }
    // Time-trap: instant submits are almost always bots.
    if (Date.now() - mountedAt.current < MIN_SUBMIT_MS) {
      emailNotSentToast(t("form_too_fast"));
      return;
    }
    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      emailNotSentToast(t("email_config_missing"));
      return;
    }

    setSending(true);
    emailjs
      .sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, form.current, EMAILJS_PUBLIC_KEY)
      .then(
        () => {
          form.current.reset();
          mountedAt.current = Date.now();
          setSending(false);
          emailSentToast();
        },
        (error) => {
          setSending(false);
          emailNotSentToast(error?.text ? undefined : undefined);
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
                  minLength={2}
                  maxLength={80}
                  autoComplete="name"
                  placeholder={t("name_placeholder")}
                />
                <input
                  className="input-editorial"
                  type="email"
                  name="user_email"
                  required
                  maxLength={120}
                  autoComplete="email"
                  placeholder={t("email_placeholder")}
                />
              </div>
              <textarea
                className="input-editorial min-h-[120px] resize-y"
                name="message"
                required
                minLength={10}
                maxLength={2000}
                placeholder={t("message_placeholder")}
              />
              {/* Honeypot — hidden from humans, deadly for bots */}
              <input
                type="text"
                name="company"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                placeholder={t("form_honeypot_label")}
                className="pointer-events-none absolute h-0 w-0 opacity-0"
              />
              <button type="submit" disabled={sending} className="btn-primary mt-8 self-start">
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
                <img
                  className="media-fill"
                  src={Sandra3}
                  alt={t("contact_me_title")}
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
