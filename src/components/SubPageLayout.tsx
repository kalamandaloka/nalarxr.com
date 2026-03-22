import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

interface SubPageLayoutProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  backTo?: string;
  backLabel?: string;
}

const SubPageLayout = ({ title, subtitle, children, backTo = "/", backLabel = "Beranda" }: SubPageLayoutProps) => {
  return (
    <div className="min-h-screen">
      <Navbar />
      {/* Hero Banner */}
      <section className="pt-20 lg:pt-24 bg-primary">
        <div className="container mx-auto px-4 py-16 lg:py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              to={backTo}
              className="inline-flex items-center gap-2 text-primary-foreground/60 hover:text-primary-foreground transition-colors mb-6 text-sm font-heading"
            >
              <ArrowLeft className="w-4 h-4" />
              {backLabel}
            </Link>
            <h1 className="font-heading font-extrabold text-4xl lg:text-6xl text-primary-foreground mb-4">
              {title}
            </h1>
            {subtitle && (
              <p className="text-primary-foreground/70 text-lg lg:text-xl max-w-2xl">
                {subtitle}
              </p>
            )}
          </motion.div>
        </div>
      </section>
      {/* Content */}
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default SubPageLayout;
