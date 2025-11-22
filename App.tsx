import React, { useState, useEffect, useCallback } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Menu,
  X 
} from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  TitleSlide,
  MunicipalityIntroSlide,
  ChallengesSlide,
  SolutionSlide,
  ComponentsSlide,
  ComparisonSlide,
  DashboardSlide,
  BenefitsSlide,
  SavingsSlide,
  ValueEquationSlide,
  ImplementationSlide,
  RoadmapSlide,
  FutureProjectsSlide,
  SupportSlide,
  GuaranteeSlide,
  SecuritySlide,
  CustomDevelopmentSlide,
  TechnicalArchitectureSlide,
  CTASlide
} from './components/Slides';

const App: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const slides = [
    { id: 0, component: TitleSlide, title: "الرئيسية" },
    { id: 1, component: MunicipalityIntroSlide, title: "عن البلدية" },
    { id: 2, component: ChallengesSlide, title: "التحديات الحالية" },
    { id: 3, component: SolutionSlide, title: "الحل: Z7 Pro" },
    { id: 4, component: ComponentsSlide, title: "مكونات النظام (9)" },
    { id: 5, component: ComparisonSlide, title: "الأتمتة والأرشفة" },
    { id: 6, component: DashboardSlide, title: "لوحة القيادة" },
    { id: 7, component: BenefitsSlide, title: "الفوائد الملموسة" },
    { id: 8, component: SavingsSlide, title: "تحليل التوفير" },
    { id: 9, component: ValueEquationSlide, title: "معادلة القيمة" },
    { id: 10, component: ImplementationSlide, title: "خطة التنفيذ" },
    { id: 11, component: FutureProjectsSlide, title: "المشاريع المستقبلية" },
    { id: 12, component: RoadmapSlide, title: "العائد الاستثماري" },
    { id: 13, component: SupportSlide, title: "الدعم والشراكة" },
    { id: 14, component: GuaranteeSlide, title: "الضمانات" },
    { id: 15, component: SecuritySlide, title: "الأمان والخصوصية" },
    { id: 16, component: CustomDevelopmentSlide, title: "التطوير المخصص" },
    { id: 17, component: TechnicalArchitectureSlide, title: "البنية التقنية" },
    { id: 18, component: CTASlide, title: "الخطوات التالية" },
  ];

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev < slides.length - 1 ? prev + 1 : prev));
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev > 0 ? prev - 1 : prev));
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') nextSlide(); 
      if (e.key === 'ArrowRight') prevSlide(); 
      if (e.key === ' ') nextSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  const CurrentComponent = slides[currentSlide].component;

  return (
    <div className="h-screen w-screen bg-gradient-to-br from-slate-50 via-white to-slate-50 text-slate-800 overflow-hidden flex flex-col relative selection:bg-emerald-200">
      {/* Top Bar */}
      <header className="h-12 sm:h-14 border-b border-slate-200 bg-white/80 backdrop-blur-lg flex items-center justify-between px-3 sm:px-6 z-20 shadow-sm">
        <div className="flex items-center gap-2 sm:gap-3">
          <motion.div 
            className="w-7 h-7 sm:w-8 sm:h-8 bg-gradient-to-br from-emerald-600 to-emerald-500 rounded-lg flex items-center justify-center text-white font-bold shadow-lg"
            whileHover={{ scale: 1.1, rotate: 5 }}
          >
            Z7
          </motion.div>
          <span className="font-bold text-base sm:text-lg text-slate-700">Z7 pro</span>
          <span className="w-px h-3 sm:h-4 bg-slate-300 mx-1 sm:mx-2"></span>
          <span className="text-xs sm:text-sm text-slate-500 hidden sm:block">بلدية النويعمة والديوك الفوقا</span>
        </div>
        
        <div className="flex items-center gap-2 sm:gap-4">
           <span className="text-xs sm:text-sm font-medium text-slate-400">
            {currentSlide + 1} / {slides.length}
          </span>
          <button 
            onClick={() => setIsMenuOpen(true)}
            className="p-1.5 sm:p-2 hover:bg-slate-100 rounded-full transition-colors"
          >
            <Menu size={18} className="sm:w-5 sm:h-5" />
          </button>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 relative overflow-hidden flex items-center justify-center bg-slate-50/50">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.98 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="w-full h-full max-w-7xl mx-auto p-2 sm:p-4 flex flex-col"
          >
            <div className="bg-white rounded-2xl shadow-xl border border-slate-100 flex-1 overflow-hidden relative">
                <div className="absolute inset-0 overflow-y-auto custom-scrollbar">
                  <CurrentComponent isActive={true} />
                </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Bottom Navigation */}
      <div className="h-14 sm:h-16 bg-white/90 backdrop-blur-lg border-t border-slate-200 flex items-center justify-between px-3 sm:px-6 md:px-12 z-20">
        <button 
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className={`flex items-center gap-1 sm:gap-2 px-2 sm:px-4 py-1.5 sm:py-2 rounded-lg transition-all text-sm sm:text-base ${currentSlide === 0 ? 'text-slate-300 cursor-not-allowed' : 'text-slate-700 hover:bg-slate-100 hover:text-emerald-600 hover:scale-105'}`}
        >
          <ChevronRight size={18} className="sm:w-5 sm:h-5" />
          <span className="font-medium hidden sm:inline">السابق</span>
        </button>

        <div className="flex gap-1 overflow-x-auto max-w-[40%] sm:max-w-[50%] px-1 sm:px-2 hide-scrollbar">
            {slides.map((_, idx) => (
                <div 
                    key={idx}
                    onClick={() => setCurrentSlide(idx)}
                    className={`h-1 sm:h-1.5 min-w-[0.4rem] sm:min-w-[0.5rem] rounded-full transition-all cursor-pointer ${currentSlide === idx ? 'w-6 sm:w-8 bg-emerald-600' : 'w-1.5 sm:w-2 bg-slate-200 hover:bg-emerald-200'}`}
                />
            ))}
        </div>

        <button 
          onClick={nextSlide}
          disabled={currentSlide === slides.length - 1}
          className={`flex items-center gap-1 sm:gap-2 px-2 sm:px-4 py-1.5 sm:py-2 rounded-lg transition-all text-sm sm:text-base ${currentSlide === slides.length - 1 ? 'text-slate-300 cursor-not-allowed' : 'bg-gradient-to-r from-emerald-600 to-emerald-500 text-white hover:from-emerald-700 hover:to-emerald-600 shadow-md hover:shadow-lg hover:scale-105'}`}
        >
          <span className="font-medium hidden sm:inline">التالي</span>
          <ChevronLeft size={18} className="sm:w-5 sm:h-5" />
        </button>
      </div>

      {/* Navigation Drawer */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="absolute inset-0 bg-black/20 backdrop-blur-sm z-30"
            />
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              className="absolute top-0 left-0 bottom-0 w-80 bg-white shadow-2xl z-40 border-r border-slate-100 flex flex-col"
            >
              <div className="p-4 border-b border-slate-100 flex justify-between items-center">
                <h3 className="font-bold text-lg">فهرس العرض</h3>
                <button onClick={() => setIsMenuOpen(false)} className="p-2 hover:bg-slate-100 rounded-full">
                    <X size={20} />
                </button>
              </div>
              <div className="flex-1 overflow-y-auto p-2 space-y-1">
                {slides.map((slide, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setCurrentSlide(idx);
                      setIsMenuOpen(false);
                    }}
                    className={`w-full text-right px-4 py-3 rounded-lg transition-colors ${
                      currentSlide === idx 
                        ? 'bg-emerald-50 text-emerald-700 font-bold border-r-4 border-emerald-600' 
                        : 'text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    <span className="text-xs text-slate-400 ml-2">{(idx + 1).toString().padStart(2, '0')}</span>
                    {slide.title}
                  </button>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;