"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Send } from "lucide-react";

const crops = ["Пшеница", "Царевица", "Слънчоглед", "Ечемик", "Рапица", "Друго"];

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    // Статична демонстрация — тук по-късно ще се закачи бекенд/имейл.
    setSent(true);
  }

  return (
    <div className="rounded-[2rem] border border-forest-900/10 bg-cream p-7 shadow-soft sm:p-9">
      <AnimatePresence mode="wait">
        {sent ? (
          <motion.div
            key="done"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center py-10 text-center"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-forest-600 text-cream">
              <Check className="h-7 w-7" />
            </div>
            <h3 className="mt-5 font-display text-2xl text-forest-900">
              Благодарим!
            </h3>
            <p className="mt-2 max-w-sm text-sm text-forest-800/70">
              Получихме запитването ви. Търговец от екипа ще се свърже с вас до
              един работен ден.
            </p>
            <button
              onClick={() => setSent(false)}
              className="mt-6 text-sm font-semibold text-forest-700 underline underline-offset-4"
            >
              Ново запитване
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onSubmit={handleSubmit}
            className="grid gap-5"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Име и фамилия" name="name" required />
              <Field label="Стопанство / фирма" name="company" />
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Телефон" name="phone" type="tel" required />
              <Field label="Имейл" name="email" type="email" />
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="text-sm">
                <span className="font-medium text-forest-900">Култура</span>
                <select
                  name="crop"
                  className="mt-1.5 w-full rounded-xl border border-forest-900/15 bg-cream px-4 py-2.5 text-sm outline-none focus:border-wheat-500"
                >
                  {crops.map((c) => (
                    <option key={c}>{c}</option>
                  ))}
                </select>
              </label>
              <Field label="Ориентировъчно количество (т)" name="qty" type="number" />
            </div>
            <label className="text-sm">
              <span className="font-medium text-forest-900">Съобщение</span>
              <textarea
                name="message"
                rows={4}
                className="mt-1.5 w-full resize-none rounded-xl border border-forest-900/15 bg-cream px-4 py-2.5 text-sm outline-none focus:border-wheat-500"
                placeholder="Разкажете накратко какво търсите — реколта, срок, регион."
              />
            </label>
            <label className="flex items-start gap-2.5 text-xs text-forest-800/70">
              <input type="checkbox" required className="mt-0.5 accent-forest-700" />
              Съгласен съм личните ми данни да бъдат обработени за целите на
              запитването.
            </label>
            <button
              type="submit"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-forest-900 px-7 py-3.5 text-sm font-semibold text-cream transition-transform duration-300 hover:-translate-y-0.5 hover:bg-forest-800"
            >
              Изпрати запитване
              <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}

function Field({ label, name, type = "text", required }) {
  return (
    <label className="text-sm">
      <span className="font-medium text-forest-900">
        {label}
        {required && <span className="text-wheat-600"> *</span>}
      </span>
      <input
        type={type}
        name={name}
        required={required}
        className="mt-1.5 w-full rounded-xl border border-forest-900/15 bg-cream px-4 py-2.5 text-sm outline-none focus:border-wheat-500"
      />
    </label>
  );
}
