import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { Formik, ErrorMessage } from "formik";
import * as Yup from "yup"; 
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);

  return (
    <Formik
      initialValues={{ name: "", email: "", message: "" }}
      validationSchema={Yup.object().shape({
        name: Yup.string().required("Name is required"),
        email: Yup.string()
          .email("Invalid email")
          .required("Email is required"),
        message: Yup.string().required("Message is required"),
      })}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        setLoading(true);
        emailjs
          .send(
            import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
            {
              from_name: values.name,
              to_name: "Kartikey",
              from_email: values.email,
              to_email: "kartikeybajpai327@gmail.com",
              message: values.message,
            },
            import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
          )
          .then(
            () => {
              setLoading(false);
              alert(
                "Thank you. I will get back to you as soon as possible."
              );
              resetForm();
            },
            (error) => {
              setLoading(false);
              console.error(error);
              alert("Ahh, something went wrong. Please try again.");
            }
          );
        setSubmitting(false);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
      }) => (
        <form onSubmit={handleSubmit}>
          <div
            className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
          >
            <motion.div
              variants={slideIn("left", "tween", 0.2, 1)}
              className='flex-0.75 bg-black-100 p-8 rounded-2xl xl:w-[550px]'
            >
              <p className={styles.sectionSubText}>Get in touch</p>
              <h3 className={styles.sectionHeadText}>Contact.</h3>

              <div className='mt-12 flex flex-col gap-8'>
                <label className='flex flex-col'>
                  <span className='text-white font-medium mb-4'>Your Name</span>
                  <input
                    type='text'
                    name='name'
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="What's your good name?"
                    className={`bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium ${
                      touched.name && errors.name ? "border-red-500" : ""
                    }`}
                  />
                  <ErrorMessage
                    name="name"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </label>
                <label className='flex flex-col'>
                  <span className='text-white font-medium mb-4'>Your email</span>
                  <input
                    type='email'
                    name='email'
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="What's your web address?"
                    className={`bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium ${
                      touched.email && errors.email ? "border-red-500" : ""
                    }`}
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </label>
                <label className='flex flex-col'>
                  <span className='text-white font-medium mb-4'>Your Message</span>
                  <textarea
                    rows={7}
                    name='message'
                    value={values.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder='What you want to say?'
                    className={`bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium ${
                      touched.message && errors.message ? "border-red-500" : ""
                    }`}
                  />
                  <ErrorMessage
                    name="message"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </label>

                <button
                  type='submit'
                  className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
                  disabled={isSubmitting}
                >
                  {loading ? "Sending..." : "Send"}
                </button>
              </div>
            </motion.div>

            <motion.div
              variants={slideIn("right", "tween", 0.2, 1)}
              className='xl:flex-1 xl:h-auto md:h-550px h-[300px]'
            >
              <EarthCanvas />
            </motion.div>
          </div>
        </form>
      )}
    </Formik>
  );
};

export default SectionWrapper(Contact, "contact");
