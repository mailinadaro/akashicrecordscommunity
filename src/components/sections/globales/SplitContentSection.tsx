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
  imageObjectPosition = 'center 20%',
  imageScale = '',
  theme = 'transparent',
  button,
  id,
  className = '',
}: SplitContentSectionProps) => {

  const themeClasses = {
    light: 'bg-surface-page text-text-primary',
    dark: 'bg-plum-950 text-gold-200 border-t border-b border-gold-400/20',
    transparent: 'bg-transparent text-text-primary'
  };

  const isDark = theme === 'dark';

  return (
    <SplitContentWrapper id={id} className={className}>
      <section 
        className={`relative flex w-full items-center justify-center overflow-hidden py-20 lg:py-28 border-t border-border-default ${themeClasses[theme]}`}
      >
        <div className="w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
          <div
            className={`flex w-full flex-col items-center gap-12 lg:flex-row lg:gap-16 ${
              imagePosition === 'right' ? 'lg:flex-row-reverse' : ''
            }`}
          >

            {image && (
              <div className="w-full lg:w-5/12 shrink-0">
                <div className="split-image-container relative w-full aspect-[4/5] sm:aspect-[3/4] lg:aspect-[4/5] max-h-[660px] rounded-3xl overflow-hidden shadow-2xl border border-border-default/60 bg-surface-secondary">
                  <div className="absolute inset-0 z-10 h-full w-full">
                    <Image
                      src={image}
                      alt={heading}
                      fill
                      priority
                      sizes="(max-width: 1024px) 100vw, 42vw"
                      style={{ objectPosition: imageObjectPosition }}
                      className={`split-image-inner origin-center ${imageScale} object-cover`}
                    />
                  </div>
                </div>
              </div>
            )}

            <div
              className={`flex w-full flex-col justify-center ${
                image ? 'lg:w-7/12' : 'max-w-3xl mx-auto'
              }`}
            >
              <div className="split-text relative z-30 flex w-full flex-col gap-6">
                
                {eyebrow && (
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-px bg-gold-600 inline-block" aria-hidden="true" />
                    <span className="text-[11px] font-sans uppercase tracking-[0.25em] text-gold-700 font-semibold">
                      {eyebrow}
                    </span>
                  </div>
                )}

                <h2 className={headingClassName || `text-2xl font-bold tracking-tight md:text-3xl lg:text-4xl ${isDark ? 'text-gold-200' : 'text-plum-950'}`}>
                  {heading}
                </h2>
                
                {typeof description === 'string' ? (
                  <p className={`text-base md:text-lg leading-relaxed font-light ${isDark ? 'text-gold-200/80' : 'text-text-secondary'}`}>
                    {description}
                  </p>
                ) : (
                  <div className={`text-base md:text-lg leading-relaxed font-light space-y-6 ${isDark ? 'text-gold-200/80' : 'text-text-secondary'}`}>
                    {description}
                  </div>
                )}

                {button && (
                  <div className="pt-2">
                    <Link
                      href={button.href}
                      className={`inline-block text-[11px] font-bold uppercase tracking-[0.2em] border-b pb-1 transition-colors ${
                        isDark 
                          ? 'border-gold-300 text-gold-300 hover:text-gold-500 hover:border-gold-500' 
                          : 'border-plum-950 text-plum-950 hover:text-gold-700 hover:border-gold-700'
                      }`}
                    >
                      {button.label}
                    </Link>
                  </div>
                )}

              </div>
            </div>

          </div>
        </div>
      </section>
    </SplitContentWrapper>
  );
};

export default SplitContentSection;