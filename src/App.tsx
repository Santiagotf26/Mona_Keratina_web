import { useEffect, useState, useRef } from 'react';
import { 
  Instagram, 
  ArrowRight, 
  MapPin, 
  Menu, 
  X,
  Check,
  ShieldCheck,
  Award
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Lenis from 'lenis';
import { Logo } from './components/Logo';

// Assets
import heroImg from './assets/hero_principal.jpeg';
import aboutImg from './assets/about.png';
import sReconexion from './assets/service_reconexion.png';
import sKeratina from './assets/service_keratina.png';
import sFotonico from './assets/service_fotonico.png';
import sCirugia from './assets/service_cirugia.png';

const WHATSAPP_NUMBER = "573223328408";

const getWhatsAppUrl = (message: string) => {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
};

const services = [
  { name: 'Reconexión Molecular', price: '240.000', featured: true, tag: 'Vegano', img: sReconexion },
  { name: 'Keratina Premium', price: '220.000', img: sKeratina },
  { name: 'Alisado Fotónico', price: '180.000', img: sFotonico },
  { name: 'Cirugía Capilar', price: '160.000', img: sCirugia },
];

const sedes = [
  { 
    id: 'duitama',
    city: 'Duitama', 
    status: 'Sede Principal', 
    address: 'Calle 16 # 14-25', 
    description: 'Nuestra casa matriz donde comenzó la revolución de la belleza consciente en Boyacá. Un espacio diseñado para la excelencia.',
    perks: ['Nanoinfusión capilar', 'Atención personalizada', 'Ambiente premium'],
    price: 'Sede Principal',
    img: sReconexion 
  },
  { 
    id: 'sogamoso',
    city: 'Sogamoso', 
    status: 'Premium Concept', 
    address: 'Carrera 11 # 12-40', 
    description: 'Minimalismo y tecnología en el corazón de Sogamoso para transformar tu cabello con salud.',
    perks: ['Terapias de ozono', 'Asesoría botánica', 'Relax total'],
    price: 'Próximamente',
    img: sKeratina 
  },
  { 
    id: 'tunja',
    city: 'Tunja', 
    status: 'Studio Norte', 
    address: 'CC Unicentro Local 24', 
    description: 'Ubicación estratégica para brindarte el mejor alisado orgánico de la ciudad.',
    perks: ['Fácil acceso', 'Corte global incluido', 'Tecnología fotónica'],
    price: 'Agendar cita',
    img: sFotonico 
  },
  { 
    id: 'bogota',
    city: 'Bogotá', 
    status: 'Citas Previas', 
    address: 'Zona Rosa', 
    description: 'La experiencia Mona Keratina llega a la capital. Lujo orgánico en el sector más exclusivo.',
    perks: ['Exclusividad total', 'Horarios flexibles', 'Tratamientos premium'],
    price: 'Zona Rosa',
    img: sCirugia 
  },
];

const App = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSede, setActiveSede] = useState(sedes[0]);
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const lenis = new Lenis();
    lenisRef.current = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      lenis.destroy();
    };
  }, []);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    lenisRef.current?.scrollTo(id, { offset: -80, duration: 1.5 });
  };

  return (
    <div className="min-h-screen bg-background text-primary selection:bg-accent selection:text-white pb-20">
      {/* WhatsApp Floating Button */}
      <motion.a 
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        whileHover={{ scale: 1.02 }}
        href={getWhatsAppUrl("Hola Mona Keratina! Quisiera recibir información sobre sus servicios.")}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-[100] bg-[#25D366] text-white pr-6 pl-4 py-3 rounded-full shadow-2xl flex items-center gap-3 group overflow-hidden border border-white/20"
      >
        <div className="relative">
          <svg 
            viewBox="0 0 24 24" 
            width="18" 
            height="18" 
            fill="currentColor" 
            xmlns="http://www.w3.org/2000/svg"
            className="relative z-10"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.438 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
          </svg>
        </div>
        <span className="text-[8px] uppercase tracking-[2px] font-bold">Habla con nosotros</span>
      </motion.a>

      {/* Header */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-background/80 backdrop-blur-md py-4 border-b border-border/20' : 'bg-transparent py-6 border-transparent'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex-1 hidden md:flex gap-8 text-[10px] uppercase tracking-[3px] font-bold opacity-60">
             <button onClick={() => scrollTo('#servicios')} className="hover:text-accent transition-colors">Servicios</button>
             <button onClick={() => scrollTo('#sedes')} className="hover:text-accent transition-colors">Sedes</button>
          </div>
          
          <div className="flex-shrink-0">
             <Logo style={{ height: '40px' }} color="currentColor" className="text-primary" />
          </div>

          <div className="flex-1 flex justify-end items-center gap-6">
             <div className="hidden md:flex gap-8 text-[10px] uppercase tracking-[3px] font-bold opacity-60">
                <button onClick={() => scrollTo('#acerca')} className="hover:text-accent transition-colors">Nosotros</button>
                <a href={getWhatsAppUrl("Hola! Deseo agendar una cita.")} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">Contacto</a>
             </div>
             <a href="https://www.instagram.com/monakeratinaduitama?igsh=Z3Z3cDk1d2ZjZWE4" target="_blank" rel="noopener noreferrer" className="p-2 hover:text-accent transition-colors">
                <Instagram size={20} />
             </a>
             <button className="md:hidden" onClick={() => setMobileMenuOpen(true)}>
                <Menu size={20} />
             </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="pt-24 min-h-screen flex flex-col md:flex-row overflow-hidden">
         <div className="w-full md:w-1/2 relative aspect-[3/4] md:aspect-none md:min-h-screen overflow-hidden">
            <motion.img 
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
              src={heroImg} 
              className="absolute inset-0 w-full h-full object-cover object-top md:object-center" 
              alt="Mona Keratina - Belleza Consciente" 
            />
            <div className="absolute inset-0 bg-black/5"></div>
         </div>
         <div className="w-full md:w-1/2 flex items-center justify-center p-12 md:p-24 bg-background">
            <div className="max-w-xl">
               <motion.span 
                 initial={{ opacity: 0 }}
                 animate={{ opacity: 1 }}
                 className="text-[11px] uppercase tracking-[5px] font-bold text-accent block mb-8"
               >
                 Salud Capilar & Lujo
               </motion.span>
               <motion.h1 
                 initial={{ opacity: 0, y: 30 }}
                 animate={{ opacity: 1, y: 0 }}
                 className="text-6xl md:text-8xl font-serif leading-[0.9] mb-12"
               >
                 Belleza consciente, <span className="italic font-normal">impacto real.</span>
               </motion.h1>
               <motion.p 
                 initial={{ opacity: 0 }}
                 animate={{ opacity: 1 }}
                 transition={{ delay: 0.2 }}
                 className="text-lg leading-relaxed opacity-60 mb-12"
               >
                 Expertos en la transformación de tu cabello con fórmulas orgánicas y tecnología de punta. Elevamos el estándar del alisado premium.
               </motion.p>
                <div className="flex flex-wrap items-center gap-8">
                  <a href={getWhatsAppUrl("Hola Mona! Quiero agendar una valoración.")} className="inline-flex items-center gap-4 text-[11px] uppercase tracking-[4px] font-bold group border-b border-primary pb-2">
                    AGENDAR VALORACIÓN <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                  </a>
                  <button onClick={() => scrollTo('#servicios')} className="text-[11px] uppercase tracking-[4px] font-bold opacity-40 hover:opacity-100 transition-opacity">
                    VER SERVICIOS
                  </button>
                </div>
            </div>
         </div>
      </header>

      {/* Our Top Services Section */}
      <section id="servicios" className="py-32 px-6">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-baseline mb-20 border-b border-border/20 pb-12 gap-6">
             <div>
                <h2 className="text-4xl md:text-5xl font-serif mb-4">Nuestros servicios destacados</h2>
                <p className="text-[10px] uppercase tracking-widest font-bold opacity-40">Resultados de alta gama con fórmulas botánicas</p>
             </div>
             <a href={getWhatsAppUrl("Hola! Quisiera ver el catálogo completo de servicios.")} className="px-6 py-2 border border-primary/20 rounded-full text-[10px] uppercase tracking-widest font-bold hover:bg-primary hover:text-white transition-all">Ver todos</a>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-16">
             {services.map((service, i) => (
               <motion.div 
                 key={service.name}
                 initial={{ opacity: 0, y: 30 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: i * 0.1 }}
                 className="group"
               >
                  <div className={`aspect-[4/5] mb-8 relative overflow-hidden transition-all duration-1000 ${i % 2 === 1 ? 'rounded-[100px] md:rounded-[150px]' : 'rounded-[200px]'}`}>
                     <img src={service.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" alt={service.name} />
                     <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500"></div>
                  </div>
                  <div className="text-center px-4">
                     <h3 className="text-sm font-bold uppercase tracking-widest mb-2 group-hover:text-accent transition-colors">{service.name}</h3>
                     <p className="text-xs opacity-40 tracking-widest mb-6 font-bold">Desde ${service.price}</p>
                     <a 
                       href={getWhatsAppUrl(`Hola! Deseo reservar el servicio de ${service.name}.`)}
                       className="inline-block px-6 py-2 border border-accent text-accent text-[9px] uppercase tracking-widest font-bold rounded-full hover:bg-accent hover:text-white transition-all shadow-sm active:scale-95"
                     >
                       Reservar ahora
                     </a>
                  </div>
               </motion.div>
             ))}
          </div>
        </div>
      </section>


      {/* Book An Appointment / Sedes Section */}
      <section id="sedes" className="py-32 px-6">
         <div className="container mx-auto">
            <div className="text-center mb-16">
               <h2 className="text-5xl font-serif mb-4">Reserva tu experiencia</h2>
               <p className="opacity-40 uppercase tracking-widest text-[10px] font-bold">Encuéntranos en las ciudades más importantes de Boyacá y Bogotá</p>
            </div>
            
            {/* Tabs */}
            <div className="flex justify-center border-b border-border/30 mb-20 overflow-x-auto no-scrollbar">
               {sedes.map((sede) => (
                 <button
                   key={sede.id}
                   onClick={() => setActiveSede(sede)}
                   className={`px-8 py-4 text-[10px] uppercase tracking-[3px] font-bold transition-all relative whitespace-nowrap ${activeSede.id === sede.id ? 'text-primary' : 'text-primary/30 hover:text-primary/60'}`}
                 >
                   {sede.city}
                   {activeSede.id === sede.id && (
                     <motion.div layoutId="tab-underline" className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent" />
                   )}
                 </button>
               ))}
            </div>

            {/* Content */}
            <AnimatePresence mode="wait">
              <motion.div 
                key={activeSede.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center"
              >
                <div className="relative">
                   <div className="aspect-[3/4] rounded-t-full overflow-hidden border border-border/10 shadow-sm">
                      <img src={activeSede.img} className="w-full h-full object-cover" alt={activeSede.city} />
                   </div>
                   <div className="absolute -bottom-6 -right-6 bg-white p-8 rounded-2xl shadow-2xl border border-border/5 hidden md:block max-w-[200px]">
                      <div className="flex items-center gap-2 text-accent mb-3">
                         <MapPin size={16} />
                         <span className="text-[9px] uppercase tracking-widest font-bold">Localización</span>
                      </div>
                      <p className="text-xs font-bold opacity-80 leading-relaxed">{activeSede.address}</p>
                   </div>
                </div>
                
                <div className="max-w-md">
                   <span className="text-accent text-[10px] uppercase tracking-[4px] font-bold mb-4 block">{activeSede.status}</span>
                   <h3 className="text-4xl md:text-5xl font-serif mb-6">{activeSede.city}</h3>
                   <p className="text-lg opacity-60 leading-relaxed mb-10">
                     {activeSede.description}
                   </p>
                   <ul className="space-y-4 mb-12">
                      {activeSede.perks.map(perk => (
                        <li key={perk} className="flex items-center gap-3">
                           <div className="w-5 h-5 rounded-full border border-accent/20 flex items-center justify-center text-accent">
                             <Check size={12} />
                           </div>
                           <span className="text-xs opacity-60 tracking-widest font-medium">{perk}</span>
                        </li>
                      ))}
                   </ul>
                   <div className="flex items-center gap-8 pt-8 border-t border-border/10">
                      <div className="flex flex-col">
                        <span className="text-[8px] uppercase tracking-widest opacity-40 font-bold mb-1 tracking-[3px]">Categoría</span>
                        <span className="text-xl font-serif text-primary/80">{activeSede.price}</span>
                      </div>
                      <a 
                       href={getWhatsAppUrl(`Hola! Deseo agendar una cita en ${activeSede.city}.`)}
                       className="bg-primary text-white px-12 py-5 rounded-full text-[10px] uppercase tracking-[4px] font-bold hover:bg-accent transition-all shadow-xl active:scale-95"
                      >
                        Agendar ahora
                      </a>
                   </div>
                </div>
              </motion.div>
            </AnimatePresence>
         </div>
      </section>

      {/* Instagram Grid */}
      <section className="py-32 px-6 bg-surface/30">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
             <div>
                <h2 className="text-4xl font-serif mb-4">Mona en el mundo</h2>
                <p className="opacity-40 uppercase tracking-widest text-[10px] font-bold">Resultados reales de nuestras clientas @MonaKeratina</p>
             </div>
             <a href="https://www.instagram.com/monakeratinaduitama?igsh=Z3Z3cDk1d2ZjZWE4" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-xs uppercase tracking-widest font-bold hover:text-accent transition-all group">
               Ir a Instagram <ArrowRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
             </a>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
             {[sReconexion, sKeratina, sFotonico, sCirugia].map((img, i) => (
               <div key={i} className="aspect-square rounded-[30px] overflow-hidden group">
                  <img src={img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Instagram Result" />
               </div>
             ))}
          </div>
        </div>
      </section>
      {/* About Section - Improved Offset Layout */}
      <section id="acerca" className="py-40 px-6 bg-surface/10 relative overflow-hidden">
         <div className="container mx-auto">
            <div className="relative">
               {/* Background Block */}
               <motion.div 
                 initial={{ opacity: 0, x: -50 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 className="md:w-[80%] bg-surface p-12 md:p-32 rounded-[60px] relative z-10 shadow-sm border border-border/10"
               >
                  <div className="max-w-2xl">
                    <span className="text-[10px] uppercase tracking-[6px] font-bold text-accent block mb-8">Acerca de nosotros</span>
                    <h2 className="text-5xl md:text-6xl font-serif mb-12 leading-tight">Mona Keratina:<br/><span className="text-accent italic">Ciencia que respeta tu esencia.</span></h2>
                    <div className="space-y-8 text-lg md:text-xl leading-relaxed opacity-70">
                      <p>
                        No creemos en la belleza que duele. En Mona Keratina, hemos perfeccionado el arte del alisado orgánico para que sea una experiencia de bienestar profundo, no un sacrificio.
                      </p>
                      <p>
                        Nuestra tecnología de <strong>Nanoinfusión Botánica</strong> permite que los activos penetren la fibra capilar sin químicos agresivos, devolviendo el brillo y la sedosidad natural que tu cabello merece.
                      </p>
                    </div>

                    {/* Commitment Icons */}
                    <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 pt-12 border-t border-border/20">
                       <div className="flex flex-col gap-3">
                          <Check className="text-accent" size={24} />
                          <h4 className="text-[10px] uppercase tracking-widest font-bold">100% Orgánico</h4>
                          <p className="text-[10px] opacity-40 font-bold uppercase tracking-widest leading-relaxed">Libre de formol y agresivos</p>
                       </div>
                       <div className="flex flex-col gap-3">
                          <ShieldCheck className="text-accent" size={24} />
                          <h4 className="text-[10px] uppercase tracking-widest font-bold">Seguridad Total</h4>
                          <p className="text-[10px] opacity-40 font-bold uppercase tracking-widest leading-relaxed">Apto para todas las edades</p>
                       </div>
                       <div className="flex flex-col gap-3">
                          <Award className="text-accent" size={24} />
                          <h4 className="text-[10px] uppercase tracking-widest font-bold">Calidad Premium</h4>
                          <p className="text-[10px] opacity-40 font-bold uppercase tracking-widest leading-relaxed">Expertos certificados</p>
                       </div>
                    </div>
                  </div>
               </motion.div>
               {/* Offset Image with decorative frame */}
               <motion.div 
                 initial={{ opacity: 0, scale: 0.9, x: 50 }}
                 whileInView={{ opacity: 1, scale: 1, x: 0 }}
                 className="hidden md:block absolute top-1/2 right-0 -translate-y-1/2 w-1/2 z-20"
               >
                  <div className="relative group p-4">
                     <div className="absolute inset-0 border border-accent/20 rounded-[50px] translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-700"></div>
                     <img src={aboutImg} className="w-full aspect-[4/5] object-cover rounded-[40px] shadow-2xl relative z-10" alt="Mona Studio Experience" />
                  </div>
               </motion.div>
               {/* Mobile Image */}
               <div className="md:hidden mt-8">
                  <img src={aboutImg} className="w-full rounded-[40px] shadow-xl" alt="Mona Studio Experience" />
               </div>
            </div>
         </div>
      </section>

      {/* Final Footer */}
      <footer className="bg-background py-32 border-t border-border/10">
         <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-16">
            <div className="col-span-1 md:col-span-1">
               <Logo style={{ height: '40px' }} color="currentColor" className="text-primary mb-12" />
               <p className="text-sm opacity-50 leading-relaxed max-w-xs">
                  Redefiniendo la salud capilar a través de la ciencia orgánica y el lujo consciente.
               </p>
               <div className="flex gap-4 mt-8">
                  <a href="https://www.instagram.com/monakeratinaduitama?igsh=Z3Z3cDk1d2ZjZWE4" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-primary/10 flex items-center justify-center hover:bg-primary hover:text-white transition-all shadow-sm">
                     <Instagram size={18} />
                  </a>
                  <a href={getWhatsAppUrl("Hola Mona Keratina!")} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-primary/10 flex items-center justify-center hover:bg-primary hover:text-white transition-all shadow-sm p-2">
                     <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.438 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                  </a>
               </div>
            </div>
            <div>
               <h4 className="text-[10px] uppercase tracking-[4px] font-bold mb-8 opacity-80">Navegación</h4>
               <ul className="space-y-4 text-[10px] opacity-40 uppercase tracking-[2px] font-bold">
                  <li><button onClick={() => scrollTo('#servicios')} className="hover:text-accent transition-colors">Servicios</button></li>
                  <li><button onClick={() => scrollTo('#sedes')} className="hover:text-accent transition-colors">Nuestras Sedes</button></li>
                  <li><button onClick={() => scrollTo('#acerca')} className="hover:text-accent transition-colors">Nosotros</button></li>
                  <li><a href={getWhatsAppUrl("Hola!")} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">Contacto</a></li>
               </ul>
            </div>
            <div>
               <h4 className="text-[10px] uppercase tracking-[4px] font-bold mb-8 opacity-80">Ciudades</h4>
               <ul className="space-y-4 text-[10px] opacity-40 uppercase tracking-[2px] font-bold">
                  <li>Duitama (Boyacá)</li>
                  <li>Sogamoso (Boyacá)</li>
                  <li>Tunja (Boyacá)</li>
                  <li>Bogotá D.C.</li>
               </ul>
            </div>
            <div className="md:text-right">
               <h4 className="text-[10px] uppercase tracking-[4px] font-bold mb-8 opacity-80">Mona Keratina</h4>
               <p className="text-[10px] opacity-40 uppercase tracking-[2px] font-bold leading-relaxed">
                  Presencia en Boyacá & Bogotá<br/>
                  Atención Premium Garantizada<br/>
                  © 2026 Todos los derechos reservados.
               </p>
            </div>
         </div>
      </footer>

      {/* Mobile Menu - Minimalist Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[90]"
            />
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-[80%] max-w-sm z-[100] bg-background shadow-2xl p-8 flex flex-col"
            >
              <div className="flex justify-between items-center mb-16">
                 <Logo style={{ height: '30px' }} color="currentColor" className="text-primary" />
                 <button onClick={() => setMobileMenuOpen(false)} className="p-2 opacity-60">
                   <X size={20} />
                 </button>
              </div>
              <nav className="flex flex-col gap-8">
                 {['Servicios', 'Sedes', 'Nosotros'].map((item, i) => (
                   <motion.button 
                     key={item} 
                     initial={{ opacity: 0, x: 20 }}
                     animate={{ opacity: 1, x: 0 }}
                     transition={{ delay: 0.1 + i * 0.05 }}
                     onClick={() => scrollTo(`#${item.toLowerCase() === 'nosotros' ? 'acerca' : item.toLowerCase()}`)} 
                     className="text-left text-3xl font-serif hover:text-accent transition-colors border-b border-border/10 pb-4" 
                   >
                     {item}
                   </motion.button>
                 ))}
              </nav>
              <div className="mt-auto pt-12">
                <a 
                  href={getWhatsAppUrl("Hola! Deseo agendar una cita.")} 
                  className="w-full bg-primary text-white text-center py-4 rounded-full font-bold uppercase tracking-[4px] text-[10px] shadow-lg block"
                >
                  Agendar ahora
                </a>
                <div className="flex justify-center gap-6 mt-8 opacity-40">
                  <a href="https://www.instagram.com/monakeratinaduitama?igsh=Z3Z3cDk1d2ZjZWE4" target="_blank" rel="noopener noreferrer"><Instagram size={18} /></a>
                  <a href={getWhatsAppUrl("Hola Mona!")} target="_blank" rel="noopener noreferrer">
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.438 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
