import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-navy-dark py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
                <span className="font-heading font-bold text-accent-foreground text-lg">N</span>
              </div>
              <span className="font-heading font-bold text-primary-foreground text-xl">
                NALAR<span className="text-orange">XR</span>
              </span>
            </div>
            <p className="text-primary-foreground/50 text-sm leading-relaxed">
              PT Akal Budi Bertumbuh
              <br />
              Membangun Nalar, Menciptakan Makna
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-heading font-bold text-primary-foreground mb-4">Produk</h4>
            <ul className="space-y-2 text-primary-foreground/50 text-sm">
              <li><a href="#produk" className="hover:text-orange transition-colors">NalarXR Pro</a></li>
              <li><a href="#produk" className="hover:text-orange transition-colors">NalarXR Lite</a></li>
              <li><a href="#nalarxr" className="hover:text-orange transition-colors">Konten Immersif</a></li>
              <li><a href="#" className="hover:text-orange transition-colors">Portal Manajemen</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold text-primary-foreground mb-4">Perusahaan</h4>
            <ul className="space-y-2 text-primary-foreground/50 text-sm">
              <li><a href="#nalarxr" className="hover:text-orange transition-colors">Tentang Kami</a></li>
              <li><a href="#karir" className="hover:text-orange transition-colors">Karir</a></li>
              <li><a href="#media" className="hover:text-orange transition-colors">Media</a></li>
              <li><a href="#rd" className="hover:text-orange transition-colors">R&D</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-bold text-primary-foreground mb-4">Kontak</h4>
            <ul className="space-y-3 text-primary-foreground/50 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 text-orange shrink-0" />
                <span>Jakarta, Indonesia</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-orange shrink-0" />
                <a href="mailto:info@nalarxr.com" className="hover:text-orange transition-colors">
                  info@nalarxr.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-orange shrink-0" />
                <a href="tel:+6221000000" className="hover:text-orange transition-colors">
                  +62 21 000 000
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-8 text-center text-primary-foreground/30 text-sm">
          <p>© 2026 NalarXR — PT Akal Budi Bertumbuh. Hak cipta dilindungi.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
