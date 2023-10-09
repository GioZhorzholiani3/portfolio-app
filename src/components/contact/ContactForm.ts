import { useRef } from "react";
import emailjs from "emailjs-com";

function useContactForm() {
  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          "service_vykt3h7",
          "template_grp8da7",
          form.current,
          "ZhgixBcN7eKccU7e8"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );

      (e.currentTarget as HTMLFormElement).reset();
    }
  };

  return { form, sendEmail };
}

export default useContactForm;
