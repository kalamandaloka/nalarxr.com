import { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import classroomImg from "@/assets/classroom-management.jpg";
import headsetImg from "@/assets/headset-premium.png";

interface SubMenuItem {
  label: string;
  href: string;
}

interface MenuItem {
  label: string;
  href: string;
  tagline?: string;
  ctaImage?: string;
  ctaTitle?: string;
  ctaLink?: string;
  ctaType?: "image" | "compro" | "default";
  children?: SubMenuItem[];
}

const menuItems: MenuItem[] = [
  { label: "BERANDA", href: "/" },
  {
    label: "NALARXR", href: "/nalarxr",
    tagline: "MERAWAT NALAR MEMAHAMI DUNIA",
    ctaType: "compro",
    ctaTitle: "COMPRO",
    ctaLink: "/nalarxr/tentang",
    children: [
      { label: "Tentang", href: "/nalarxr/tentang" },
      { label: "Kerjasama", href: "/nalarxr/kerjasama" },
      { label: "Investor", href: "/nalarxr/investor" },
      { label: "Lokasi", href: "/nalarxr/lokasi" },
      { label: "Kontak", href: "/nalarxr/kontak" },
    ],
  },
  {
    label: "XR PENDIDIKAN", href: "/xr-pendidikan",
    tagline: "PEMBELAJARAN INTERAKTIF SESUAI STANDAR SKKNI DAN KURIKULUM NASIONAL",
    ctaType: "image",
    ctaTitle: "AJUKAN JURUSAN",
    ctaLink: "/xr-pendidikan/ajukan-jurusan",
    ctaImage: classroomImg,
    children: [
      { label: "Otomotif", href: "/xr-pendidikan/otomotif" },
      { label: "Pertanian", href: "/xr-pendidikan/pertanian" },
      { label: "Tataboga", href: "/xr-pendidikan/tataboga" },
      { label: "Perhotelan", href: "/xr-pendidikan/perhotelan" },
      { label: "TKJ", href: "/xr-pendidikan/tkj" },
      { label: "Pariwisata", href: "/xr-pendidikan/pariwisata" },
      { label: "Ekonomi Kreatif", href: "/xr-pendidikan/ekonomi-kreatif" },
      { label: "Energi Terbaru", href: "/xr-pendidikan/energi-terbaru" },
      { label: "Perkapalan", href: "/xr-pendidikan/perkapalan" },
      { label: "Keperawatan", href: "/xr-pendidikan/keperawatan" },
      { label: "Pesawat", href: "/xr-pendidikan/pesawat" },
      { label: "Ajukan Jurusan", href: "/xr-pendidikan/ajukan-jurusan" },
    ],
  },
  {
    label: "PRODUK", href: "/produk",
    tagline: "SOLUSI TEKNOLOGI IMMERSIF UNTUK BERBAGAI SEKTOR INDUSTRI DAN PENDIDIKAN",
    ctaType: "image",
    ctaTitle: "KATALOG PRODUK",
    ctaLink: "/produk",
    ctaImage: headsetImg,
    children: [
      { label: "Sekolah Dasar", href: "/produk/sekolah-dasar" },
      { label: "Sekolah Menengah", href: "/produk/sekolah-menengah" },
      { label: "Sekolah Kejuruan", href: "/produk/sekolah-kejuruan" },
      { label: "Universitas", href: "/produk/universitas" },
      { label: "Industri", href: "/produk/industri" },
      { label: "Militer", href: "/produk/militer" },
    ],
  },
  {
    label: "R&D", href: "/rd",
    tagline: "INOVASI TIADA HENTI UNTUK MASA DEPAN TEKNOLOGI",
    ctaType: "default",
    ctaTitle: "RISET KAMI",
    ctaLink: "/rd",
    children: [
      { label: "R&D Labs", href: "/rd/labs" },
      { label: "Next Products", href: "/rd/next-products" },
      { label: "Spatial & Hologram", href: "/rd/spatial-hologram" },
      { label: "Artificial Intelligence", href: "/rd/ai" },
    ],
  },
  {
    label: "MEDIA", href: "/media",
    tagline: "INFORMASI TERKINI SEPUTAR AKTIVITAS DAN PERKEMBANGAN NALARXR",
    ctaType: "default",
    ctaTitle: "BERITA TERBARU",
    ctaLink: "/media",
    children: [
      { label: "Artikel / Berita", href: "/media/artikel" },
      { label: "Kegiatan / Event", href: "/media/kegiatan" },
      { label: "Video & Galeri", href: "/media/video-galeri" },
      { label: "Press Release", href: "/media/press-release" },
    ],
  },
  {
    label: "KARIR", href: "/karir",
    tagline: "BERGABUNG BERSAMA KAMI MEMBANGUN MASA DEPAN",
    ctaType: "default",
    ctaTitle: "LOWONGAN",
    ctaLink: "/karir",
    children: [
      { label: "Lowongan Kerja", href: "/karir/lowongan" },
      { label: "Programmer", href: "/karir/programmer" },
      { label: "3D Modeler", href: "/karir/3d-modeler" },
      { label: "Game Developer", href: "/karir/game-developer" },
      { label: "Internship / Magang", href: "/karir/internship" },
    ],
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const isActive = (href: string) => {
    if (href === "/") return location.pathname === "/";
    return location.pathname.startsWith(href);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-md border-b border-primary-foreground/10">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
              <span className="font-heading font-bold text-accent-foreground text-lg">N</span>
            </div>
            <span className="font-heading font-bold text-primary-foreground text-xl tracking-tight">
              NALAR<span className="text-orange">XR</span>
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:block">
            <NavigationMenu>
              <NavigationMenuList>
                {menuItems.map((item) => (
                  <NavigationMenuItem key={item.label}>
                    {item.children ? (
                      <>
                        <NavigationMenuTrigger
                          className={cn(
                            "bg-transparent hover:bg-white/10 text-primary-foreground focus:bg-white/10 focus:text-primary-foreground data-[active]:bg-white/10 data-[state=open]:bg-white/10 font-heading font-semibold tracking-wider text-xs uppercase",
                            isActive(item.href) && "text-orange"
                          )}
                        >
                          {item.label}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent className="bg-primary border-primary-foreground/10">
                          <div className="w-[900px] grid grid-cols-12 gap-0 p-0 overflow-hidden rounded-md">
                            {/* Column 1: Tagline */}
                            <div className="col-span-4 p-8 flex flex-col justify-between border-r border-primary-foreground/10 bg-primary-foreground/5">
                              <h3 className="font-heading font-bold text-xl lg:text-2xl leading-tight text-primary-foreground mb-6">
                                {item.tagline}
                              </h3>
                              <Link to={item.href} className="inline-flex items-center text-xs font-bold tracking-widest text-primary-foreground/70 hover:text-orange transition-colors uppercase group">
                                LIHAT SEMUA
                                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                              </Link>
                            </div>

                            {/* Column 2: Menu Links */}
                            <div className="col-span-4 p-8 bg-primary">
                              <ul className={cn("grid gap-x-4 gap-y-3", item.children.length > 6 ? "grid-cols-2" : "grid-cols-1")}>
                                {item.children.map((child) => (
                                  <li key={child.href}>
                                    <NavigationMenuLink asChild>
                                      <Link
                                        to={child.href}
                                        className={cn(
                                          "block text-sm transition-colors hover:text-orange",
                                          location.pathname === child.href
                                            ? "text-orange font-medium"
                                            : "text-primary-foreground/70"
                                        )}
                                      >
                                        {child.label}
                                      </Link>
                                    </NavigationMenuLink>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            {/* Column 3: Image/CTA */}
                            <div className="col-span-4 p-2 bg-primary">
                              {item.ctaType === "compro" ? (
                                <Link to={item.ctaLink || "#"} className="block h-full w-full bg-orange hover:bg-orange-light transition-colors p-8 flex flex-col justify-between relative overflow-hidden group rounded-lg">
                                  <p className="text-white/80 text-sm font-medium mb-1">DOWNLOAD</p>
                                  <h4 className="font-heading font-bold text-3xl text-white mb-2">{item.ctaTitle}</h4>
                                  <div className="flex items-end justify-between relative z-10">
                                    <div className="bg-white/20 p-2 rounded-full backdrop-blur-sm group-hover:bg-white/30 transition-colors">
                                      <ArrowRight className="w-5 h-5 text-white" />
                                    </div>
                                    <span className="font-heading font-bold text-4xl text-white/90">2026</span>
                                  </div>
                                  <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl group-hover:bg-white/20 transition-all" />
                                </Link>
                              ) : item.ctaType === "image" ? (
                                <Link to={item.ctaLink || "#"} className="block h-full w-full relative group overflow-hidden rounded-lg">
                                  {item.ctaImage && (
                                    <img 
                                      src={item.ctaImage} 
                                      alt={item.ctaTitle} 
                                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                                    />
                                  )}
                                  <div className="absolute inset-x-0 bottom-0 p-6 z-20 bg-gradient-to-t from-black/80 to-transparent">
                                    <div className="bg-black/40 backdrop-blur-md border border-white/10 p-4 rounded-lg flex items-center justify-between group-hover:bg-orange/90 group-hover:border-orange transition-all duration-300">
                                      <span className="font-heading font-bold text-white text-sm tracking-wide">
                                        {item.ctaTitle}
                                      </span>
                                      <ArrowRight className="w-4 h-4 text-white" />
                                    </div>
                                  </div>
                                </Link>
                              ) : (
                                <Link to={item.ctaLink || "#"} className="block h-full w-full bg-navy-light hover:bg-navy-light/80 transition-colors p-8 flex flex-col justify-center items-center text-center rounded-lg group border border-white/5">
                                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                                    <ArrowRight className="w-8 h-8 text-orange" />
                                  </div>
                                  <h4 className="font-heading font-bold text-xl text-white mb-2">{item.ctaTitle}</h4>
                                  <p className="text-primary-foreground/60 text-sm">
                                    Klik untuk informasi lebih lanjut
                                  </p>
                                </Link>
                              )}
                            </div>
                          </div>
                        </NavigationMenuContent>
                      </>
                    ) : (
                      <NavigationMenuLink asChild>
                        <Link
                          to={item.href}
                          className={cn(
                            navigationMenuTriggerStyle(),
                            "bg-transparent hover:bg-white/10 text-primary-foreground focus:bg-white/10 focus:text-primary-foreground data-[active]:bg-white/10 data-[state=open]:bg-white/10 font-heading font-semibold tracking-wider text-xs uppercase",
                            isActive(item.href) && "text-orange"
                          )}
                        >
                          {item.label}
                        </Link>
                      </NavigationMenuLink>
                    )}
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Right Actions */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              to="/nalarxr/kontak"
              className="bg-accent hover:opacity-90 text-accent-foreground font-heading font-semibold px-5 py-2.5 rounded-lg text-sm transition-opacity"
            >
              Hubungi Kami
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden p-2 text-primary-foreground">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-primary-foreground/10 bg-primary"
          >
            <div className="container mx-auto px-4 py-4 space-y-4 max-h-[80vh] overflow-y-auto">
              {menuItems.map((item) => (
                <div key={item.label}>
                  {item.children ? (
                    <div className="space-y-2">
                      <div className="font-heading font-semibold text-primary-foreground/80 px-2">
                        {item.label}
                      </div>
                      <div className="grid grid-cols-2 gap-2 pl-4">
                        <Link
                          to={item.href}
                          className="col-span-2 text-sm text-orange py-2 px-2 rounded-md hover:bg-white/5"
                        >
                          Lihat Semua →
                        </Link>
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            to={child.href}
                            className={`text-sm py-2 px-2 rounded-md transition-colors ${
                              location.pathname === child.href
                                ? "text-orange bg-white/5"
                                : "text-primary-foreground/70 hover:text-primary-foreground hover:bg-white/5"
                            }`}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      to={item.href}
                      className={`block font-heading font-semibold px-2 py-2 rounded-md transition-colors ${
                        isActive(item.href)
                          ? "text-orange bg-white/5"
                          : "text-primary-foreground/80 hover:text-primary-foreground hover:bg-white/5"
                      }`}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
              <div className="pt-4 border-t border-primary-foreground/10">
                <Link
                  to="/nalarxr/kontak"
                  className="block w-full text-center bg-accent hover:opacity-90 text-accent-foreground font-heading font-semibold px-5 py-3 rounded-lg text-sm transition-opacity"
                >
                  Hubungi Kami
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
