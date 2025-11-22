import React from 'react';
import { motion } from 'framer-motion';
import { 
  Building2, 
  FileWarning, 
  Wallet, 
  Clock, 
  ShieldAlert, 
  Users, 
  Database, 
  CheckCircle2, 
  BarChart3, 
  BrainCircuit,
  FolderOpen,
  MessageSquare,
  TrendingUp,
  Search,
  History,
  Zap,
  Smartphone,
  Headphones,
  BadgeCheck,
  Award,
  MapPin,
  LayoutGrid,
  Globe,
  Server
} from 'lucide-react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  AreaChart,
  Area
} from 'recharts';
import { SlideProps } from '../types';

// --- Helper Components ---

const SlideContainer: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = "" }) => (
  <div className={`w-full min-h-full p-6 md:p-10 flex flex-col relative ${className}`}>
    {children}
  </div>
);

const SectionTitle: React.FC<{ children: React.ReactNode; subtitle?: string }> = ({ children, subtitle }) => (
  <div className="mb-8">
    <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-2">{children}</h2>
    {subtitle && <p className="text-xl text-slate-500">{subtitle}</p>}
    <div className="w-20 h-1.5 bg-emerald-500 mt-4 rounded-full"></div>
  </div>
);

// --- Slide 1: Title ---

export const TitleSlide: React.FC<SlideProps> = () => {
  return (
    <SlideContainer className="justify-center items-center text-center bg-gradient-to-br from-slate-50 to-slate-100">
      <motion.div 
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="mb-8"
      >
        <div className="flex items-center justify-center gap-4 mb-6">
             <div className="p-4 bg-white rounded-2xl shadow-sm border border-slate-100">
                <Building2 size={48} className="text-emerald-600" />
             </div>
             <div className="text-right">
                <h3 className="font-bold text-slate-700 text-lg">بلدية النويعمة</h3>
                <h3 className="font-bold text-slate-500 text-sm">والديوك الفوقا</h3>
             </div>
        </div>
      </motion.div>

      <motion.h1 
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.4, type: "spring" }}
        className="text-4xl md:text-6xl font-extrabold text-slate-900 leading-tight mb-6 max-w-4xl"
      >
        نظام الإدارة الذكي <span className="text-emerald-600">المتكامل</span>
      </motion.h1>

      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="text-2xl text-slate-600 mb-12"
      >
        تحول رقمي شامل نحو إدارة ذكية وفعالة
      </motion.p>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="flex flex-col items-center gap-2 text-sm text-slate-400"
      >
        <p>مقدم من شركة Z7 pro</p>
        <p>نوفمبر 2025</p>
      </motion.div>
    </SlideContainer>
  );
};

// --- Slide 2: Municipality Intro (New) ---

export const MunicipalityIntroSlide: React.FC<SlideProps> = () => {
  return (
    <SlideContainer>
      <SectionTitle subtitle="بحث شامل وعميق">بلدية النويعمة والديوك الفوقا</SectionTitle>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div 
          initial={{ x: 50, opacity: 0 }} 
          animate={{ x: 0, opacity: 1 }}
          className="space-y-6"
        >
          <div className="bg-emerald-50 p-6 rounded-xl border border-emerald-100">
            <h3 className="flex items-center gap-2 font-bold text-emerald-800 mb-3 text-lg">
              <MapPin className="w-5 h-5" /> الموقع والجغرافيا
            </h3>
            <p className="text-slate-700 text-sm leading-relaxed">
              تقع في محافظة أريحا والأغوار، على بعد 5 كم شمال مدينة أريحا. تتميز بموقع استراتيجي في غور الأردن (ارتفاع -140م تحت سطح البحر). تشتهر بالزراعة (الموز والخضروات) بفضل ينابيع المياه "عين النويعمة".
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <h3 className="flex items-center gap-2 font-bold text-slate-800 mb-3 text-lg">
              <Users className="w-5 h-5 text-blue-600" /> الديموغرافيا والسكان
            </h3>
            <ul className="space-y-2 text-sm text-slate-600">
              <li className="flex justify-between border-b border-slate-100 pb-1">
                <span>عدد السكان (2017):</span> <span className="font-bold">1,794 نسمة</span>
              </li>
              <li className="flex justify-between border-b border-slate-100 pb-1">
                <span>تقدير (2026):</span> <span className="font-bold">~2,090 نسمة</span>
              </li>
              <li>مجتمع عشائري مترابط يعتمد على الزراعة.</li>
            </ul>
          </div>
        </motion.div>

        <motion.div 
          initial={{ x: -50, opacity: 0 }} 
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="space-y-6"
        >
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <h3 className="flex items-center gap-2 font-bold text-slate-800 mb-3 text-lg">
              <Building2 className="w-5 h-5 text-orange-600" /> التصنيف الإداري
            </h3>
            <p className="text-slate-700 text-sm leading-relaxed mb-2">
              مصنفة ضمن <strong>الفئة (ج)</strong>، مما يعني:
            </p>
            <ul className="list-disc list-inside text-sm text-slate-600 space-y-1">
              <li>موارد مالية محدودة جداً.</li>
              <li>اعتماد كبير على المساعدات والتمويل الحكومي.</li>
              <li>صعوبة في تحصيل الرسوم (تسترجع 65% فقط).</li>
            </ul>
          </div>

          <div className="bg-red-50 p-6 rounded-xl border border-red-100">
            <h3 className="flex items-center gap-2 font-bold text-red-800 mb-3 text-lg">
              <ShieldAlert className="w-5 h-5" /> التحديات الرئيسية
            </h3>
            <ul className="grid grid-cols-2 gap-2 text-sm text-red-700">
              <li>• 87.5% مناطق (ج)</li>
              <li>• قيود الاحتلال والاستيطان</li>
              <li>• نقص البنية التحتية</li>
              <li>• ترهل النظام الإداري اليدوي</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </SlideContainer>
  );
};

// --- Slide 3: Challenges ---

export const ChallengesSlide: React.FC<SlideProps> = () => {
  const challenges = [
    { icon: Clock, title: "تأخر المعاملات", desc: "الإجراءات تستغرق أياماً بدلاً من دقائق" },
    { icon: FileWarning, title: "فقدان الوثائق", desc: "ضياع الأوراق وصعوبة الأرشفة اليدوية" },
    { icon: Wallet, title: "تضاعف التكاليف", desc: "هدر الجهد والموارد المالية في العمل التقليدي" },
    { icon: Users, title: "الأخطاء البشرية", desc: "زيادة نسبة الأخطاء في الإدخال والحسابات" },
    { icon: Database, title: "موارد مالية محدودة", desc: "بلدية فئة (ج) تعاني من ميزانيات محدودة" },
    { icon: ShieldAlert, title: "انعدام الشفافية", desc: "غياب الرقابة الفورية والتقارير الدقيقة" },
  ];

  return (
    <SlideContainer>
      <SectionTitle subtitle="إدارة بلدية من الفئة (ج)">التحديات الحالية</SectionTitle>
      <p className="text-slate-600 mb-6 max-w-4xl">
        تظهر الدراسات أن 85% من البلديات الفلسطينية تعاني من ضعف القدرات المحلية. بلدية النويعمة تواجه تحدياً مزدوجاً: شح الموارد المالية والقيود الجغرافية والسياسية.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
        {challenges.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 + 0.3 }}
            className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-md hover:border-emerald-200 transition-all group"
          >
            <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center mb-4 group-hover:bg-red-100 transition-colors">
              <item.icon className="text-red-500" size={24} />
            </div>
            <h3 className="font-bold text-lg text-slate-800 mb-2">{item.title}</h3>
            <p className="text-slate-500 text-sm">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </SlideContainer>
  );
};

// --- Slide 4: Solution ---

export const SolutionSlide: React.FC<SlideProps> = () => {
  return (
    <SlideContainer className="items-center text-center">
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        className="mb-8"
      >
        <h2 className="text-2xl text-slate-500 mb-2">الحل: نظام Z7 pro المتكامل</h2>
        <h1 className="text-4xl font-bold text-slate-900 max-w-3xl mx-auto leading-normal">
          نظام واحد يعادل عمل <span className="text-emerald-600">100+ موظف</span> بدقة 100% على مدار الساعة.
        </h1>
      </motion.div>

      <div className="relative w-full max-w-4xl h-[400px] flex items-center justify-center mt-8">
        {/* Center Node */}
        <motion.div 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", damping: 12 }}
          className="w-48 h-48 bg-emerald-600 rounded-full flex items-center justify-center z-10 shadow-2xl shadow-emerald-200"
        >
          <div className="text-white font-bold text-xl">قاعدة بيانات<br/>مركزية</div>
        </motion.div>

        {/* Satellite Nodes */}
        {[
          { text: "الأرشفة الذكية والآمنة", x: -250, y: -100, delay: 0.2, color: "bg-slate-600" },
          { text: "إدارة مالية دقيقة", x: 250, y: -100, delay: 0.3, color: "bg-yellow-600" },
          { text: "أتمتة كاملة للعمليات", x: -250, y: 100, delay: 0.4, color: "bg-green-600" },
          { text: "دعم اتخاذ القرار", x: 250, y: 100, delay: 0.5, color: "bg-blue-600" },
          { text: "تواصل فعال مع المواطنين", x: 0, y: 180, delay: 0.6, color: "bg-orange-600" },
        ].map((node, i) => (
           <React.Fragment key={i}>
             {/* Connector Line */}
             <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: node.delay, duration: 0.5 }}
                style={{ 
                    position: 'absolute',
                    left: '50%', 
                    top: '50%', 
                    width: Math.sqrt(node.x ** 2 + node.y ** 2), 
                    height: 2, 
                    background: '#cbd5e1',
                    transformOrigin: '0 50%',
                    transform: `rotate(${Math.atan2(node.y, node.x)}rad) translate(20px, 0)`, 
                    zIndex: 0
                }}
             />
             {/* Node Bubble */}
             <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: node.delay + 0.2 }}
                style={{ transform: `translate(${node.x}px, ${node.y}px)` }}
                className={`absolute px-6 py-3 rounded-lg shadow-lg text-white font-medium ${node.color} z-20 whitespace-nowrap`}
             >
                {node.text}
             </motion.div>
           </React.Fragment>
        ))}
      </div>
    </SlideContainer>
  );
};

// --- Slide 5: Components (Updated to 9) ---

export const ComponentsSlide: React.FC<SlideProps> = () => {
  const components = [
    { id: 1, title: "أتمتة المهام الروتينية اليومية", icon: Zap, desc: "جدولة وتوزيع العمل تلقائياً، تنبيهات فورية." },
    { id: 2, title: "نظام إدارة ملفات ذكي", icon: FolderOpen, desc: "أرشفة إلكترونية آمنة، بحث في ثوانٍ." },
    { id: 3, title: "نظام إدارة مالي وإداري متقدم", icon: BarChart3, desc: "كشوف رواتب، تقارير، وتقليل أخطاء بنسبة 95%." },
    { id: 4, title: "نظام CRM للمواطنين", icon: MessageSquare, desc: "استقبال وتسجيل الشكاوى والطلبات إلكترونياً." },
    { id: 5, title: "موديل ذكاء صناعي عام AI", icon: BrainCircuit, desc: "مساعد ذكي مدرب على أرشيف البلدية." },
    { id: 6, title: "قاعدة بيانات مركزية مؤمنة", icon: Database, desc: "حماية عالية، نسخ احتياطي يومي." },
    { id: 7, title: "واجهة استخدام حديثة وسهلة", icon: LayoutGrid, desc: "لوحة تحكم مخصصة، لا تتطلب خبرة تقنية." },
    { id: 8, title: "دعم فني وتدريب شامل", icon: Headphones, desc: "دعم مجاني لمدة 3 أشهر، تدريب كامل." },
    { id: 9, title: "قابلية توسع مستقبلية", icon: Server, desc: "جاهز لإضافة بوابات دفع وتطبيقات موبايل." },
  ];

  return (
    <SlideContainer>
      <SectionTitle>مكونات المنتج الرئيسية (9 مكونات)</SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2">
        {components.map((comp, idx) => (
          <motion.div
            key={comp.id}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: idx * 0.05 }}
            className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm hover:border-emerald-500 hover:shadow-md transition-all"
          >
            <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-sm font-bold">
                {comp.id}
                </div>
                <comp.icon className="text-emerald-600" size={20} />
            </div>
            <h3 className="font-bold text-slate-800 text-md mb-1">{comp.title}</h3>
            <p className="text-xs text-slate-500">{comp.desc}</p>
          </motion.div>
        ))}
      </div>
    </SlideContainer>
  );
};

// --- Slide 6: Features Deep Dive ---

export const ComparisonSlide: React.FC<SlideProps> = () => {
  return (
    <SlideContainer>
      <SectionTitle subtitle="الأتمتة والأرشفة الذكية">القضاء على التأخير والفوضى</SectionTitle>
      
      <div className="flex flex-col md:flex-row gap-8 h-full">
        {/* Feature Card 1 */}
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex-1 bg-white rounded-2xl shadow-lg border border-slate-100 p-6 relative overflow-hidden"
        >
            <div className="absolute top-0 left-0 w-full h-1 bg-emerald-500"></div>
            <div className="flex justify-between items-start mb-6">
                <h3 className="text-xl font-bold">نظام إدارة ملفات ذكي</h3>
                <Search className="text-emerald-500" />
            </div>
            <div className="bg-slate-50 rounded-lg p-4 border border-slate-200 mb-4">
                <div className="flex items-center justify-between bg-white p-3 rounded border border-slate-200 shadow-sm mb-2">
                    <span className="font-bold text-sm">رخصة بناء 2023</span>
                    <span className="text-xs text-slate-400">2023-05-11</span>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed">
                    تم استرجاع الوثيقة في 0.3 ثانية. النسخة الرقمية مطابقة للأصل ومحمية من التعديل.
                </p>
            </div>
            <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm text-slate-600">
                    <CheckCircle2 size={16} className="text-emerald-500" />
                    استرجاع أي وثيقة خلال ثانية واحدة
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-600">
                    <CheckCircle2 size={16} className="text-emerald-500" />
                    أرشفة تلقائية (توفير عمل 8-10 موظفين)
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-600">
                    <CheckCircle2 size={16} className="text-emerald-500" />
                    حماية كاملة: نسخ احتياطي يومي
                </li>
            </ul>
        </motion.div>

        {/* Feature Card 2 */}
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex-1 bg-white rounded-2xl shadow-lg border border-slate-100 p-6 relative overflow-hidden"
        >
            <div className="absolute top-0 left-0 w-full h-1 bg-blue-500"></div>
             <div className="flex justify-between items-start mb-6">
                <h3 className="text-xl font-bold">أتمتة المهام الروتينية</h3>
                <History className="text-blue-500" />
            </div>
             <div className="bg-slate-50 rounded-lg p-4 border border-slate-200 mb-4 space-y-2">
                <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                    <div className="h-2 bg-slate-200 rounded w-full">
                        <div className="h-full bg-green-500 rounded w-3/4"></div>
                    </div>
                </div>
                 <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                    <div className="h-2 bg-slate-200 rounded w-full">
                        <div className="h-full bg-yellow-500 rounded w-1/2"></div>
                    </div>
                </div>
            </div>
             <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm text-slate-600">
                    <CheckCircle2 size={16} className="text-blue-500" />
                    توزيع الأعمال بذكاء: توفير 60% من الجهد
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-600">
                    <CheckCircle2 size={16} className="text-blue-500" />
                    متابعة آلية: ضمان إنجاز المعاملات
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-600">
                    <CheckCircle2 size={16} className="text-blue-500" />
                    تنبيهات فورية: تقليل أخطاء النسيان 95%
                </li>
            </ul>
        </motion.div>
      </div>
    </SlideContainer>
  );
};

// --- Slide 7: Dashboard ---

const dataFinancial = [
  { name: 'يناير', revenue: 4000, expenses: 2400 },
  { name: 'فبراير', revenue: 3000, expenses: 1398 },
  { name: 'مارس', revenue: 2000, expenses: 9800 },
  { name: 'أبريل', revenue: 2780, expenses: 3908 },
  { name: 'مايو', revenue: 1890, expenses: 4800 },
  { name: 'يونيو', revenue: 2390, expenses: 3800 },
  { name: 'يوليو', revenue: 3490, expenses: 4300 },
];

export const DashboardSlide: React.FC<SlideProps> = () => {
  return (
    <SlideContainer>
      <SectionTitle subtitle="الميزة الإضافية">حساب المدير الخاص: مركز القيادة</SectionTitle>
      
      <div className="flex gap-6 h-full">
        {/* Main Chart Area */}
        <div className="flex-1 bg-white rounded-xl shadow border border-slate-200 p-4 flex flex-col">
            <div className="flex justify-between items-center mb-4">
                <h3 className="font-bold text-slate-700">اتجاهات الإيرادات والمصروفات</h3>
                <span className="text-xs bg-emerald-100 text-emerald-700 px-2 py-1 rounded">+12% نمو</span>
            </div>
            <div className="flex-1 w-full min-h-[200px]">
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={dataFinancial} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                        <defs>
                            <linearGradient id="colorRev" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#10b981" stopOpacity={0.8}/>
                            <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                            </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Area type="monotone" dataKey="revenue" stroke="#10b981" fillOpacity={1} fill="url(#colorRev)" />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>

        {/* Side Widgets */}
        <div className="w-1/3 space-y-4">
            <motion.div 
                whileHover={{ scale: 1.02 }}
                className="bg-white p-4 rounded-xl shadow border-l-4 border-emerald-500"
            >
                <h4 className="text-slate-500 text-sm">رؤية فورية</h4>
                <div className="flex flex-col gap-1">
                    <span className="text-sm font-bold text-slate-800">لكل العمليات الجارية</span>
                    <span className="text-xs text-slate-500">تحديث لحظي</span>
                </div>
            </motion.div>

            <motion.div 
                whileHover={{ scale: 1.02 }}
                className="bg-white p-4 rounded-xl shadow border-l-4 border-blue-500"
            >
                <h4 className="text-slate-500 text-sm">مؤشرات الأداء (KPIs)</h4>
                <div className="flex items-end gap-2 mb-2">
                    <span className="text-3xl font-bold text-slate-800">98%</span>
                </div>
                <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                    <div className="bg-blue-500 h-full w-[98%]"></div>
                </div>
            </motion.div>

             <div className="bg-slate-800 text-white p-4 rounded-xl shadow relative overflow-hidden">
                <BrainCircuit className="absolute top-2 left-2 text-slate-600 opacity-20" size={64} />
                <h4 className="font-bold mb-2 flex items-center gap-2"><Zap size={16} className="text-yellow-400"/> مساعد ذكي دقيق</h4>
                <p className="text-xs text-slate-300">
                    "استشارات استراتيجية بناءً على البيانات الحية: يُنصح بمتابعة مشروع تعبيد الطرق لتجنب التأخير."
                </p>
            </div>
        </div>
      </div>
    </SlideContainer>
  );
};

// --- Slide 8: Benefits ---

export const BenefitsSlide: React.FC<SlideProps> = () => {
    const benefits = [
        { val: "95%", text: "تقليل الأخطاء الإدارية والمالية", color: "text-emerald-600", border: "border-emerald-200" },
        { val: "دقائق", text: "إنجاز المعاملات (بدلاً من أيام)", color: "text-blue-600", border: "border-blue-200" },
        { val: "80%", text: "زيادة متوقعة في رضا المواطنين", color: "text-purple-600", border: "border-purple-200" },
        { val: "100%", text: "شفافية ورقابة إدارية كاملة", color: "text-cyan-600", border: "border-cyan-200" },
    ];

    return (
        <SlideContainer>
            <SectionTitle>الفوائد العملية الملموسة من اليوم الأول</SectionTitle>
            <div className="grid grid-cols-2 gap-6 mt-8">
                 {/* Central Financial Savings Bubble */}
                 <motion.div 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="col-span-2 flex justify-center mb-8"
                 >
                    <div className="bg-yellow-50 border-2 border-yellow-400 rounded-full w-64 h-64 flex flex-col items-center justify-center text-center shadow-xl relative z-10">
                        <h3 className="text-4xl font-extrabold text-slate-800">$57,500</h3>
                        <p className="text-slate-600 font-medium mt-2">توفير مالي سنوي<br/>مضمون</p>
                    </div>
                 </motion.div>

                 {benefits.map((b, i) => (
                     <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 + 0.3 }}
                        className={`bg-white p-6 rounded-xl shadow-sm border-2 ${b.border} text-center`}
                     >
                         <h4 className={`text-4xl font-bold ${b.color} mb-2`}>{b.val}</h4>
                         <p className="text-slate-600 font-medium">{b.text}</p>
                     </motion.div>
                 ))}
            </div>
        </SlideContainer>
    );
};

// --- Slide 9: Savings Breakdown ---

export const SavingsSlide: React.FC<SlideProps> = () => {
  return (
    <SlideContainer className="items-center">
      <SectionTitle>كيف يحقق النظام توفيراً سنوياً بقيمة 57,500 دولار؟</SectionTitle>
      
      <div className="flex flex-col md:flex-row items-center gap-4 w-full max-w-5xl mt-8">
        
        <motion.div 
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="flex-1 bg-slate-50 border border-slate-200 rounded-xl p-6 text-center h-64 flex flex-col justify-center"
        >
            <h3 className="font-bold text-xl text-slate-800 mb-4">توفير من الأخطاء المالية</h3>
            <p className="text-sm text-slate-500 mb-6">الآلية: دقة 100% وكشف فوري لأي انحراف</p>
            <div className="text-3xl font-bold text-emerald-600">7,500 دولار</div>
            <span className="text-xs text-slate-400 mt-1">سنوياً</span>
        </motion.div>

        <div className="text-6xl text-slate-300 font-bold">+</div>

        <motion.div 
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex-1 bg-slate-50 border border-slate-200 rounded-xl p-6 text-center h-64 flex flex-col justify-center"
        >
            <h3 className="font-bold text-xl text-slate-800 mb-4">توفير من الرواتب</h3>
            <p className="text-sm text-slate-500 mb-6">الآلية: النظام يعادل عمل 60% من الكادر الإداري</p>
            <div className="text-3xl font-bold text-emerald-600">50,000 دولار</div>
            <span className="text-xs text-slate-400 mt-1">سنوياً</span>
        </motion.div>
      </div>

      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-12 w-full max-w-4xl bg-emerald-600 text-white rounded-2xl p-6 text-center shadow-lg"
      >
        <h3 className="text-3xl font-bold">الإجمالي: 57,500 دولار توفير سنوي مضمون</h3>
      </motion.div>
    </SlideContainer>
  );
};

// --- Slide 10: Value Equation ---

export const ValueEquationSlide: React.FC<SlideProps> = () => {
  return (
    <SlideContainer>
      <SectionTitle>معادلة القيمة: استثمار لا يقارن</SectionTitle>
      
      <div className="flex flex-col md:flex-row gap-12 h-full mt-4">
        {/* Table Side */}
        <div className="flex-1">
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
                <table className="w-full text-sm text-right">
                    <thead className="bg-slate-50">
                        <tr>
                            <th className="p-3 font-bold text-slate-700">البند</th>
                            <th className="p-3 font-bold text-slate-700">القيمة الحقيقية</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                        <tr><td className="p-3">النظام الأساسي الكامل</td><td className="p-3 font-bold">$35,000</td></tr>
                        <tr><td className="p-3">حساب المدير الخاص المتطور</td><td className="p-3 font-bold">$15,000</td></tr>
                        <tr><td className="p-3">المساعد الذكي الدقيق</td><td className="p-3 font-bold">$12,000</td></tr>
                        <tr><td className="p-3">التثبيت والإعداد</td><td className="p-3 font-bold">$6,000</td></tr>
                        <tr><td className="p-3">تدريب الموظفين</td><td className="p-3 font-bold">$4,000</td></tr>
                        <tr><td className="p-3">دعم فني (3 أشهر)</td><td className="p-3 font-bold">$5,000</td></tr>
                        <tr><td className="p-3">الضمانات والحماية</td><td className="p-3 font-bold">$3,000</td></tr>
                        <tr className="bg-slate-100">
                            <td className="p-3 font-bold text-lg">الإجمالي الحقيقي</td>
                            <td className="p-3 font-bold text-lg text-slate-900">$80,000</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        {/* Summary Side */}
        <div className="w-full md:w-5/12 space-y-6 flex flex-col justify-center">
            <motion.div 
                initial={{ x: -20 }}
                animate={{ x: 0 }}
                className="bg-emerald-600 text-white p-6 rounded-2xl shadow-lg text-center"
            >
                <p className="text-lg opacity-90 mb-1">ما تدفعون (مرة واحدة فقط)</p>
                <h2 className="text-5xl font-bold mb-2">$9,850</h2>
                <p className="text-xs opacity-75">ترخيص مدى الحياة</p>
            </motion.div>

            <motion.div 
                initial={{ x: -20 }}
                animate={{ x: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-yellow-50 text-yellow-800 p-6 rounded-2xl border border-yellow-200 text-center"
            >
                <p className="text-lg font-bold mb-1">القيمة الزائدة (مجانية)</p>
                <h2 className="text-4xl font-bold">$70,150</h2>
            </motion.div>

            <div className="text-center space-y-1">
                <p className="text-emerald-700 font-bold text-lg">نسبة العائد على الاستثمار: 729%</p>
                <p className="text-slate-500 text-sm">فترة استرداد الاستثمار: 5 أشهر فقط!</p>
            </div>
        </div>
      </div>
    </SlideContainer>
  );
};

// --- Slide 11: Implementation Plan ---

export const ImplementationSlide: React.FC<SlideProps> = () => {
    const weeks = [
        { id: 1, title: "التحضير والتخطيط", desc: "اجتماع شامل مع القيادة، جمع البيانات والملفات التاريخية، فهم آلية العمل." },
        { id: 2, title: "البناء والإعداد الفني", desc: "تثبيت النظام الأساسي، استيراد البيانات، إعداد الحسابات، تدريب مساعد المدير." },
        { id: 3, title: "التدريب والمحاكاة", desc: "تدريب المدير والموظفين، محاكاة الأعمال الفعلية، تصحيح الملاحظات." },
        { id: 4, title: "التشغيل الفعلي", desc: "التفعيل الرسمي للنظام، دعم فني مباشر ومكثف، المعالجة والمتابعة." },
    ];

    return (
        <SlideContainer>
            <SectionTitle>خطة التنفيذ: 4 أسابيع فقط نحو التشغيل الكامل</SectionTitle>
            <div className="space-y-6 max-w-4xl mx-auto mt-4">
                {weeks.map((w, i) => (
                    <motion.div
                        key={w.id}
                        initial={{ x: 50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: i * 0.15 }}
                        className="flex items-start gap-6 relative"
                    >
                        <div className="flex flex-col items-center gap-1">
                            <div className="w-10 h-10 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-lg z-10 shrink-0 shadow-md">
                                {w.id}
                            </div>
                            {i < weeks.length - 1 && (
                                <div className="w-0.5 h-16 bg-slate-200"></div>
                            )}
                        </div>
                        
                        <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-100 flex-1 hover:shadow-md transition-all">
                            <h3 className="font-bold text-lg text-emerald-800 mb-1">الأسبوع {w.id}: {w.title}</h3>
                            <p className="text-slate-600 text-sm">{w.desc}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </SlideContainer>
    );
};

// --- Slide 12: Future Projects (New) ---

export const FutureProjectsSlide: React.FC<SlideProps> = () => {
    const projects = [
        { 
            title: "بوابة خدمات إلكترونية", 
            cost: "$4,000 - $6,000", 
            benefit: "تقليل الازدحام 90%، طلبات من البيت 24/7" 
        },
        { 
            title: "نظام الدفع الإلكتروني", 
            cost: "$2,500 - $3,500", 
            benefit: "زيادة الإيرادات 30-40%، تقليل السرقات" 
        },
        { 
            title: "تطبيق موبايل للموظفين", 
            cost: "$3,500 - $4,500", 
            benefit: "العمل من أي مكان، استجابة للطوارئ" 
        },
        { 
            title: "تكامل مع الحكومة المركزية", 
            cost: "$2,500 - $3,500", 
            benefit: "تبادل بيانات تلقائي، تقليل المعاملات اليدوية" 
        }
    ];

    return (
        <SlideContainer>
            <SectionTitle subtitle="مع دعمنا الكامل">مشاريع وتطويرات مستقبلية ممكنة</SectionTitle>
            <p className="text-slate-600 mb-8">بعد نجاح المرحلة الأولى، يمكن للبلدية التوسع في هذه المجالات لتعزيز الإيرادات والخدمات.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {projects.map((p, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.1 }}
                        className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:border-emerald-400 transition-all"
                    >
                        <div className="flex justify-between items-start mb-3">
                            <h3 className="font-bold text-lg text-slate-800">{p.title}</h3>
                            <Smartphone className="text-emerald-500" size={20} />
                        </div>
                        <div className="flex items-center gap-2 mb-3">
                            <span className="text-xs font-bold bg-slate-100 px-2 py-1 rounded text-slate-600">الكلفة المقدرة: {p.cost}</span>
                        </div>
                        <p className="text-sm text-slate-600 border-t pt-3 border-slate-100">
                            <span className="font-bold text-emerald-600">الفائدة: </span>{p.benefit}
                        </p>
                    </motion.div>
                ))}
            </div>
        </SlideContainer>
    );
};

// --- Slide 13: Roadmap & ROI ---

export const RoadmapSlide: React.FC<SlideProps> = () => {
    return (
        <SlideContainer>
            <SectionTitle>خارطة الطريق: العائد المالي بعد 3 سنوات</SectionTitle>
            
            <div className="flex flex-col gap-8 mt-4">
                {/* Timeline */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-emerald-50 p-4 rounded-lg border border-emerald-200">
                        <h4 className="font-bold text-emerald-800 mb-2">السنة الأولى</h4>
                        <p className="text-sm text-slate-600">تأسيس وتحقيق وفر. الاستثمار: $9,850. التوفير: $57,500.</p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                        <h4 className="font-bold text-blue-800 mb-2">السنة الثانية</h4>
                        <p className="text-sm text-slate-600">توسع وزيادة إيرادات (بوابة خدمات، دفع إلكتروني). زيادة الإيرادات 30-40%.</p>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                        <h4 className="font-bold text-purple-800 mb-2">السنة الثالثة</h4>
                        <p className="text-sm text-slate-600">تكامل وريادة رقمية (تطبيق موبايل، ربط حكومي). وصول لبلدية رقمية متكاملة.</p>
                    </div>
                </div>

                {/* ROI Table */}
                <div className="bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden">
                    <div className="bg-slate-800 text-white p-4 text-center font-bold text-lg">
                        ملخص العائد المتوقع (3 سنوات)
                    </div>
                    <div className="grid grid-cols-3 text-center divide-x divide-x-reverse divide-slate-200">
                        <div className="p-6">
                            <p className="text-slate-500 text-sm mb-1">الاستثمار الكلي</p>
                            <p className="text-2xl font-bold text-red-500">$31,850</p>
                        </div>
                        <div className="p-6">
                            <p className="text-slate-500 text-sm mb-1">العائد الإجمالي</p>
                            <p className="text-2xl font-bold text-emerald-500">$232,500</p>
                        </div>
                        <div className="p-6 bg-emerald-50">
                            <p className="text-emerald-800 text-sm mb-1">نسبة العائد (ROI)</p>
                            <p className="text-3xl font-extrabold text-emerald-700">729%</p>
                        </div>
                    </div>
                </div>
            </div>
        </SlideContainer>
    );
};

// --- Slide 14: Support ---

export const SupportSlide: React.FC<SlideProps> = () => {
    return (
        <SlideContainer>
            <SectionTitle>شراكتنا الاستراتيجية: دعم مستمر يضمن النجاح</SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="bg-emerald-50 p-6 rounded-xl border border-emerald-200 text-center transform hover:-translate-y-2 transition-transform">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm text-emerald-600">
                        <BadgeCheck size={32} />
                    </div>
                    <h3 className="font-bold text-lg mb-2 text-emerald-800">أول 3 أشهر (مجاني)</h3>
                    <ul className="text-sm text-slate-600 space-y-2 mt-4 text-right pr-4 list-disc">
                        <li>دعم فني 24/7</li>
                        <li>حل المشاكل خلال ساعة</li>
                        <li>تحديثات أمنية دورية</li>
                    </ul>
                </div>

                <div className="bg-white p-6 rounded-xl border border-slate-200 text-center shadow-sm transform hover:-translate-y-2 transition-transform relative overflow-hidden">
                    <div className="absolute top-0 right-0 bg-slate-200 px-3 py-1 text-xs font-bold rounded-bl-lg">اختياري</div>
                    <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm text-slate-600">
                        <Headphones size={32} />
                    </div>
                    <h3 className="font-bold text-lg mb-2 text-slate-800">الدعم المستمر</h3>
                    <div className="mt-4 space-y-3">
                        <div className="bg-slate-50 p-3 rounded-lg">
                            <p className="font-bold text-slate-700">الخطة الأساسية</p>
                            <p className="text-sm text-slate-500">$250 سنوياً</p>
                        </div>
                        <div className="bg-emerald-50 p-3 rounded-lg border border-emerald-100">
                            <p className="font-bold text-emerald-700">الخطة الاحترافية</p>
                            <p className="text-sm text-emerald-600">$500 سنوياً</p>
                        </div>
                    </div>
                </div>

                 <div className="bg-white p-6 rounded-xl border border-slate-200 text-center shadow-sm transform hover:-translate-y-2 transition-transform">
                    <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm text-blue-600">
                        <TrendingUp size={32} />
                    </div>
                    <h3 className="font-bold text-lg mb-2 text-blue-800">ما هو أبعد من الدعم</h3>
                    <ul className="text-sm text-slate-600 space-y-2 mt-4 text-right pr-4 list-disc">
                        <li>تدريب مستمر للموظفين الجدد</li>
                        <li>استشارات استراتيجية</li>
                        <li>دراسات لمشاريع جديدة</li>
                    </ul>
                </div>
            </div>
        </SlideContainer>
    );
};

// --- Slide 15: Guarantees ---

export const GuaranteeSlide: React.FC<SlideProps> = () => {
    const guarantees = [
        "ضمان الأداء: توفر بنسبة 99.9%، استجابة في أقل من 5 ثوان",
        "ملكية كاملة للبيانات: بياناتكم ملك لكم 100% ويمكن استخراجها في أي وقت",
        "ترخيص مدى الحياة: استثمار لمرة واحدة يخدمكم بشكل دائم",
        "شراكة استراتيجية طويلة الأمد: نحن معكم في كل خطوة نحو التطوير",
        "قيمة حقيقية وملموسة: عائد على الاستثمار 729% وتوفير سنوي 57,500$"
    ];

    return (
        <SlideContainer>
            <SectionTitle>التزاماتنا وضماناتنا لكم</SectionTitle>
            <div className="mt-8 space-y-4">
                {guarantees.map((text, i) => (
                    <motion.div
                        key={i}
                        initial={{ x: 20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-center gap-4 p-5 bg-white rounded-xl shadow-sm border-r-4 border-emerald-500 hover:shadow-md transition-shadow"
                    >
                        <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
                            <CheckCircle2 size={18} className="text-emerald-600" />
                        </div>
                        <span className="text-lg font-medium text-slate-700">{text}</span>
                    </motion.div>
                ))}
            </div>
        </SlideContainer>
    );
};

// --- Slide 16: CTA ---

export const CTASlide: React.FC<SlideProps> = () => {
    const [formData, setFormData] = React.useState({
        name: '',
        title: '',
        phone: '',
        email: ''
    });
    const [errors, setErrors] = React.useState({
        phone: '',
        email: ''
    });
    const [isSubmitted, setIsSubmitted] = React.useState(false);

    const validateEmail = (email: string) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    };

    const validatePhone = (phone: string) => {
        const re = /^[\d\+\-\s]{9,}$/;
        return re.test(phone);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));

        if (name === 'email') {
            if (value && !validateEmail(value)) {
                setErrors(prev => ({ ...prev, email: 'البريد الإلكتروني غير صحيح' }));
            } else {
                setErrors(prev => ({ ...prev, email: '' }));
            }
        }

        if (name === 'phone') {
            if (value && !validatePhone(value)) {
                setErrors(prev => ({ ...prev, phone: 'رقم الهاتف غير صحيح' }));
            } else {
                setErrors(prev => ({ ...prev, phone: '' }));
            }
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const isEmailValid = validateEmail(formData.email);
        const isPhoneValid = validatePhone(formData.phone);
        
        setErrors({
            email: isEmailValid ? '' : 'البريد الإلكتروني مطلوب',
            phone: isPhoneValid ? '' : 'رقم الهاتف مطلوب'
        });

        if (isEmailValid && isPhoneValid && formData.name) {
            setIsSubmitted(true);
        }
    };

    return (
        <SlideContainer className="justify-center items-center text-center">
            <motion.h1 
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="text-3xl md:text-5xl font-bold text-slate-900 mb-8"
            >
                اختر الريادة الرقمية اليوم
            </motion.h1>

            <div className="flex items-center gap-6 mb-10">
                <div className="text-3xl font-bold text-slate-800">Z7 pro</div>
                <div className="text-3xl text-slate-300">+</div>
                <div className="flex flex-col items-start">
                    <span className="font-bold text-lg">بلدية النويعمة</span>
                    <span className="text-sm text-slate-500">والديوك الفوقا</span>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-5xl">
                <div className="text-right space-y-6">
                    <h3 className="text-2xl font-bold text-emerald-800 border-b pb-2">الخطوات التالية</h3>
                    <ul className="space-y-4 text-lg text-slate-700">
                        <li className="flex items-center gap-3">
                            <span className="bg-emerald-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">1</span>
                            الموافقة المبدئية وتوقيع العقد
                        </li>
                        <li className="flex items-center gap-3">
                            <span className="bg-emerald-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">2</span>
                             الاتفاق على خطة الدفع المناسبة
                        </li>
                        <li className="flex items-center gap-3">
                            <span className="bg-emerald-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">3</span>
                            بدء التنفيذ الفوري للانطلاق خلال 4 أسابيع
                        </li>
                    </ul>
                    <div className="bg-emerald-50 p-4 rounded-lg border border-emerald-200 mt-6">
                        <p className="font-bold text-emerald-800 text-sm">عرض خاص:</p>
                        <p className="text-emerald-700 text-sm">صلاحية العرض 30 يوم من تاريخ نوفمبر 2025</p>
                    </div>
                </div>

                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 text-right shadow-inner">
                    <h3 className="text-xl font-bold text-slate-800 mb-4">
                        {isSubmitted ? 'شكراً لاهتمامك' : 'سجل بياناتك للمتابعة'}
                    </h3>
                    
                    {!isSubmitted ? (
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="block text-xs font-medium text-slate-700 mb-1">الاسم الكامل</label>
                                <div className="relative">
                                    <Users size={16} className="absolute top-3 right-3 text-slate-400" />
                                    <input 
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full pr-9 pl-3 py-2 rounded-lg border border-slate-200 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none transition-all text-sm"
                                        placeholder="الاسم"
                                        required
                                    />
                                </div>
                            </div>
                            
                            <div>
                                <label className="block text-xs font-medium text-slate-700 mb-1">المسمى الوظيفي</label>
                                <div className="relative">
                                    <Award size={16} className="absolute top-3 right-3 text-slate-400" />
                                    <input 
                                        type="text"
                                        name="title"
                                        value={formData.title}
                                        onChange={handleChange}
                                        className="w-full pr-9 pl-3 py-2 rounded-lg border border-slate-200 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none transition-all text-sm"
                                        placeholder="المسمى الوظيفي"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-xs font-medium text-slate-700 mb-1">رقم الهاتف</label>
                                <div className="relative">
                                    <Smartphone size={16} className="absolute top-3 right-3 text-slate-400" />
                                    <input 
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className={`w-full pr-9 pl-3 py-2 rounded-lg border outline-none transition-all text-right text-sm ${errors.phone ? 'border-red-500 bg-red-50' : 'border-slate-200 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500'}`}
                                        placeholder="059xxxxxxx"
                                        dir="ltr"
                                    />
                                </div>
                                {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                            </div>

                            <div>
                                <label className="block text-xs font-medium text-slate-700 mb-1">البريد الإلكتروني</label>
                                <div className="relative">
                                    <MessageSquare size={16} className="absolute top-3 right-3 text-slate-400" />
                                    <input 
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className={`w-full pr-9 pl-3 py-2 rounded-lg border outline-none transition-all text-right text-sm ${errors.email ? 'border-red-500 bg-red-50' : 'border-slate-200 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500'}`}
                                        placeholder="email@example.com"
                                        dir="ltr"
                                    />
                                </div>
                                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                            </div>

                            <button 
                                type="submit"
                                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2 rounded-lg transition-colors shadow-md mt-2 text-sm"
                            >
                                إرسال البيانات
                            </button>
                        </form>
                    ) : (
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="flex flex-col items-center justify-center py-8"
                        >
                            <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                                <CheckCircle2 size={40} className="text-emerald-600" />
                            </div>
                            <h4 className="text-xl font-bold text-slate-800 mb-2">تم الاستلام بنجاح</h4>
                            <p className="text-slate-600 text-sm">شكراً لك! سيتواصل معك فريق المبيعات في أقرب وقت.</p>
                            <button 
                                onClick={() => {
                                    setIsSubmitted(false);
                                    setFormData({ name: '', title: '', phone: '', email: '' });
                                }}
                                className="mt-6 text-emerald-600 hover:text-emerald-700 font-medium text-sm"
                            >
                                إرسال رد آخر
                            </button>
                        </motion.div>
                    )}
                </div>
            </div>

            <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="mt-12 text-lg text-slate-500 font-medium"
            >
                معاً، نحو بلدية رقمية متكاملة ورائدة.
            </motion.p>
        </SlideContainer>
    );
};