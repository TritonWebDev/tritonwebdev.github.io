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
        <LinkComponent href="https://docs.google.com/forms/d/e/1FAIpQLSfAJcxCbETaHIiGI0hMbVnfohyqzbwMDS64Zb285Sk5kP5OSA/viewform?usp=sharing&ouid=103814153701455182972" name="Developer Application Form" />
        <LinkComponent href="https://docs.google.com/forms/d/e/1FAIpQLSdF5OtxK_aCVcjdo70n2sDWJCxb4tb9rN-1r_oOSQkQMnMAhA/viewform?usp=sharing&ouid=103814153701455182972" name="Marketing Officer Application Form" />
        <LinkComponent href="https://forms.gle/uYxvRknZjupzVV797" name="Website Request Form" />
        <LinkComponent href="https://tritonwebdev.github.io" name="Website" />
        <LinkComponent href="https://www.instagram.com/twd.at.ucsd/" name="Instagram" />
    </ul>

    </>
  );
}