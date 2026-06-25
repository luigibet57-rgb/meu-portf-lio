import React, { useState } from 'react';
import { Calendar, MessageCircle, CreditCard, Star, Clock, Users, Award, Search, Syringe, ClipboardList, Activity } from 'lucide-react';

export default function MedicalLanding() {
  const [showScheduleModal, setShowScheduleModal] = useState(false);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', date: '', service: '' });
  const [paymentData, setPaymentData] = useState({ cardName: '', cardNumber: '', expiry: '', cvc: '' });

  const handleScheduleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePaymentChange = (e) => {
    let value = e.target.value.replace(/\s/g, '');
    if (e.target.name === 'cardNumber') value = value.replace(/(.{4})/g, '$1 ').trim();
    setPaymentData({ ...paymentData, [e.target.name]: value });
  };

  const handleScheduleSubmit = (e) => {
    e.preventDefault();
    alert(`Agendamento solicitado!\nNome: ${formData.name}\nData: ${formData.date}\nServiço: ${formData.service}`);
    setFormData({ name: '', email: '', phone: '', date: '', service: '' });
    setShowScheduleModal(false);
  };

  const handlePaymentSubmit = (e) => {
    e.preventDefault();
    alert('Pagamento processado com sucesso! (Demonstração)\nValor: R$ 299,00');
    setPaymentData({ cardName: '', cardNumber: '', expiry: '', cvc: '' });
    setShowPaymentModal(false);
  };

  const services = [
    { Icon: Search, title: 'Consulta Geral', desc: 'Avaliação completa e diagnóstico preciso' },
    { Icon: Syringe, title: 'Vacinação', desc: 'Programa completo de imunização' },
    { Icon: ClipboardList, title: 'Exames', desc: 'Solicitação e interpretação de exames' },
    { Icon: Activity, title: 'Monitoramento', desc: 'Acompanhamento de saúde continuado' }
  ];

  const testimonials = [
    {
      name: 'Maria Silva',
      role: 'Paciente',
      text: 'Médico muito atencioso e atento. Resolveu meu problema rapidamente!',
      rating: 5
    },
    {
      name: 'João Santos',
      role: 'Paciente',
      text: 'Ótima experiência. Clínica limpa e equipe profissional. Recomendo!',
      rating: 5
    },
    {
      name: 'Ana Costa',
      role: 'Paciente',
      text: 'Atendimento excepcional. O Dr. realmente se importa com seus pacientes.',
      rating: 5
    }
  ];

  return (
    <div className="w-full bg-white">
      <header className="bg-[#6CA4DD] text-white">
        <nav className="max-w-6xl mx-auto px-6 py-6 flex justify-between items-center">
          <div className="text-2xl font-semibold tracking-tight">Dr. Carlos Medina</div>
          <div className="hidden md:flex gap-8">
            <a href="#servicos" className="text-white hover:text-[#44DBD5] transition duration-300 font-medium">Serviços</a>
            <a href="#depoimentos" className="text-white hover:text-[#44DBD5] transition duration-300 font-medium">Depoimentos</a>
            <a href="#contato" className="text-white hover:text-[#44DBD5] transition duration-300 font-medium">Contato</a>
          </div>
        </nav>

        <div className="max-w-6xl mx-auto px-6 py-32 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-white leading-tight">Sua Saúde é Nossa Prioridade</h1>
          <p className="text-xl md:text-2xl mb-12 text-white/90 font-light max-w-2xl mx-auto">Atendimento médico de excelência com uma abordagem humanizada e personalizada</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setShowScheduleModal(true)}
              className="bg-[#09856D] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#1CB795] transition duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl"
            >
              <Calendar size={20} /> Agendar Consulta
            </button>
            
              href="https://wa.me/5551999999999?text=Olá%20Dr.%20Medina,%20gostaria%20de%20agendar%20uma%20consulta"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#1CB795] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#09856D] transition duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl"
            >
              <MessageCircle size={20} /> WhatsApp
            </a>
          </div>
        </div>
      </header>

      <section className="bg-white py-28">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12">
          <div className="text-center">
            <div className="text-5xl font-extrabold text-[#09856D] mb-4">15+</div>
            <p className="text-[#4D555D] font-medium">Anos de Experiência</p>
          </div>
          <div className="text-center">
            <div className="text-5xl font-extrabold text-[#09856D] mb-4">5000+</div>
            <p className="text-[#4D555D] font-medium">Pacientes Atendidos</p>
          </div>
          <div className="text-center">
            <div className="text-5xl font-extrabold text-[#09856D] mb-4">98%</div>
            <p className="text-[#4D555D] font-medium">Satisfação dos Pacientes</p>
          </div>
          <div className="text-center">
            <div className="text-5xl font-extrabold text-[#09856D] mb-4">24/7</div>
            <p className="text-[#4D555D] font-medium">Atendimento de Emergência</p>
          </div>
        </div>
      </section>

      <section id="servicos" className="py-28 max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-4 text-[#4D555D]">Nossos Serviços</h2>
        <p className="text-center text-[#4D555D] text-lg mb-20 max-w-2xl mx-auto font-light opacity-80">Oferecemos uma gama completa de serviços médicos para cuidar da sua saúde</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, idx) => {
            const IconComponent = service.Icon;
            return (
              <div key={idx} className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition duration-300 border border-[#44DBD5]/20 hover:border-[#44DBD5]/50 group">
                <div className="mb-6 p-4 bg-[#44DBD5]/10 rounded-xl w-fit group-hover:bg-[#44DBD5]/20 transition duration-300">
                  <IconComponent size={32} className="text-[#09856D]" />
                </div>
                <h3 className="font-semibold text-lg mb-3 text-[#4D555D]">{service.title}</h3>
                <p className="text-[#4D555D] font-light text-sm leading-relaxed opacity-75">{service.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="bg-white/50 py-28">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1622902046580-2b47f47f5471?w=500&q=80"
              alt="Dr. Carlos Medina"
              className="rounded-xl shadow-md"
            />
          </div>
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-[#4D555D]">Dr. Carlos Medina</h2>
            <p className="text-[#4D555D] mb-8 font-light text-lg leading-relaxed opacity-85">Médico Clínico Geral com especialização em Medicina Interna e Atendimento ao Paciente Idoso. Comprometido com a excelência no cuidado e a satisfação dos pacientes.</p>
            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#44DBD5]/15 rounded-lg mt-1">
                  <Award size={20} className="text-[#09856D]" />
                </div>
                <div>
                  <p className="font-semibold text-[#4D555D]">Credencial Profissional</p>
                  <p className="text-[#4D555D] font-light opacity-75">CRM: 123456 - CREMERS</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#44DBD5]/15 rounded-lg mt-1">
                  <Users size={20} className="text-[#09856D]" />
                </div>
                <div>
                  <p className="font-semibold text-[#4D555D]">Formação</p>
                  <p className="text-[#4D555D] font-light opacity-75">Formado pela Universidade Federal</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#44DBD5]/15 rounded-lg mt-1">
                  <Clock size={20} className="text-[#09856D]" />
                </div>
                <div>
                  <p className="font-semibold text-[#4D555D]">Horário de Atendimento</p>
                  <p className="text-[#4D555D] font-light opacity-75">Seg-Sex 08:00-18:00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="depoimentos" className="py-28 max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-4 text-[#4D555D]">O que Nossos Pacientes Dizem</h2>
        <p className="text-center text-[#4D555D] text-lg mb-20 max-w-2xl mx-auto font-light opacity-80">Milhares de pacientes satisfeitos com nosso atendimento humanizado</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <div key={idx} className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition duration-300 border border-[#44DBD5]/20 hover:border-[#44DBD5]/50">
              <div className="flex gap-1 mb-5">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={18} className="fill-[#1CB795] text-[#1CB795]" />
                ))}
              </div>
              <p className="text-[#4D555D] mb-6 italic font-light leading-relaxed opacity-85">"{testimonial.text}"</p>
              <div className="border-t border-[#44DBD5]/20 pt-6">
                <p className="font-semibold text-[#4D555D]">{testimonial.name}</p>
                <p className="text-sm text-[#4D555D] font-light opacity-70">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="contato" className="bg-[#09856D] text-white py-28">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-white">Entre em Contato Conosco</h2>
          <p className="text-white/90 text-lg mb-16 font-light max-w-2xl mx-auto">Estamos prontos para responder suas dúvidas e agendar sua consulta</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
            <div>
              <div className="inline-flex p-4 bg-[#1CB795]/30 rounded-xl mb-4">
                <span className="text-3xl">📍</span>
              </div>
              <h3 className="font-semibold mb-3 text-lg">Endereço</h3>
              <p className="text-white/80 font-light">Av. Principal, 1000<br/>São Paulo - SP</p>
            </div>
            <div>
              <div className="inline-flex p-4 bg-[#1CB795]/30 rounded-xl mb-4">
                <span className="text-3xl">📞</span>
              </div>
              <h3 className="font-semibold mb-3 text-lg">Telefone</h3>
              <p className="text-white/80 font-light">(11) 98765-4321<br/>(11) 3456-7890</p>
            </div>
            <div>
              <div className="inline-flex p-4 bg-[#1CB795]/30 rounded-xl mb-4">
                <span className="text-3xl">📧</span>
              </div>
              <h3 className="font-semibold mb-3 text-lg">Email</h3>
              <p className="text-white/80 font-light">contato@drmedina.com.br<br/>agendamento@drmedina.com.br</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setShowScheduleModal(true)}
              className="bg-white text-[#09856D] px-8 py-4 rounded-xl font-semibold hover:bg-[#44DBD5] hover:text-[#09856D] transition duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl"
            >
              <Calendar size={20} /> Agendar Consulta
            </button>
            <button
              onClick={() => setShowPaymentModal(true)}
              className="bg-[#1CB795] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#44DBD5] transition duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl"
            >
              <CreditCard size={20} /> Efetuar Pagamento
            </button>
          </div>
        </div>
      </section>

      {showScheduleModal && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center p-4 z-50 backdrop-blur-sm">
          <div className="bg-white rounded-xl p-8 max-w-md w-full shadow-lg">
            <h3 className="text-2xl font-semibold mb-2 text-[#4D555D]">Agendar Consulta</h3>
            <p className="text-[#4D555D] font-light mb-6 opacity-75">Preencha os dados abaixo para agendar sua consulta</p>
            <form onSubmit={handleScheduleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Seu Nome"
                value={formData.name}
                onChange={handleScheduleChange}
                className="w-full mb-4 px-4 py-3 border border-[#44DBD5]/30 rounded-xl focus:outline-none focus:border-[#09856D] focus:ring-2 focus:ring-[#09856D]/20 bg-white/50 transition text-[#4D555D]"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleScheduleChange}
                className="w-full mb-4 px-4 py-3 border border-[#44DBD5]/30 rounded-xl focus:outline-none focus:border-[#09856D] focus:ring-2 focus:ring-[#09856D]/20 bg-white/50 transition text-[#4D555D]"
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="Telefone"
                value={formData.phone}
                onChange={handleScheduleChange}
                className="w-full mb-4 px-4 py-3 border border-[#44DBD5]/30 rounded-xl focus:outline-none focus:border-[#09856D] focus:ring-2 focus:ring-[#09856D]/20 bg-white/50 transition text-[#4D555D]"
                required
              />
              <select
                name="service"
                value={formData.service}
                onChange={handleScheduleChange}
                className="w-full mb-4 px-4 py-3 border border-[#44DBD5]/30 rounded-xl focus:outline-none focus:border-[#09856D] focus:ring-2 focus:ring-[#09856D]/20 bg-white/50 transition text-[#4D555D]"
                required
              >
                <option value="">Selecione um Serviço</option>
                <option value="consulta-geral">Consulta Geral</option>
                <option value="vacinacao">Vacinação</option>
                <option value="exames">Exames</option>
                <option value="monitoramento">Monitoramento</option>
              </select>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleScheduleChange}
                className="w-full mb-6 px-4 py-3 border border-[#44DBD5]/30 rounded-xl focus:outline-none focus:border-[#09856D] focus:ring-2 focus:ring-[#09856D]/20 bg-white/50 transition text-[#4D555D]"
                required
              />
              <div className="flex gap-3">
                <button
                  type="submit"
                  className="flex-1 bg-[#09856D] text-white py-3 rounded-xl font-semibold hover:bg-[#1CB795] transition duration-300"
                >
                  Agendar
                </button>
                <button
                  type="button"
                  onClick={() => setShowScheduleModal(false)}
                  className="flex-1 bg-[#44DBD5]/15 text-[#09856D] py-3 rounded-xl font-semibold hover:bg-[#44DBD5]/30 transition duration-300"
                >
                  Cancelar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {showPaymentModal && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center p-4 z-50 backdrop-blur-sm">
          <div className="bg-white rounded-xl p-8 max-w-md w-full shadow-lg">
            <h3 className="text-2xl font-semibold mb-2 text-[#4D555D]">Efetuar Pagamento</h3>
            <p className="text-[#4D555D] font-light mb-6 opacity-75">Consulta Médica - R$ 299,00</p>
            <form onSubmit={handlePaymentSubmit}>
              <input
                type="text"
                name="cardName"
                placeholder="Nome do Titular"
                value={paymentData.cardName}
                onChange={handlePaymentChange}
                className="w-full mb-4 px-4 py-3 border border-[#44DBD5]/30 rounded-xl focus:outline-none focus:border-[#09856D] focus:ring-2 focus:ring-[#09856D]/20 bg-white/50 transition text-[#4D555D]"
                required
              />
              <input
                type="text"
                name="cardNumber"
                placeholder="Número do Cartão"
                value={paymentData.cardNumber}
                onChange={handlePaymentChange}
                maxLength="19"
                className="w-full mb-4 px-4 py-3 border border-[#44DBD5]/30 rounded-xl focus:outline-none focus:border-[#09856D] focus:ring-2 focus:ring-[#09856D]/20 bg-white/50 transition text-[#4D555D]"
                required
              />
              <div className="grid grid-cols-2 gap-4 mb-6">
                <input
                  type="text"
                  name="expiry"
                  placeholder="MM/YY"
                  value={paymentData.expiry}
                  onChange={(e) => setPaymentData({ ...paymentData, expiry: e.target.value })}
                  maxLength="5"
                  className="px-4 py-3 border border-[#44DBD5]/30 rounded-xl focus:outline-none focus:border-[#09856D] focus:ring-2 focus:ring-[#09856D]/20 bg-white/50 transition text-[#4D555D]"
                  required
                />
                <input
                  type="text"
                  name="cvc"
                  placeholder="CVC"
                  value={paymentData.cvc}
                  onChange={(e) => setPaymentData({ ...paymentData, cvc: e.target.value })}
                  maxLength="3"
                  className="px-4 py-3 border border-[#44DBD5]/30 rounded-xl focus:outline-none focus:border-[#09856D] focus:ring-2 focus:ring-[#09856D]/20 bg-white/50 transition text-[#4D555D]"
                  required
                />
              </div>
              <div className="flex gap-3">
                <button
                  type="submit"
                  className="flex-1 bg-[#1CB795] text-white py-3 rounded-xl font-semibold hover:bg-[#09856D] transition duration-300"
                >
                  Pagar
                </button>
                <button
                  type="button"
                  onClick={() => setShowPaymentModal(false)}
                  className="flex-1 bg-[#44DBD5]/15 text-[#09856D] py-3 rounded-xl font-semibold hover:bg-[#44DBD5]/30 transition duration-300"
                >
                  Cancelar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <footer className="bg-[#4D555D] text-white/70 py-8">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="font-light">&copy; 2024 Dr. Carlos Medina. Todos os direitos reservados.</p>
          <p className="text-sm mt-2 font-light">Desenvolvido como portfólio de web design • Demonstração interativa</p>
        </div>
      </footer>
    </div>
  );
}
