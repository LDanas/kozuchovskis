import { useEffect } from 'react';

export default function Widget() {
  useEffect(() => {
    document.querySelectorAll('nav a').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
  }, []);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full bg-purple-500 bg-opacity-75 text-white py-4 z-50">
        <div className="container mx-auto flex justify-end space-x-8">
          <a href="#home" className="hover:underline">Home</a>
          <a href="#about-me" className="hover:underline">About Me</a>
          <a href="#projects" className="hover:underline">Projects</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </div>
      </nav>
      <section id="home" className="min-h-screen flex flex-col items-center justify-center bg-zinc-900 text-white">
        <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold animate-fade-in-right">Hello, I'm <span className="text-red-500">Danas</span>.</h1>
        <p className="text-2xl md:text-4xl lg:text-6xl mt-4 animate-fade-in-left">I'm a web developer.</p>
      </section>
      <section id="about-me" className="min-h-screen flex flex-col items-center justify-center bg-zinc-900 text-white">
        <h2 className="text-4xl font-bold mb-8">About Me</h2>
        <div className="w-72 h-72 rounded-full overflow-hidden mb-8">
          <img src="https://placehold.co/300x300" alt="About Me Image" className="w-full h-full object-cover" />
        </div>
        <div className="space-y-4 text-center">
          <p className="text-base animate-fade-in">Paragraph 1</p>
          <p className="text-base animate-fade-in delay-3000">Paragraph 2</p>
          <p className="text-base animate-fade-in delay-6000">Paragraph 3</p>
          <p className="text-base animate-fade-in delay-9000">Paragraph 4</p>
          <p className="text-base animate-fade-in delay-12000">Paragraph 5</p>
          <p className="text-base animate-fade-in delay-15000">Paragraph 6</p>
          <p className="text-base animate-fade-in delay-18000">Paragraph 7</p>
        </div>
      </section>
      <section id="projects" className="min-h-screen flex flex-col items-center justify-center bg-zinc-900 text-white">
        <h2 className="text-4xl font-bold mb-8">Projects</h2>
        <div className="w-72 h-72 rounded-full overflow-hidden mb-8">
          <img src="https://placehold.co/300x300" alt="Projects Image" className="w-full h-full object-cover" />
        </div>
        <div className="text-center">
          <p className="text-base">This is a text field where I can write about my projects.</p>
        </div>
      </section>
      <section id="contact" className="min-h-screen flex flex-col items-center justify-center bg-zinc-900 text-white">
        <h2 className="text-4xl font-bold mb-8">Contact</h2>
        <p><a href="mailto:danas.kozuchovskis@gmail.com" className="bg-purple-500 text-white py-2 px-4 rounded-lg">Message me now!</a></p>
      </section>
      <style>
        {`
          @keyframes fade-in-right {
            from {
              opacity: 0;
              transform: translateX(100%);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }

          @keyframes fade-in-left {
            from {
              opacity: 0;
              transform: translateX(-100%);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }

          @keyframes fade-in {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }

          .animate-fade-in-right {
            animation: fade-in-right 1s ease-out;
          }

          .animate-fade-in-left {
            animation: fade-in-left 1s ease-out;
          }

          .animate-fade-in {
            animation: fade-in 1s ease-out forwards;
          }

          .delay-3000 {
            animation-delay: 3s;
          }

          .delay-6000 {
            animation-delay: 6s;
          }

          .delay-9000 {
            animation-delay: 9s;
          }

          .delay-12000 {
            animation-delay: 12s;
          }

          .delay-15000 {
            animation-delay: 15s;
          }

          .delay-18000 {
            animation-delay: 18s;
          }
        `}
      </style>
    </>
  );
}
