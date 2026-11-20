import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import SplitContentWrapper from '@/components/animations/SplitContentWrapper';

export interface SplitContentSectionProps {
  eyebrow?: string;
  heading: string;
  headingClassName?: string;
  description: string | React.ReactNode;
  image?: string;
  imagePosition?: 'left' | 'right';
  imageObjectPosition?: string;
  imageScale?: string;
  theme?: 'light' | 'dark' | 'transparent';
  button?: {
    label: string;
    href: string;
  };
  id?: string;
  className?: string;
}

const SplitContentSection = ({
  eyebrow,
  heading,
  headingClassName,
  description,
  image,
  imagePosition = 'left',
  imageObjectPosition = 'center',
  imageScale = 'scale-[1.3]',
  theme = 'transparent',
  button,
  id,
  className = '',
}: SplitContentSectionProps) => {

  const themeClasses = {
    light: 'bg-surface-page text-text-primary',
    dark: 'bg-earth-900 text-warm-50',
    transparent: 'bg-transparent text-text-primary'
  };

  const isDark = theme === 'dark';

  return (
    <SplitContentWrapper id={id} className={className}>
      {/* 1. SECCIÓN CONTENEDOR: Fondo completo con 200vh y colchón vertical masivo */}
      <section 
        className={`relative flex min-h-0 w-full items-center justify-center overflow-hidden px-4 py-16 md:px-6 md:py-24 lg:min-h-screen lg:px-4 ${themeClasses[theme]}`}
      >
        <div
          className={`flex w-full flex-col items-center gap-12 lg:flex-row lg:gap-20 ${
            imagePosition === 'right' ? 'lg:flex-row-reverse' : ''
          }`}
        >

          {image && (
            <div className="w-full lg:w-1/2">
              <div className="split-image-container relative h-[70vh] w-full overflow-hidden lg:h-screen">
                <div className="absolute inset-0 z-10 h-full w-full">
                  <Image
                    src={image}
                    alt={heading}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    style={{ objectPosition: imageObjectPosition }}
                    className={`split-image-inner origin-center ${imageScale} object-cover transition-transform duration-700 group-hover:scale-[1.35]`}
                  />
                </div>
              </div>
            </div>
          )}

          <div
            className={`flex w-full items-center justify-start ${
              image ? 'lg:w-1/2 lg:pl-8' : 'lg:ml-auto lg:w-1/2 lg:pl-8'
            }`}
          >
            <div className="split-text relative z-30 flex w-full max-w-lg flex-col gap-6">
              
              {eyebrow && (
                <div className="flex items-center gap-2">
                  <span className="w-5 h-px bg-ochre-500 inline-block" aria-hidden="true" />
                  <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-ochre-500 font-semibold">
                    {eyebrow}
                  </span>
                </div>
              )}

              <h2 className={headingClassName || `text-xl font-bold tracking-tight md:text-2xl ${isDark ? 'text-warm-50' : 'text-text-primary'}`}>
                {heading}
              </h2>
              
              {typeof description === 'string' ? (
                <p className={`text-base md:text-lg leading-relaxed font-light ${isDark ? 'text-warm-50/80' : 'text-text-secondary'}`}>
                  {description}
                </p>
              ) : (
                <div className={`text-base md:text-lg leading-relaxed font-light space-y-6 ${isDark ? 'text-warm-50/80' : 'text-text-secondary'}`}>
                  {description}
                </div>
              )}

              {button && (
                <div className="pt-2">
                  <Link
                    href={button.href}
                    className={`inline-block text-[11px] font-bold uppercase tracking-[0.2em] border-b pb-1 transition-colors ${
                      isDark 
                        ? 'border-warm-50 text-warm-50 hover:text-ochre-400 hover:border-ochre-400' 
                        : 'border-text-primary text-text-primary hover:text-ochre-500 hover:border-ochre-500'
                    }`}
                  >
                    {button.label}
                  </Link>
                </div>
              )}

            </div>
          </div>

        </div>
      </section>
    </SplitContentWrapper>
  );
};

export default SplitContentSection;