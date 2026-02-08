'use client';

import LinkComponent from './LinkComponent';
import './style.css';

export default function Links() {
  return (
    <>
    <img src="/logo.jpeg" alt="Triton Web Developers Logo" className="w-32 h-32 rounded-full object-cover block mx-auto mt-10" />
    <h1 className="text-center text-4xl font-bold mt-5 mb-2">Quick Links</h1>
    <p className="text-center text-xl">Triton Web Developers</p>

    <ul className='text-center text-xl'>
        <LinkComponent href="https://forms.gle/gU3cz6WKAjG8A6z78" name="Member Interest Form" />
        <LinkComponent href="https://forms.gle/uYxvRknZjupzVV797" name="Website Request Form" />
        <LinkComponent href="https://tritonwebdev.github.io" name="Website" />
        <LinkComponent href="https://www.instagram.com/twd.at.ucsd/" name="Instagram" />
    </ul>

    </>
  );
}