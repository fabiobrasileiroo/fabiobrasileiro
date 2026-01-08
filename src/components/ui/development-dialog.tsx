'use client';

import { motion } from 'motion/react';
import { FlaskIcon } from './flask';

export function DevelopmentDialog() {
  return (
    <div 
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="development-dialog-title"
      aria-describedby="development-dialog-description"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className="mx-4 w-full max-w-md rounded-2xl border border-[#2B4162]/50 bg-[#1a0f2e] p-8 shadow-2xl"
      >
        <div className="flex flex-col items-center text-center">
          <div className="mb-4 text-[#4A90E2]">
            <FlaskIcon />
          </div>
          <h2 id="development-dialog-title" className="mb-3 text-2xl font-bold text-white">
            🚧 Em Desenvolvimento 🚧
          </h2>
          <p id="development-dialog-description" className="mb-6 text-[#8B9BB4]">
            Este site ainda está em construção. Novas funcionalidades e melhorias estão sendo implementadas. 
            Obrigado pela paciência!
          </p>
          <div className="flex items-center gap-2 rounded-full bg-[#2B4162]/30 px-4 py-2">
            <span className="h-2 w-2 animate-pulse rounded-full bg-yellow-400" />
            <span className="text-sm text-[#8B9BB4]">Trabalho em progresso</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
