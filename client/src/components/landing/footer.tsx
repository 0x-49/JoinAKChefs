import { Link } from "wouter";
import { SiInstagram, SiTiktok, SiX, SiYoutube } from "react-icons/si";

const socialLinks = [
  { icon: SiInstagram, href: "https://instagram.com/AKCHEFS" },
  { icon: SiTiktok, href: "https://tiktok.com/@akchefs_" },
  { icon: SiX, href: "https://x.com/AKCHEFS" },
  { icon: SiYoutube, href: "https://youtube.com/c/AKCHEFS" }
];

export default function Footer() {
  return (
    <footer className="bg-gray-900">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link href="/">
              <span className="text-xl font-bold text-white cursor-pointer">AK CHEFS</span>
            </Link>
            <p className="mt-4 text-gray-400">
              Premium sneaker reselling consulting agency designed to benefit our members
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Quick Links</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <a href="#features" className="text-base text-gray-300 hover:text-white">Features</a>
              </li>
              <li>
                <a href="#success-stories" className="text-base text-gray-300 hover:text-white">Success Stories</a>
              </li>
              <li>
                <a href="#pricing" className="text-base text-gray-300 hover:text-white">Pricing</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Contact</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <span className="text-base text-gray-300">info@JoinAKChefs.com</span>
              </li>
              <li>
                <span className="text-base text-gray-300">(800) 975-1539</span>
              </li>
              <li>
                <span className="text-base text-gray-300">893 Main St SW, Gainesville, GA 30501</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Follow Us</h3>
            <div className="mt-4 flex space-x-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white"
                >
                  <social.icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-800 pt-8">
          <p className="text-base text-gray-400 text-center">
            © {new Date().getFullYear()} AK CHEFS. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}