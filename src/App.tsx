import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ContactUs from "./components/ContactUs";
import SmoothScrollProvider from "./components/SmoothScrollProvider";
import Header from "./components/Header";
import ServicePage from "./components/Services";
import Footer from "./components/Footer";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <Router>
        <Header />

        <SmoothScrollProvider>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/services" element={<ServicePage />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </SmoothScrollProvider>
        <Footer />
      </Router>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
