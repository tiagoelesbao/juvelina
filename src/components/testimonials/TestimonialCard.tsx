// src/components/testimonials/TestimonialCard.tsx
import React from 'react';
import { Star } from 'lucide-react';
import { motion } from 'framer-motion';

interface TestimonialCardProps {
  testimonial: TestimonialType;
  onClick: (id: number) => void;
}

// Use React.memo para evitar re-renders desnecessários
const TestimonialCard = React.memo(({ testimonial, onClick }: TestimonialCardProps) => {
  return (
    <motion.div
      key={testimonial.id}
      className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      onClick={() => onClick(testimonial.id)}
    >
      {/* Conteúdo do card */}
      {/* ... */}
    </motion.div>
  );
});

export default TestimonialCard;