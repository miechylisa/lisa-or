import { forwardRef } from 'react';
import { motion } from 'framer-motion';

const GlassCard = forwardRef(({ 
  children, 
  className = "", 
  variant = "default",
  animated = true,
  hover = true,
  glow = false,
  bordered = false,
  ...props 
}, ref) => {
  const variants = {
    default: "glass-card",
    hero: "glass-card-hero", 
    project: "glass-card-project",
    minimal: "glass-card-minimal",
    container: "glass-container",
    navigation: "glass-card-navigation",
    feature: "glass-card-feature"
  };

  const baseClasses = variants[variant] || variants.default;
  
  const modifierClasses = [
    hover && "glass-hover-effect",
    glow && "glass-glow-effect", 
    bordered && "glass-bordered",
    className
  ].filter(Boolean).join(" ");

  const finalClassName = `${baseClasses} ${modifierClasses}`;

  const animationProps = animated ? {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  } : {};

  return (
    <motion.div 
      ref={ref}
      className={finalClassName}
      {...animationProps}
      {...props}
    >
      {children}
    </motion.div>
  );
});

GlassCard.displayName = 'GlassCard';

export default GlassCard;