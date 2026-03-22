import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// NalarXR
const NalarXRIndex = lazy(() => import("./pages/nalarxr/Index"));
const Tentang = lazy(() => import("./pages/nalarxr/Tentang"));
const Kerjasama = lazy(() => import("./pages/nalarxr/Kerjasama"));
const Investor = lazy(() => import("./pages/nalarxr/Investor"));
const Lokasi = lazy(() => import("./pages/nalarxr/Lokasi"));
const Kontak = lazy(() => import("./pages/nalarxr/Kontak"));

// XR Pendidikan
const XRPendidikanIndex = lazy(() => import("./pages/xr-pendidikan/Index"));
const Otomotif = lazy(() => import("./pages/xr-pendidikan/Otomotif"));
const Pertanian = lazy(() => import("./pages/xr-pendidikan/Pertanian"));
const Tataboga = lazy(() => import("./pages/xr-pendidikan/Tataboga"));
const Perhotelan = lazy(() => import("./pages/xr-pendidikan/Perhotelan"));
const TKJ = lazy(() => import("./pages/xr-pendidikan/TKJ"));
const Pariwisata = lazy(() => import("./pages/xr-pendidikan/Pariwisata"));
const EkonomiKreatif = lazy(() => import("./pages/xr-pendidikan/EkonomiKreatif"));
const EnergiTerbaru = lazy(() => import("./pages/xr-pendidikan/EnergiTerbaru"));
const Perkapalan = lazy(() => import("./pages/xr-pendidikan/Perkapalan"));
const Keperawatan = lazy(() => import("./pages/xr-pendidikan/Keperawatan"));
const Pesawat = lazy(() => import("./pages/xr-pendidikan/Pesawat"));
const AjukanJurusan = lazy(() => import("./pages/xr-pendidikan/AjukanJurusan"));

// Produk
const ProdukIndex = lazy(() => import("./pages/produk/Index"));
const SekolahDasar = lazy(() => import("./pages/produk/SekolahDasar"));
const SekolahMenengah = lazy(() => import("./pages/produk/SekolahMenengah"));
const SekolahKejuruan = lazy(() => import("./pages/produk/SekolahKejuruan"));
const Universitas = lazy(() => import("./pages/produk/Universitas"));
const Industri = lazy(() => import("./pages/produk/Industri"));
const Militer = lazy(() => import("./pages/produk/Militer"));

// R&D
const RDIndex = lazy(() => import("./pages/rd/Index"));
const Labs = lazy(() => import("./pages/rd/Labs"));
const NextProducts = lazy(() => import("./pages/rd/NextProducts"));
const SpatialHologram = lazy(() => import("./pages/rd/SpatialHologram"));
const AI = lazy(() => import("./pages/rd/AI"));

// Media
const MediaIndex = lazy(() => import("./pages/media/Index"));
const Artikel = lazy(() => import("./pages/media/Artikel"));
const Kegiatan = lazy(() => import("./pages/media/Kegiatan"));
const VideoGaleri = lazy(() => import("./pages/media/VideoGaleri"));
const PressRelease = lazy(() => import("./pages/media/PressRelease"));

// Karir
const KarirIndex = lazy(() => import("./pages/karir/Index"));
const Lowongan = lazy(() => import("./pages/karir/Lowongan"));
const Programmer = lazy(() => import("./pages/karir/Programmer"));
const Modeler3D = lazy(() => import("./pages/karir/Modeler3D"));
const GameDeveloper = lazy(() => import("./pages/karir/GameDeveloper"));
const Internship = lazy(() => import("./pages/karir/Internship"));

const queryClient = new QueryClient();

const Loading = () => (
  <div className="min-h-screen flex items-center justify-center bg-background">
    <div className="w-8 h-8 border-4 border-accent border-t-transparent rounded-full animate-spin" />
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<NalarXRIndex />} />
            <Route path="/old-home" element={<Index />} />

            {/* NalarXR */}
            <Route path="/nalarxr" element={<NalarXRIndex />} />
            <Route path="/nalarxr/tentang" element={<Tentang />} />
            <Route path="/nalarxr/kerjasama" element={<Kerjasama />} />
            <Route path="/nalarxr/investor" element={<Investor />} />
            <Route path="/nalarxr/lokasi" element={<Lokasi />} />
            <Route path="/nalarxr/kontak" element={<Kontak />} />

            {/* XR Pendidikan */}
            <Route path="/xr-pendidikan" element={<XRPendidikanIndex />} />
            <Route path="/xr-pendidikan/otomotif" element={<Otomotif />} />
            <Route path="/xr-pendidikan/pertanian" element={<Pertanian />} />
            <Route path="/xr-pendidikan/tataboga" element={<Tataboga />} />
            <Route path="/xr-pendidikan/perhotelan" element={<Perhotelan />} />
            <Route path="/xr-pendidikan/tkj" element={<TKJ />} />
            <Route path="/xr-pendidikan/pariwisata" element={<Pariwisata />} />
            <Route path="/xr-pendidikan/ekonomi-kreatif" element={<EkonomiKreatif />} />
            <Route path="/xr-pendidikan/energi-terbaru" element={<EnergiTerbaru />} />
            <Route path="/xr-pendidikan/perkapalan" element={<Perkapalan />} />
            <Route path="/xr-pendidikan/keperawatan" element={<Keperawatan />} />
            <Route path="/xr-pendidikan/pesawat" element={<Pesawat />} />
            <Route path="/xr-pendidikan/ajukan-jurusan" element={<AjukanJurusan />} />

            {/* Produk */}
            <Route path="/produk" element={<ProdukIndex />} />
            <Route path="/produk/sekolah-dasar" element={<SekolahDasar />} />
            <Route path="/produk/sekolah-menengah" element={<SekolahMenengah />} />
            <Route path="/produk/sekolah-kejuruan" element={<SekolahKejuruan />} />
            <Route path="/produk/universitas" element={<Universitas />} />
            <Route path="/produk/industri" element={<Industri />} />
            <Route path="/produk/militer" element={<Militer />} />

            {/* R&D */}
            <Route path="/rd" element={<RDIndex />} />
            <Route path="/rd/labs" element={<Labs />} />
            <Route path="/rd/next-products" element={<NextProducts />} />
            <Route path="/rd/spatial-hologram" element={<SpatialHologram />} />
            <Route path="/rd/ai" element={<AI />} />

            {/* Media */}
            <Route path="/media" element={<MediaIndex />} />
            <Route path="/media/artikel" element={<Artikel />} />
            <Route path="/media/kegiatan" element={<Kegiatan />} />
            <Route path="/media/video-galeri" element={<VideoGaleri />} />
            <Route path="/media/press-release" element={<PressRelease />} />

            {/* Karir */}
            <Route path="/karir" element={<KarirIndex />} />
            <Route path="/karir/lowongan" element={<Lowongan />} />
            <Route path="/karir/programmer" element={<Programmer />} />
            <Route path="/karir/3d-modeler" element={<Modeler3D />} />
            <Route path="/karir/game-developer" element={<GameDeveloper />} />
            <Route path="/karir/internship" element={<Internship />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
