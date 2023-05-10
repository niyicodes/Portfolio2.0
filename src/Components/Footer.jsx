import Link from "next/link";


const Footer = () => {
 return (
  <footer className="w-full border-t-2 border-solid border-dark font-medium text-lg relative px-4 py-4">
   <section className="py-8 flex items-center justify-between">
    <span>{new Date().getFullYear()} &copy; All Rights Reserved</span>
    <div className="flex items-center">
     Hack with <span className="text-primary text-2xl">&#9825;</span>
     <Link href="/" className="underline underline-offset-2">Niyicodes</Link>
    </div>
    <Link href="/">Let's hack together!</Link>
   </section>
  </footer>
 );
};

export default Footer;
