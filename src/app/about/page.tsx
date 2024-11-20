"use client";

import Footer from "~/components/footer";

export default function About() {
  return (
    <main className="flex flex-col items-center bg-gradient-to-b from-indigo-900 to-purple-900">
      <div className="flex min-h-screen w-full max-w-4xl flex-col px-4">
        <div className="flex flex-grow flex-col items-center gap-12 py-16">
          <h1 className="text-center text-4xl font-bold text-white md:text-6xl">
            About <span className="text-purple-400">Us</span>
          </h1>

          <p className="max-h-[calc(100vh-300px)] w-full max-w-2xl overflow-y-auto text-justify text-white">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti
            fugit, dolorem doloribus quibusdam labore, voluptate, soluta
            doloremque necessitatibus nam molestias perspiciatis reiciendis
            illum! Amet neque cupiditate optio deserunt veritatis velit ut nulla
            odit veniam sequi iusto, autem enim! Laudantium odio, sed fugit nisi
            quisquam ex nulla ratione, obcaecati aliquam ab animi aspernatur
            totam excepturi veniam ad! Nobis, veniam autem quibusdam cupiditate
            magni facilis dolores nemo quae earum dicta, voluptate, consectetur
            ad deleniti beatae dolorum numquam reiciendis eveniet tempora iusto
            itaque. Cupiditate officiis architecto inventore ut pariatur
            molestias facere assumenda est quibusdam amet suscipit ab ipsa, cum
            qui quidem quia dignissimos?
          </p>
        </div>
        <Footer />
      </div>
    </main>
  );
}
