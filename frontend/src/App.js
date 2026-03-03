import { useEffect, useState, useRef } from "react";
import "@/App.css";
import { Phone, MapPin, Instagram, Clock, ChevronDown, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Toaster } from "@/components/ui/sonner";
import { toast } from "sonner";

// Gallery images
const galleryImages = [
  { src: "/image1.jpeg", alt: "Diseño de uñas elegante", style: "Diseño Elegante" },
  { src: "/image2.jpeg", alt: "Uñas con arte floral", style: "Arte Floral" },
  { src: "/image3.jpeg", alt: "Manicure francesa", style: "Francesa Clásica" },
  { src: "/image4.jpeg", alt: "Uñas con glitter", style: "Glitter Deluxe" },
  { src: "/image5.jpeg", alt: "Diseño minimalista", style: "Minimalista" },
  { src: "/image6.jpeg", alt: "Uñas acrílicas", style: "Acrílico Premium" },
];

// Services data
const services = [
  { name: "Manicure Clásica", price: "Desde $15" },
  { name: "Manicure Spa", price: "Desde $25" },
  { name: "Uñas Acrílicas", price: "Desde $35" },
  { name: "Uñas de Gel", price: "Desde $30" },
  { name: "Nail Art Personalizado", price: "Desde $40" },
  { name: "Pedicure Completo", price: "Desde $25" },
];

// WhatsApp Icon Component
const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

// Navigation Component
const Navigation = ({ mobileMenuOpen, setMobileMenuOpen }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <>
      <nav
        data-testid="main-navigation"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "bg-[#FAF9F6]/95 backdrop-blur-md shadow-sm" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a
            href="#hero"
            onClick={(e) => { e.preventDefault(); scrollToSection("hero"); }}
            className="font-['Playfair_Display'] text-lg tracking-[0.2em] text-[#292524]"
            data-testid="nav-logo"
          >
            CLOR MAISON
          </a>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection("galeria")} className="nav-link" data-testid="nav-gallery">
              Galería
            </button>
            <button onClick={() => scrollToSection("servicios")} className="nav-link" data-testid="nav-services">
              Servicios
            </button>
            <button onClick={() => scrollToSection("contacto")} className="nav-link" data-testid="nav-contact">
              Contacto
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="mobile-menu-toggle"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${mobileMenuOpen ? "open" : ""}`} data-testid="mobile-menu">
        <button
          className="absolute top-6 right-6"
          onClick={() => setMobileMenuOpen(false)}
        >
          <X size={28} />
        </button>
        <button onClick={() => scrollToSection("galeria")} className="mobile-menu-link">
          Galería
        </button>
        <button onClick={() => scrollToSection("servicios")} className="mobile-menu-link">
          Servicios
        </button>
        <button onClick={() => scrollToSection("contacto")} className="mobile-menu-link">
          Contacto
        </button>
      </div>
    </>
  );
};

// Hero Section Component
const HeroSection = () => {
  return (
    <section
      id="hero"
      className="hero-section relative noise-overlay"
      data-testid="hero-section"
    >
      {/* Background Image */}
      <div className="absolute inset-0 opacity-10">
        <img
          src="https://images.unsplash.com/photo-1657020812486-770835e71378?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzMjV8MHwxfHNlYXJjaHwzfHxib3RhbmljYWwlMjBzaGFkb3clMjBvbiUyMGJlaWdlJTIwd2FsbCUyMGFlc3RoZXRpY3xlbnwwfHx8fDE3NzI1MTQyMjd8MA&ixlib=rb-4.1.0&q=85"
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 text-center px-6">
        {/* Small tagline */}
        <p
          className="font-['Manrope'] text-xs tracking-[0.3em] uppercase text-[#78716C] mb-6 animate-fade-in"
          data-testid="hero-tagline-top"
        >
          Estudio de Uñas Premium
        </p>

        {/* Main Logo */}
        <h1
          className="hero-logo text-5xl md:text-7xl lg:text-8xl mb-4 animate-fade-in-up"
          data-testid="hero-logo"
        >
          CLOR MAISON
        </h1>

        {/* Tagline */}
        <p
          className="hero-tagline text-lg md:text-xl mb-12 animate-fade-in-up delay-200"
          data-testid="hero-tagline"
        >
          El arte en tus manos
        </p>

        {/* Decorative line */}
        <div className="decorative-line mx-auto mb-12 animate-fade-in delay-300"></div>

        {/* CTA Button */}
        <Button
          onClick={() => {
            window.open("https://wa.me/522221812377?text=Hola,%20me%20gustaría%20agendar%20una%20cita", "_blank");
            toast.success("Redirigiendo a WhatsApp...");
          }}
          className="contact-btn animate-fade-in-up delay-400"
          data-testid="hero-cta"
        >
          Reservar Cita
        </Button>
      </div>

      {/* Scroll Indicator */}
      <div className="scroll-indicator" data-testid="scroll-indicator">
        <span className="font-['Manrope'] text-xs tracking-[0.2em] uppercase text-[#78716C]">
          Scroll
        </span>
        <ChevronDown size={20} className="text-[#A67C52]" />
      </div>
    </section>
  );
};

// Gallery Section Component
const GallerySection = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const bentoClasses = [
    "bento-large", // image1 - large
    "bento-medium", // image2 - medium
    "bento-small", // image3 - small
    "bento-small", // image4 - small
    "bento-small", // image5 - small
    "bento-medium", // image6 - medium
  ];

  return (
    <section
      id="galeria"
      ref={sectionRef}
      className="py-24 md:py-32 px-6 bg-[#FAF9F6]"
      data-testid="gallery-section"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className={`text-center mb-16 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <p className="font-['Manrope'] text-xs tracking-[0.3em] uppercase text-[#78716C] mb-4">
            Nuestro Trabajo
          </p>
          <h2
            className="font-['Playfair_Display'] text-4xl md:text-5xl tracking-tight text-[#292524] mb-4"
            data-testid="gallery-title"
          >
            Galería
          </h2>
          <p className="font-accent text-lg text-[#57534E]">
            Cada diseño cuenta una historia única
          </p>
        </div>

        {/* Bento Gallery Grid */}
        <div className="bento-gallery" data-testid="gallery-grid">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className={`bento-item ${bentoClasses[index]} ${
                isVisible ? "animate-scale-in" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
              data-testid={`gallery-item-${index}`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="image-warm"
                loading="lazy"
              />
              <div className="bento-item-overlay">
                <span className="font-['Playfair_Display'] text-white text-lg">
                  {image.style}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Services Section Component
const ServicesSection = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="servicios"
      ref={sectionRef}
      className="py-24 md:py-32 px-6 bg-[#F5F2EB]"
      data-testid="services-section"
    >
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className={`text-center mb-16 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <p className="font-['Manrope'] text-xs tracking-[0.3em] uppercase text-[#78716C] mb-4">
            Lo Que Ofrecemos
          </p>
          <h2
            className="font-['Playfair_Display'] text-4xl md:text-5xl tracking-tight text-[#292524] mb-4"
            data-testid="services-title"
          >
            Servicios
          </h2>
          <p className="font-accent text-lg text-[#57534E]">
            Experiencias de belleza personalizadas
          </p>
        </div>

        {/* Services List */}
        <div className="space-y-0" data-testid="services-list">
          {services.map((service, index) => (
            <div
              key={index}
              className={`service-item ${isVisible ? "animate-slide-in-left" : "opacity-0"}`}
              style={{ animationDelay: `${index * 100}ms` }}
              data-testid={`service-item-${index}`}
            >
              <span className="service-name">{service.name}</span>
              <span className="service-price">{service.price}</span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className={`text-center mt-16 ${isVisible ? "animate-fade-in-up delay-600" : "opacity-0"}`}>
          <Button
            onClick={() => {
              window.open("https://wa.me/522221812377?text=Hola,%20me%20gustaría%20conocer%20más%20sobre%20sus%20servicios", "_blank");
              toast.success("Redirigiendo a WhatsApp...");
            }}
            className="contact-btn-secondary contact-btn"
            data-testid="services-cta"
          >
            Consultar Precios
          </Button>
        </div>
      </div>
    </section>
  );
};

// Contact Section Component
const ContactSection = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="contacto"
      ref={sectionRef}
      className="py-24 md:py-32 px-6 bg-[#FAF9F6] relative"
      data-testid="contact-section"
    >
      {/* Background Image */}
      <div className="absolute inset-0 opacity-5">
        <img
          src="https://images.unsplash.com/photo-1650532897813-d92427f7d229?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxNzV8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBzcGElMjBzYWxvbiUyMGludGVyaW9yJTIwYmVpZ2UlMjBnb2xkfGVufDB8fHx8MTc3MjUxNDIyNnww&ixlib=rb-4.1.0&q=85"
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <p className="font-['Manrope'] text-xs tracking-[0.3em] uppercase text-[#78716C] mb-4">
            Estamos Para Ti
          </p>
          <h2
            className="font-['Playfair_Display'] text-4xl md:text-5xl tracking-tight text-[#292524] mb-4"
            data-testid="contact-title"
          >
            Contacto
          </h2>
          <p className="font-accent text-lg text-[#57534E]">
            Agenda tu cita y transforma tus uñas
          </p>
        </div>

        {/* Contact Info Grid */}
        <div
          className={`grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 ${
            isVisible ? "animate-fade-in-up delay-200" : "opacity-0"
          }`}
        >
          {/* Phone */}
          <div className="text-center p-8 bg-white/50 backdrop-blur-sm" data-testid="contact-phone">
            <Phone className="w-6 h-6 mx-auto mb-4 text-[#A67C52]" />
            <h3 className="font-['Playfair_Display'] text-lg mb-2">Teléfono</h3>
            <p className="font-['Manrope'] text-[#57534E]">222 181 2377</p>
          </div>

          {/* Location */}
          <div className="text-center p-8 bg-white/50 backdrop-blur-sm" data-testid="contact-location">
            <MapPin className="w-6 h-6 mx-auto mb-4 text-[#A67C52]" />
            <h3 className="font-['Playfair_Display'] text-lg mb-2">Ubicación</h3>
            <p className="font-['Manrope'] text-[#57534E] text-sm">Privada 109 A Oriente 2422<br/>Barrio de San Juan</p>
          </div>

          {/* Hours */}
          <div className="text-center p-8 bg-white/50 backdrop-blur-sm" data-testid="contact-hours">
            <Clock className="w-6 h-6 mx-auto mb-4 text-[#A67C52]" />
            <h3 className="font-['Playfair_Display'] text-lg mb-2">Horario</h3>
            <p className="font-['Manrope'] text-[#57534E]">Lun - Sáb: 9am - 7pm</p>
          </div>
        </div>

        {/* WhatsApp CTA */}
        <div className={`text-center ${isVisible ? "animate-fade-in-up delay-400" : "opacity-0"}`}>
          <Button
            onClick={() => {
              window.open("https://wa.me/522221812377?text=Hola,%20me%20gustaría%20agendar%20una%20cita%20en%20CLOR%20MAISON", "_blank");
              toast.success("Abriendo WhatsApp...");
            }}
            className="contact-btn bg-[#25D366] hover:bg-[#128C7E]"
            data-testid="whatsapp-cta"
          >
            <WhatsAppIcon />
            <span className="ml-2">Escríbenos por WhatsApp</span>
          </Button>
        </div>
      </div>
    </section>
  );
};

// Footer Component
const Footer = () => {
  return (
    <footer className="footer" data-testid="footer">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center">
          {/* Logo */}
          <h2 className="footer-logo mb-8" data-testid="footer-logo">
            CLOR MAISON
          </h2>

          {/* Tagline */}
          <p className="font-accent text-lg text-[#D4C5A9] mb-8">
            El arte en tus manos
          </p>

          {/* Social Links */}
          <div className="flex justify-center gap-6 mb-8">
            <a
              href="https://www.instagram.com/clor__maisonn?igsh=MTA3ODdoZ3VwMHg0OA=="
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#D4C5A9] hover:text-white transition-colors"
              data-testid="social-instagram"
            >
              <Instagram size={24} />
            </a>
          </div>

          {/* Divider */}
          <div className="decorative-line mx-auto mb-8 bg-[#D4C5A9]/30"></div>

          {/* Copyright */}
          <p className="font-['Manrope'] text-sm text-[#78716C]">
            © {new Date().getFullYear()} CLOR MAISON. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

// WhatsApp Floating Button
const WhatsAppFloat = () => {
  return (
    <a
      href="https://wa.me/522221812377?text=Hola,%20me%20gustaría%20agendar%20una%20cita"
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      data-testid="whatsapp-float"
      onClick={() => toast.success("Abriendo WhatsApp...")}
    >
      <WhatsAppIcon />
    </a>
  );
};

// Main App Component
function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="App" data-testid="app-container">
      <Toaster position="top-right" richColors />
      <Navigation mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
      <main>
        <HeroSection />
        <GallerySection />
        <ServicesSection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}

export default App;
