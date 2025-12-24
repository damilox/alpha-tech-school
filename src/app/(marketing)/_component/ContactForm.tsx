"use client";

import { useForm, ValidationError } from "@formspree/react";
import { Send, CheckCircle } from "lucide-react";

export function ContactForm() {
  
  const [state, handleSubmit] = useForm("maqwkqkk");

  if (state.succeeded) {
    return (
      <div className="bg-white p-8 border border-gray-100 rounded-2xl shadow-sm h-full flex flex-col items-center justify-center text-center">
        <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
          <CheckCircle size={32} />
        </div>
        <h3 className="text-2xl font-bold text-black mb-2">Message Sent!</h3>
        <p className="text-gray-500">
          We have received your message and will get back to you shortly.
        </p>
        <button 
          onClick={() => window.location.reload()} 
          className="mt-6 text-black font-semibold underline hover:text-gray-600"
        >
          Send another message
        </button>
      </div>
    );
  }

  
  return (
    <div className="bg-white p-8 border border-gray-100 rounded-2xl shadow-sm">
      <h3 className="text-2xl font-bold text-black mb-8">Send Us a Message</h3>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        
       
        <div className="space-y-2">
          <label className="text-sm font-semibold text-gray-700">Full Name</label>
          <input 
            id="name"
            type="text" 
            name="name" 
            required
            placeholder="Ademola Lukman"
            className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition"
          />
          <ValidationError prefix="Name" field="name" errors={state.errors} className="text-red-500 text-xs"/>
        </div>

        
        <div className="space-y-2">
          <label className="text-sm font-semibold text-gray-700">Email Address</label>
          <input 
            id="email"
            type="email" 
            name="email" 
            required
            placeholder="Enter Address"
            className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-500 text-xs"/>
        </div>

        
        <div className="space-y-2">
          <label className="text-sm font-semibold text-gray-700">Subject</label>
          <input 
            id="subject"
            type="text" 
            name="subject" 
            required
            placeholder="How can we help you?"
            className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition"
          />
          <ValidationError prefix="Subject" field="subject" errors={state.errors} className="text-red-500 text-xs"/>
        </div>

       
        <div className="space-y-2">
          <label className="text-sm font-semibold text-gray-700">Message</label>
          <textarea 
            id="message"
            name="message" 
            required
            rows={5}
            placeholder="Tell us more about your inquiry...."
            className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition resize-none"
          ></textarea>
          <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-500 text-xs"/>
        </div>

        {/* Submit Button */}
        <button 
          type="submit" 
          disabled={state.submitting}
          className="bg-black text-white font-bold py-4 px-8 rounded-full flex items-center gap-2 hover:bg-gray-800 transition disabled:opacity-50"
        >
          {state.submitting ? "Sending..." : "Send Message"}
          {!state.submitting && <Send size={18} />}
        </button>

      </form>
    </div>
  );
}