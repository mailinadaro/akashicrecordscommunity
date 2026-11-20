

export default function Home() {
  return (
    <section className="relative min-h-svh w-full overflow-hidden">
      <video
        className="absolute inset-0 h-full w-full object-cover transform scale-132"
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
      >
        <source src="/tours-video.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/30" />

      <div className="relative z-10 flex min-h-svh flex-col items-center justify-end pb-2">
        <p className="absolute left-1/2 top-1/2 w-[calc(100%-2rem)] max-w-[18rem] -translate-x-1/2 -translate-y-1/2 px-2 text-center font-display text-lg italic text-text-on-action/80">
          Viajes a Medida y Excursiones <br className="sm:hidden" />
          Privadas en el Norte Argentino
        </p>
        <h1 className="absolute bottom-0 w-full text-center font-display text-9xl uppercase text-text-on-action sm:text-6xl md:text-7xl md:tracking-[0.2em] lg:text-8xl">
  Vive Jujuy
</h1>
      </div>
        <div>
    
    </div>
    </section>

  );
}
