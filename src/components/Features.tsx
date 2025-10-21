// src/components/Features.tsx
import { useState } from 'react';

const features = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'Segurança Verificada',
    description: 'Verificação de identidade completa, avaliações da comunidade e suporte 24/7 para sua tranquilidade.',
    color: 'from-blue-600 to-cyan-600'
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Economia Real',
    description: 'Economize até 70% nos custos de transporte diário. Divida combustível e pedágios de forma justa.',
    color: 'from-green-600 to-emerald-600'
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Sustentável',
    description: 'Reduza sua pegada de carbono e contribua para cidades mais limpas. Cada carona conta!',
    color: 'from-emerald-600 to-green-600'
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Rápido e Fácil',
    description: 'Interface intuitiva e moderna. Encontre ou publique uma carona em menos de 2 minutos.',
    color: 'from-violet-600 to-purple-600'
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
    title: 'Chat Integrado',
    description: 'Converse diretamente com motoristas e passageiros de forma segura antes de confirmar a carona.',
    color: 'from-pink-600 to-rose-600'
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
      </svg>
    ),
    title: 'Rotas Inteligentes',
    description: 'Algoritmo que encontra as melhores combinações de trajetos para máxima eficiência e economia.',
    color: 'from-orange-600 to-amber-600'
  }
];

export default function Features() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="recursos" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">

        {/* Header */}
        <div className="max-w-3xl mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-100 rounded-full mb-6">
            <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
            </svg>
            <span className="text-sm font-semibold text-blue-700">Por que escolher a AgilTéc</span>
          </div>

          <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Tudo que você precisa em um só lugar
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Tecnologia de ponta, segurança máxima e economia real para transformar suas caronas urbanas.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`
                group relative p-8 rounded-3xl transition-all duration-500 cursor-pointer
                ${hoveredIndex === index
                  ? 'bg-white shadow-2xl -translate-y-2 border-2 border-gray-100'
                  : 'bg-white shadow-lg border-2 border-transparent hover:border-gray-100'
                }
              `}
            >
              {/* Gradient Glow Effect */}
              {hoveredIndex === index && (
                <div className={`absolute inset-0 bg-gradient-to-r ${feature.color} opacity-5 rounded-3xl -z-10`}></div>
              )}

              {/* Icon Container */}
              <div className="relative mb-6">
                <div className={`
                  absolute inset-0 bg-gradient-to-r ${feature.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500
                `}></div>
                <div className={`
                  relative w-14 h-14 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center text-white transform transition-all duration-500
                  ${hoveredIndex === index ? 'scale-110 rotate-3' : 'scale-100 rotate-0'}
                `}>
                  {feature.icon}
                </div>
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-gray-900 transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>

              {/* Arrow Indicator */}
              <div className={`
                mt-5 flex items-center gap-2 text-sm font-semibold transition-all duration-300
                ${hoveredIndex === index ? 'translate-x-2 opacity-100' : 'translate-x-0 opacity-0'}
              `}>
                <span className={`bg-gradient-to-r ${feature.color} bg-clip-text text-transparent`}>
                  Saiba mais
                </span>
                <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}