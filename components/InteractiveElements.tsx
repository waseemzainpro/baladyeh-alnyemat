import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';

// Animated counter with icon
interface AnimatedStatProps {
  end: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  icon?: React.ReactNode;
  label: string;
  color?: string;
}

export const AnimatedStat: React.FC<AnimatedStatProps> = ({
  end,
  prefix = '',
  suffix = '',
  duration = 2,
  icon,
  label,
  color = 'emerald'
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3
  });

  const colorClasses = {
    emerald: 'from-emerald-500 to-emerald-600',
    blue: 'from-blue-500 to-blue-600',
    purple: 'from-purple-500 to-purple-600',
    orange: 'from-orange-500 to-orange-600'
  };

  return (
    <motion.div
      ref={ref}
      initial={{ scale: 0.8, opacity: 0 }}
      animate={inView ? { scale: 1, opacity: 1 } : {}}
      transition={{ duration: 0.5 }}
      className="relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
    >
      <div className={`absolute top-0 left-0 w-full h-2 bg-gradient-to-r ${colorClasses[color as keyof typeof colorClasses]} rounded-t-2xl`} />
      
      {icon && (
        <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${colorClasses[color as keyof typeof colorClasses]} flex items-center justify-center mb-4 shadow-lg`}>
          <div className="text-white">{icon}</div>
        </div>
      )}
      
      <div className={`text-4xl font-bold bg-gradient-to-r ${colorClasses[color as keyof typeof colorClasses]} bg-clip-text text-transparent mb-2`}>
        {inView && (
          <CountUp
            start={0}
            end={end}
            duration={duration}
            prefix={prefix}
            suffix={suffix}
            separator=","
          />
        )}
      </div>
      
      <p className="text-slate-600 font-medium">{label}</p>
    </motion.div>
  );
};

// Progress bar with animation
interface ProgressBarProps {
  label: string;
  percentage: number;
  color?: string;
  icon?: React.ReactNode;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  label,
  percentage,
  color = 'emerald',
  icon
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3
  });

  const colorClasses = {
    emerald: 'bg-emerald-500',
    blue: 'bg-blue-500',
    purple: 'bg-purple-500',
    orange: 'bg-orange-500'
  };

  return (
    <div ref={ref} className="mb-6">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          {icon && <span className="text-slate-600">{icon}</span>}
          <span className="font-semibold text-slate-700">{label}</span>
        </div>
        <span className={`font-bold ${colorClasses[color as keyof typeof colorClasses].replace('bg-', 'text-')}`}>
          {percentage}%
        </span>
      </div>
      <div className="w-full h-3 bg-slate-200 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${percentage}%` } : {}}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          className={`h-full ${colorClasses[color as keyof typeof colorClasses]} rounded-full relative overflow-hidden`}
        >
          <motion.div
            animate={{ x: ['0%', '100%'] }}
            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30"
            style={{ width: '50%' }}
          />
        </motion.div>
      </div>
    </div>
  );
};

// Interactive card with flip animation
interface FlipCardProps {
  frontContent: React.ReactNode;
  backContent: React.ReactNode;
  className?: string;
}

export const FlipCard: React.FC<FlipCardProps> = ({
  frontContent,
  backContent,
  className = ''
}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className={`flip-card h-full ${className}`}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div
        className="flip-card-inner relative w-full h-full"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        <div className="flip-card-front absolute w-full h-full">
          {frontContent}
        </div>
        <div
          className="flip-card-back absolute w-full h-full"
          style={{ transform: 'rotateY(180deg)' }}
        >
          {backContent}
        </div>
      </motion.div>
    </div>
  );
};

// Animated timeline
interface TimelineItemProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}

export const TimelineItem: React.FC<TimelineItemProps> = ({
  title,
  description,
  icon,
  index
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3
  });

  return (
    <motion.div
      ref={ref}
      initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
      animate={inView ? { x: 0, opacity: 1 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="relative flex items-start gap-4"
    >
      <div className="flex-shrink-0">
        <motion.div
          whileHover={{ scale: 1.2, rotate: 360 }}
          transition={{ duration: 0.5 }}
          className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center text-white shadow-lg"
        >
          {icon}
        </motion.div>
      </div>
      <div className="flex-1 bg-white rounded-xl p-4 shadow-md hover:shadow-xl transition-shadow">
        <h4 className="font-bold text-lg text-slate-800 mb-1">{title}</h4>
        <p className="text-slate-600 text-sm">{description}</p>
      </div>
    </motion.div>
  );
};

// Parallax container
export const ParallaxContainer: React.FC<{ children: React.ReactNode; speed?: number }> = ({
  children,
  speed = 0.5
}) => {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffsetY(window.pageYOffset);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div style={{ transform: `translateY(${offsetY * speed}px)` }}>
      {children}
    </div>
  );
};

// Hover card with glow effect
export const GlowCard: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className = ''
}) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  return (
    <div
      className={`relative overflow-hidden rounded-xl ${className}`}
      onMouseMove={handleMouseMove}
    >
      <div
        className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          background: `radial-gradient(circle 150px at ${mousePosition.x}px ${mousePosition.y}px, rgba(16, 185, 129, 0.2), transparent)`
        }}
      />
      {children}
    </div>
  );
};

