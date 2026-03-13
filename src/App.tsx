import { useState, useEffect } from 'react';
import { 
  TrendingUp, 
  ShieldAlert, 
  BookOpen, 
  Smartphone, 
  CheckCircle2, 
  ChevronDown, 
  ChevronUp, 
  MessageCircle,
  ShieldCheck,
  BarChart3,
  Wallet,
  Clock
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-white/10 py-4">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between text-left focus:outline-none"
      >
        <span className="text-lg font-medium text-white/90">{question}</span>
        {isOpen ? <ChevronUp className="text-gold" /> : <ChevronDown className="text-white/40" />}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="mt-4 text-white/60 leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState({ hours: 2, minutes: 45, seconds: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex gap-4 font-display font-bold text-2xl text-gold">
      <div className="flex flex-col items-center">
        <span>{String(timeLeft.hours).padStart(2, '0')}</span>
        <span className="text-[10px] uppercase tracking-widest text-white/40">Horas</span>
      </div>
      <span>:</span>
      <div className="flex flex-col items-center">
        <span>{String(timeLeft.minutes).padStart(2, '0')}</span>
        <span className="text-[10px] uppercase tracking-widest text-white/40">Min</span>
      </div>
      <span>:</span>
      <div className="flex flex-col items-center">
        <span>{String(timeLeft.seconds).padStart(2, '0')}</span>
        <span className="text-[10px] uppercase tracking-widest text-white/40">Seg</span>
      </div>
    </div>
  );
};

const BookMockup = ({ className = "" }: { className?: string }) => (
  <div className={`relative aspect-[3/4] w-full max-w-[350px] overflow-hidden rounded-r-lg border-y border-r border-white/10 bg-[#1A1A1A] shadow-2xl ${className}`}>
    {/* Book Spine Effect */}
    <div className="absolute top-0 left-0 h-full w-4 bg-gradient-to-r from-black/40 to-transparent"></div>
    <div className="absolute top-0 left-4 h-full w-[1px] bg-white/5"></div>
    
    {/* Content Fallback */}
    <div className="flex h-full flex-col items-center justify-center p-8 text-center">
      <div className="mb-4 rounded-full bg-gold/10 p-4">
        <BookOpen className="h-12 w-12 text-gold" />
      </div>
      <h3 className="font-display text-2xl font-black uppercase tracking-tighter text-white">
        Forex para <br/>
        <span className="text-gold">Iniciantes</span>
      </h3>
      <div className="mt-6 h-1 w-12 bg-gold/30"></div>
      <p className="mt-4 text-xs font-medium tracking-widest text-white/40 uppercase">
        Guia Prático MZ
      </p>
    </div>

    {/* Overlay for "Real Image" */}
    <img 
      src="/ebook-cover.png" 
      alt="Capa do Manual Forex Moçambique" 
      className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-500"
      onLoad={(e) => {
        e.currentTarget.style.opacity = "1";
      }}
      referrerPolicy="no-referrer"
    />
  </div>
);

export default function App() {
  const whatsappLink = "https://wa.me/258840000000?text=Olá! Quero o Manual Forex Moçambique agora.";

  return (
    <div className="min-h-screen bg-[#0A0A0A] selection:bg-gold selection:text-black">
      {/* Navbar */}
      <nav className="fixed top-0 z-50 w-full border-b border-white/5 bg-[#0A0A0A]/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <TrendingUp className="h-6 w-6 text-gold" />
            <span className="font-display text-xl font-bold tracking-tighter uppercase">Manual Forex <span className="text-gold">MZ</span></span>
          </div>
          <a 
            href={whatsappLink}
            className="hidden rounded-full bg-gold px-6 py-2 text-sm font-bold text-black transition-transform hover:scale-105 sm:block"
          >
            Comprar Agora
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-20">
        <div className="absolute top-1/2 left-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/10 blur-[120px]"></div>
        
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-12 lg:flex-row lg:text-left">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center lg:text-left"
          >
            <span className="mb-4 inline-block rounded-full border border-gold/30 bg-gold/5 px-4 py-1 text-xs font-semibold tracking-widest text-gold uppercase">
              O Guia Definitivo para Moçambique
            </span>
            <h1 className="font-display text-5xl font-extrabold leading-[1.1] tracking-tight sm:text-7xl">
              Domine o Mercado Forex em Moçambique <span className="gradient-text">partindo do Zero</span>
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/60 sm:text-xl lg:mx-0">
              O guia prático e seguro para aprender a operar, gerir o seu risco e evitar erros comuns por apenas <span className="font-bold text-white">500 MZN</span>.
            </p>
            
            <div className="mt-12 flex flex-col items-center gap-6 lg:items-start">
              <a 
                href={whatsappLink}
                className="group relative flex items-center gap-3 rounded-2xl bg-gold px-10 py-5 text-lg font-bold text-black transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(212,175,55,0.4)]"
              >
                <MessageCircle className="h-6 w-6" />
                Quero o Manual Agora (WhatsApp)
                <div className="absolute -inset-0.5 -z-10 rounded-2xl bg-gold opacity-30 blur group-hover:opacity-50"></div>
              </a>
              <div className="flex items-center gap-2 text-sm text-white/40">
                <ShieldCheck className="h-4 w-4 text-neon-green" />
                <span>Acesso imediato via PDF após confirmação</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex-1 flex justify-center"
          >
            <div className="absolute inset-0 -z-10 bg-gold/20 blur-[100px]"></div>
            <BookMockup className="drop-shadow-[0_20px_50px_rgba(212,175,55,0.3)]" />
          </motion.div>
        </div>
      </section>

      {/* Pain Points */}
      <section className="bg-white/[0.02] py-24 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <h2 className="font-display text-3xl font-bold sm:text-4xl">Por que 95% dos iniciantes <span className="text-red-500">perdem dinheiro?</span></h2>
            <p className="mt-4 text-white/40">Não cometa os mesmos erros fatais de quem tenta sozinho.</p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                icon: <ShieldAlert className="h-10 w-10 text-red-500" />,
                title: "Perda de Capital",
                desc: "Entrar no mercado sem saber o que está a fazer é o caminho mais rápido para queimar a sua conta em minutos."
              },
              {
                icon: <BarChart3 className="h-10 w-10 text-red-500" />,
                title: "Falta de Estratégia",
                desc: "Operar por intuição ou 'sorte' não é trading, é jogo de azar. Sem um plano, o mercado vai devorar o seu saldo."
              },
              {
                icon: <Smartphone className="h-10 w-10 text-red-500" />,
                title: "Corretoras Duvidosas",
                desc: "Muitos moçambicanos caem em esquemas de corretoras que dificultam o saque ou manipulam preços."
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -5 }}
                className="rounded-3xl border border-white/5 bg-white/[0.03] p-8 transition-colors hover:border-white/10"
              >
                <div className="mb-6">{item.icon}</div>
                <h3 className="mb-4 text-xl font-bold text-white">{item.title}</h3>
                <p className="text-white/50 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-24 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="text-sm font-bold tracking-widest text-gold uppercase">O Caminho Certo</span>
              <h2 className="mt-4 font-display text-4xl font-bold leading-tight sm:text-5xl">O que vai aprender com este <span className="text-gold">Manual Prático</span></h2>
              <p className="mt-6 text-lg text-white/60">
                Este manual foi desenhado especificamente para a realidade de Moçambique, focado em resultados reais e proteção de património.
              </p>
              
              <div className="mt-10 grid gap-6 sm:grid-cols-2">
                {[
                  { icon: <Wallet className="text-neon-green" />, title: "Corretoras Locais", desc: "Como depositar e sacar via M-Pesa/e-Mola." },
                  { icon: <BarChart3 className="text-neon-green" />, title: "Leitura de Gráficos", desc: "Entenda o que o preço está a dizer." },
                  { icon: <ShieldCheck className="text-neon-green" />, title: "Gestão de Risco", desc: "Nunca perca mais do que pode." },
                  { icon: <TrendingUp className="text-neon-green" />, title: "Estratégia Prática", desc: "O passo a passo para a sua primeira operação." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/5">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-white">{item.title}</h4>
                      <p className="text-sm text-white/40">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative flex justify-center">
              <div className="absolute inset-0 -z-10 bg-gold/20 blur-[100px]"></div>
              <motion.div 
                initial={{ rotate: 5, scale: 0.9 }}
                whileInView={{ rotate: 0, scale: 1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <BookMockup className="max-w-[400px] drop-shadow-[0_30px_60px_rgba(0,0,0,0.5)]" />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="bg-white/[0.02] py-24 px-6">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-16 text-center font-display text-3xl font-bold">Quem já está no <span className="text-gold">caminho certo</span></h2>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              { name: "António M.", city: "Maputo", text: "Finalmente entendi como usar o M-Pesa para carregar a conta. O manual é muito direto ao ponto." },
              { name: "Sérgio J.", city: "Beira", text: "A gestão de risco salvou a minha banca. Antes eu perdia tudo em um dia, agora opero com calma." },
              { name: "Maria L.", city: "Nampula", text: "O melhor investimento de 500 MZN que já fiz. O suporte via WhatsApp também é excelente." }
            ].map((testimonial, i) => (
              <div key={i} className="rounded-3xl border border-white/5 bg-white/[0.03] p-8">
                <div className="mb-4 flex gap-1">
                  {[...Array(5)].map((_, i) => <CheckCircle2 key={i} className="h-4 w-4 text-gold" />)}
                </div>
                <p className="mb-6 italic text-white/70">"{testimonial.text}"</p>
                <div>
                  <p className="font-bold text-white">{testimonial.name}</p>
                  <p className="text-xs text-white/40">{testimonial.city}, MZ</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Irresistible Offer */}
      <section className="py-24 px-6">
        <div className="mx-auto max-w-4xl overflow-hidden rounded-[40px] border border-gold/30 bg-gradient-to-b from-gold/10 to-transparent p-12 text-center">
          <h2 className="font-display text-4xl font-bold sm:text-5xl">Oferta de Lançamento</h2>
          <p className="mt-4 text-white/60">Aproveite o preço promocional antes que a oferta expire.</p>
          
          <div className="mt-12 flex flex-col items-center">
            <div className="mb-2 text-lg text-white/40 line-through">1.500 MZN</div>
            <div className="font-display text-7xl font-black text-gold sm:text-8xl">500<span className="text-2xl font-bold text-white/60 ml-2">MZN</span></div>
            
            <div className="mt-10 flex flex-col items-center gap-4">
              <p className="text-sm font-medium text-white/40 uppercase tracking-widest">A oferta termina em:</p>
              <Countdown />
            </div>

            <a 
              href={whatsappLink}
              className="mt-12 flex items-center gap-3 rounded-2xl bg-gold px-12 py-6 text-xl font-bold text-black transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(212,175,55,0.5)]"
            >
              <MessageCircle className="h-6 w-6" />
              Quero o Manual Agora
            </a>
            
            <div className="mt-8 grid grid-cols-2 gap-8 sm:grid-cols-3">
              <div className="flex items-center gap-2 text-xs text-white/60">
                <CheckCircle2 className="h-4 w-4 text-neon-green" />
                <span>Bónus: Grupo VIP</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-white/60">
                <CheckCircle2 className="h-4 w-4 text-neon-green" />
                <span>Suporte WhatsApp</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-white/60">
                <CheckCircle2 className="h-4 w-4 text-neon-green" />
                <span>Atualizações Grátis</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-6">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-12 text-center font-display text-3xl font-bold">Perguntas Frequentes</h2>
          <div className="space-y-2">
            <FAQItem 
              question="Como recebo o manual?" 
              answer="O envio é imediato e automático via WhatsApp ou E-mail em formato PDF assim que confirmar o pagamento." 
            />
            <FAQItem 
              question="Quais são as formas de pagamento?" 
              answer="Aceitamos M-Pesa e e-Mola para facilitar o acesso de todos os moçambicanos. Os dados de pagamento são enviados após clicar no botão de compra." 
            />
            <FAQItem 
              question="Preciso de um computador para operar?" 
              answer="Não. O manual ensina como configurar e operar diretamente do seu smartphone, ideal para quem está a começar." 
            />
            <FAQItem 
              question="O manual garante lucro?" 
              answer="O Forex envolve riscos. O manual ensina as estratégias e a gestão de risco necessária para proteger o seu capital e buscar consistência, mas o resultado depende da sua disciplina." 
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-12 px-6 text-center">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col items-center gap-6">
            <div className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-gold" />
              <span className="font-display font-bold tracking-tighter uppercase">Manual Forex <span className="text-gold">MZ</span></span>
            </div>
            <p className="max-w-md text-sm text-white/30">
              Aviso Legal: O mercado financeiro envolve riscos. Nunca invista dinheiro que não possa perder. Este manual é educacional.
            </p>
            <div className="flex gap-8 text-xs text-white/40">
              <a href="#" className="hover:text-gold">Termos de Uso</a>
              <a href="#" className="hover:text-gold">Privacidade</a>
              <a href="#" className="hover:text-gold">Contacto</a>
            </div>
            <p className="mt-8 text-[10px] text-white/20 uppercase tracking-widest">
              © 2024 Manual Forex Moçambique. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>

      {/* Sticky Mobile CTA */}
      <div className="fixed bottom-6 left-1/2 z-50 w-full max-w-xs -translate-x-1/2 px-4 sm:hidden">
        <a 
          href={whatsappLink}
          className="flex items-center justify-center gap-2 rounded-full bg-gold py-4 font-bold text-black shadow-2xl"
        >
          <MessageCircle className="h-5 w-5" />
          Comprar por 500 MZN
        </a>
      </div>
    </div>
  );
}
