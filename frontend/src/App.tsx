import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Disorders from "./pages/Disorders";
import Contact from "./pages/Contact";
import Forms from "./pages/Forms";
import Screening from "./pages/Screening";
import AdhdEducation from "./pages/AdhdEducation";
import ADHD from "./pages/ADHD";
import Anxiety from "./pages/Anxiety";
import Depression from "./pages/Depression";
import Insomnia from "./pages/Insomnia";
import Autism from "./pages/Autism";
import SeasonalAffectiveDisorder from "./pages/SeasonalAffectiveDisorder";
import OCD from "./pages/OCD";
import SocialAnxiety from "./pages/SocialAnxiety";
import BipolarDisorder from "./pages/BipolarDisorder";
import Trichotillomania from "./pages/Trichotillomania";
import PostpartumDepression from "./pages/PostpartumDepression";
import DMDD from "./pages/DMDD";
import ChildhoodBipolar from "./pages/ChildhoodBipolar";
import ODD from "./pages/ODD";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/disorders" element={<Disorders />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/forms" element={<Forms />} />
            <Route path="/screening" element={<Screening />} />
            <Route path="/slideshows" element={<AdhdEducation />} />
            <Route path="/adhd" element={<ADHD />} />
            <Route path="/anxiety" element={<Anxiety />} />
            <Route path="/depression" element={<Depression />} />
            <Route path="/insomnia" element={<Insomnia />} />
            <Route path="/autism" element={<Autism />} />
            <Route path="/seasonal-affective-disorder" element={<SeasonalAffectiveDisorder />} />
            <Route path="/ocd" element={<OCD />} />
            <Route path="/social-anxiety" element={<SocialAnxiety />} />
            <Route path="/bipolar-disorder" element={<BipolarDisorder />} />
            <Route path="/trichotillomania" element={<Trichotillomania />} />
            <Route path="/postpartum-depression" element={<PostpartumDepression />} />
            <Route path="/dmdd" element={<DMDD />} />
            <Route path="/childhood-bipolar" element={<ChildhoodBipolar />} />
            <Route path="/oppositional-defiant-disorder" element={<ODD />} />
            <Route path="/odd" element={<ODD />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
