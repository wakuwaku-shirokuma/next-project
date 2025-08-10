'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface InquireFormData {
  email: string;
  name: string;
  message: string;
}

interface InquireContextType {
  formData: InquireFormData;
  setFormData: (data: InquireFormData) => void;
  step: 'form' | 'confirm' | 'thanks';
  setStep: (step: 'form' | 'confirm' | 'thanks') => void;
}

const InquireContext = createContext<InquireContextType | undefined>(undefined);

export function InquireProvider({ children }: { children: ReactNode }) {
  const [formData, setFormData] = useState<InquireFormData>({
    email: '',
    name: '',
    message: ''
  });
  const [step, setStep] = useState<'form' | 'confirm' | 'thanks'>('form');

  return (
    <InquireContext.Provider value={{ formData, setFormData, step, setStep }}>
      {children}
    </InquireContext.Provider>
  );
}

export function useInquire() {
  const context = useContext(InquireContext);
  if (context === undefined) {
    throw new Error('useInquire must be used within an InquireProvider');
  }
  return context;
}