"use client";

import Footer from "~/components/footer";
import { useState } from "react";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <main className="flex min-h-screen flex-col items-center bg-gradient-to-b from-indigo-900 to-purple-900">
      <div className="flex min-h-screen w-full max-w-4xl flex-col px-4">
        <div className="flex flex-grow flex-col items-center gap-12 py-16">
          <h1 className="text-center text-4xl font-bold text-white md:text-6xl">
            Contact <span className="text-purple-400">Us</span>
          </h1>

          <div className="w-full max-w-2xl">
            <h2 className="mb-6 text-center text-2xl font-bold text-white sm:text-left">
              Share Your Feedback
            </h2>
            {submitted ? (
              <div className="rounded-lg bg-purple-400/10 p-4 text-center text-white">
                Thank you for your feedback!
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-1 block text-sm text-gray-200"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full rounded-lg bg-white/10 px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="mb-1 block text-sm text-gray-200"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full rounded-lg bg-white/10 px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="mb-1 block text-sm text-gray-200"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    rows={4}
                    className="w-full rounded-lg bg-white/10 px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full rounded-lg bg-purple-500 px-4 py-2 font-semibold text-white transition-colors duration-200 hover:bg-purple-600"
                >
                  Submit Feedback
                </button>
              </form>
            )}
          </div>
        </div>

        <Footer />
      </div>
    </main>
  );
}
