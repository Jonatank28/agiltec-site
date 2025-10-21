// src/components/Testimonials.tsx
import { useState } from 'react';

const testimonials = [
  {
    name: 'Carlos Silva',
    role: 'Engenheiro',
    avatar: 'CS',
    rating: 5,
    text: 'Uso o AgilTéc todos os dias para ir ao trabalho. Já economizei mais de R$ 800 só neste mês! O app é super fácil de usar e os motoristas são sempre pontuais.',
    savings: 'R$ 847',
    rides: 42
  },
  {
    name: 'Marina Costa',
    role: 'Estudante de Medicina',
    avatar: 'MC',
    rating: 5,
    text: 'Como estudante, preciso economizar onde posso. Com o AgilTéc consigo ir para a faculdade gastando muito menos e ainda conheço pessoas legais no caminho!',
    savings: 'R$ 623',
    rides: 38
  },
  {
    name: 'Roberto Alves',
    role: 'Motorista',
    avatar: 'RA',
    rating: 5,
    text: 'Ofereço caronas todos os dias e ajuda muito com os custos do combustível. O sistema de avaliações dá segurança tanto para mim quanto para os passageiros.',
    savings: 'R$ 1.245',
    rides: 89
  }
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="depoimentos" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-6">

        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-50 border border-amber-100 rounded-full mb-6">
            <svg className="w-4 h-4 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="text-sm font-semibold text-amber-700">Depoimentos</span>
          </div>

          <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            O que nossos usuários dizem
          </h2>
          <p className="text-xl text-gray-600">
            Milhares de pessoas já economizam e viajam com segurança todos os dias
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl p-8 border-2 border-gray-100 hover:border-blue-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Rating */}
              <div className="flex items-center gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-amber-400 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Text */}
              <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                "{testimonial.text}"
              </p>

              {/* Stats */}
              <div className="flex gap-4 mb-6 p-4 bg-gray-50 rounded-2xl">
                <div className="flex-1">
                  <div className="text-sm text-gray-500 mb-1">Economizou</div>
                  <div className="text-lg font-bold text-green-600">{testimonial.savings}</div>
                </div>
                <div className="w-px bg-gray-200"></div>
                <div className="flex-1">
                  <div className="text-sm text-gray-500 mb-1">Caronas</div>
                  <div className="text-lg font-bold text-blue-600">{testimonial.rides}</div>
                </div>
              </div>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-violet-600 rounded-2xl flex items-center justify-center text-white font-bold text-lg shadow-lg">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-bold text-gray-900 text-lg">{testimonial.name}</div>
                  <div className="text-gray-600 text-sm">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="max-w-4xl mx-auto mt-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-gray-900 mb-2">4.9★</div>
              <div className="text-gray-600 text-sm">Avaliação média</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-gray-900 mb-2">50k+</div>
              <div className="text-gray-600 text-sm">Usuários ativos</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-gray-900 mb-2">100k+</div>
              <div className="text-gray-600 text-sm">Caronas realizadas</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-gray-900 mb-2">98%</div>
              <div className="text-gray-600 text-sm">Satisfação</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}