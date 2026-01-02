import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-16">
          
          {/* Column 1: Brand */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-bold text-white mb-4">Alpha Tech School</h3>
            <p className="text-gray-400 max-w-sm">
              A modern tech school focused on training people build realdigital skills and giving students hands-on experiences they need to grow in today's tech world
            </p>
            <div className="flex gap-6">
             {/* Social placeholders */}
            <span className="text-gray-500 hover:text-white cursor-pointer">Instagram</span>
            <span className="text-gray-500 hover:text-white cursor-pointer">Twitter</span>
            <span className="text-gray-500 hover:text-white cursor-pointer">LinkedIn</span>
          </div>
          </div>

          {/* Column 2: Links */}
          <div>
            <h4 className="text-white font-semibold mb-6">Courses</h4>
            <ul className="space-y-4">
              <li><Link href="/programs" className="text-gray-400 hover:text-white">Web Development</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-white">Data Science</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-white">Cybersecurity</Link></li>
              <li><Link href="/login" className="text-gray-400 hover:text-white">UX/UI design</Link></li>
            </ul>
          </div>

          {/* Column 3: Links */}
          <div>
            <h4 className="text-white font-semibold mb-6">About Us</h4>
            <ul className="space-y-4">
              <li><Link href="/programs" className="text-gray-400 hover:text-white">Our Story</Link></li>
              <li><Link href="/careers" className="text-gray-400 hover:text-white">careers</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-white">Contact Us</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-white">Services</Link></li>
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h4 className="text-white font-semibold mb-6">Contact</h4>
            <ul className="space-y-4 text-gray-400">
              <li>Help Center</li>
              <li>Terms</li>
              <li>Privacy Policy</li>
              <li>Cookies Policy</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Alpha Tech School. All rights reserved.
          </p>
          
        </div>
      </div>
    </footer>
  );
}