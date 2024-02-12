"use client";

import { useState } from "react";

export default function ContactForm() {
  //variables and setters for variables about loading and labels for sent and error
  const [loading, setLoading] = useState(false);
  const [sentMessage, setSentMessage] = useState("");
  const [theError, setTheError] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    setLoading(true);

    console.log(name, email, message);

    //sending the data to the api as json
    const response = await fetch("./api/contact-form", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, message }),
    });

    const resData = await response.json();

    if (resData?.success) {
      console.log(resData.message);
      setLoading(false);
      setSentMessage("Message sent successfully!");
    }

    if (resData?.success == false) {
      console.log("Error sending message");
      console.log(resData.message);
      setLoading(false);
      setTheError("Error sending message. Please try again later!");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="grid font-display text-sm md:text-lg xl:text-2xl"
    >
      <input
        type="text"
        name="name"
        value={name}
        placeholder="Name"
        required
        onChange={(e) => setName(e.target.value)}
        minLength={2}
        className="p-2 mx-2 border-4 border-bsg rounded-md shadow-lg text-eerie focus:invalid:border-eerie focus:outline-none focus:valid:border-hugger focus:shadow-hugger focus:shadow-sm"
      />
      <input
        type="email"
        name="email"
        value={email}
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
        required
        className="mx-2 my-3 md:my-5 p-2 border-4 border-bsg rounded-md shadow-lg text-eerie focus:invalid:border-eerie focus:outline-none focus:valid:border-hugger focus:shadow-hugger focus:shadow-sm"
      />
      <textarea
        name="message"
        value={message}
        placeholder="Message"
        onChange={(e) => setMessage(e.target.value)}
        required
        minLength={5}
        maxLength={1000}
        rows={5}
        className="p-2 mx-2 mb-3 md:mb-5 border-4 border-bsg rounded-md shadow-lg text-eerie focus:invalid:border-eerie focus:outline-none focus:valid:border-hugger focus:shadow-hugger focus:shadow-sm"
      />
      <div className="flex flex-row justify-start">
        <button
          type="submit"
          disabled={loading}
          className="text-center px-8 py-3 mx-2 w-max font-semibold border-2 border-plat text-plat rounded-md bg-gradient-to-tr from-bsg to-space shadow-xl hover:scale-105 hover:border-hugger hover:text-hugger disabled:bg-space disabled:text-eerie disabled:hover:scale-100 disabled:hover:border-space disabled:hover:shadow-none disabled:shadow-none hover:shadow-hugger hover:shadow-sm"
        >
          Contact Us
        </button>
        <label className="text-plat text-center px-1 py-3 font-semibold">
          {sentMessage}
        </label>
        <label className="text-plat text-left py-3 font-semibold">
          {theError}
        </label>
      </div>
    </form>
  );
}
