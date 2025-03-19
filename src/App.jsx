import React, { useEffect } from "react";
import { motion } from "framer-motion";
import "./style.css";

function App() {
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    window.scrollTo(0, 0);
  }, []);

  const handleScroll = (e, targetId) => {
    e.preventDefault();
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      // Remove the hash from the URL:
      history.replaceState(null, "", window.location.pathname);
    }
  };

  return (
    <div className="font-sans bg-gray-100 text-gray-800 pt-24">
      {/* Header */}
      <header className="fixed w-full bg-blue-900 text-white p-6 top-0 left-0 z-50">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Instalatér</h1>
          <nav>
            <ul className="flex space-x-6">
              <li>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  href="#about"
                  onClick={(e) => handleScroll(e, "about")}
                  className="hover:text-orange-500 transition"
                >
                  O nás
                </motion.a>
              </li>
              <li>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  href="#services"
                  onClick={(e) => handleScroll(e, "services")}
                  className="hover:text-orange-500 transition"
                >
                  Služby
                </motion.a>
              </li>
              <li>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  href="#contact"
                  onClick={(e) => handleScroll(e, "contact")}
                  className="hover:text-orange-500 transition"
                >
                  Kontakt
                </motion.a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* O nás */}
      <motion.section
        id="about"
        className="py-20 bg-white"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold text-blue-900 mb-6">O mně</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Jsem zkušený instalatér a topenář s více než 10 lety praxe v oboru.
            Specializuji se na instalace a opravy topení, vodovodních potrubí a
            plynových zařízení. Můj cíl je poskytovat kvalitní a spolehlivé
            služby za rozumné ceny.
          </p>
        </div>
      </motion.section>

      {/* Služby */}
      <motion.section
        id="services"
        className="py-20 bg-gray-200"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto text-center max-w-5xl px-4">
          <motion.h2
            className="text-3xl font-semibold text-blue-900 mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Služby
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-xl hover:shadow-2xl transition">
              <h3 className="text-xl font-semibold text-blue-900 mb-4">
                Instalace topení
              </h3>
              <p className="text-gray-700">
                Nabízím instalace topných systémů, včetně podlahového topení a
                radiátorů. Zajišťuji efektivní a kvalitní řešení pro vaši
                domácnost.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-xl hover:shadow-2xl transition">
              <h3 className="text-xl font-semibold text-blue-900 mb-4">
                Opravy potrubí
              </h3>
              <p className="text-gray-700">
                Provádím opravy vodovodních a plynových potrubí, včetně výměny
                vadných částí. Rychlá a kvalitní oprava je pro mě prioritou.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-xl hover:shadow-2xl transition">
              <h3 className="text-xl font-semibold text-blue-900 mb-4">
                Údržba a revize
              </h3>
              <p className="text-gray-700">
                Provádím pravidelnou údržbu a revize topení a plynových zařízení
                pro zajištění jejich dlouhé životnosti a bezpečnosti.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-xl hover:shadow-2xl transition">
              <h3 className="text-xl font-semibold text-blue-900 mb-4">
                Nouzové opravy
              </h3>
              <p className="text-gray-700">
                Poskytuji rychlé havarijní zásahy a nouzové opravy v případě
                nečekaných problémů. Spolehněte se na profesionální přístup
                24/7.
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Kontakt */}
      <motion.section
        id="contact"
        className="py-20 bg-white"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto text-center">
          <motion.h2
            className="text-3xl font-semibold text-blue-900 mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Kontaktujte mě
          </motion.h2>
          <p className="text-lg text-gray-700 mb-8">
            Pokud máte zájem o mé služby, neváhejte mě kontaktovat. Jsem tu pro
            vás!
          </p>
          <div className="text-lg text-gray-700 mb-6">
            <p>
              Email:{" "}
              <a
                href="mailto:info@topenarstvi.cz"
                className="text-blue-900 hover:text-orange-500 transition"
              >
                info@topenarstvi.cz
              </a>
            </p>
            <p>
              Telefon: <strong>+420 123 456 789</strong>
            </p>
          </div>
          <p className="text-lg text-gray-700 mb-6">
            Můžete mě kontaktovat také na sociálních sítích:
            <a
              href="https://facebook.com"
              className="text-blue-900 hover:text-orange-500 transition ml-2"
            >
              Facebook
            </a>
            <a
              href="https://linkedin.com"
              className="text-blue-900 hover:text-orange-500 transition ml-2"
            >
              LinkedIn
            </a>
          </p>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-6 mt-auto">
        <div className="container mx-auto text-center">
          <p>
            &copy; 2025 All rights reserved | Vytvořeno{" "}
            <a
              href="https://www.vasekkolar.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              vasekkolar.com
            </a>{" "}
            |
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
