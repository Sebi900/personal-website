import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
export function ContactForm() {
  const [state, handleSubmit] = useForm("moqoaqqj");
  if (state.succeeded) {
      return <p className="m-6">Thank you for your message!</p>;
  }
  return (
      <form onSubmit={handleSubmit} className='grid lg:grid-cols-2 lg:gap-4 gap-4 m-6 w-screen text-white'>
      <label htmlFor="email">
        Email Address
      </label>
      <input
      className="flex rounded-mg border p-2 bg-transparent"
        id="email"
        type="email" 
        name="email"
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <label>Text Message</label>
      <textarea className="border bg-transparent p-2"
        id="message"
        name="message"
      />
      <ValidationError 
      className="flex rounded-lg"
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <div>
          <button type="submit" disabled={state.submitting} className='bg-black p-2 rounded-lg px-4 border'>
            Submit
          </button>
      </div>
    </form>
  )}