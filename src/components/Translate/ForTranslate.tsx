// src/components/Translate/Translate.tsx
import React from 'react';
import { useTranslation } from 'react-i18next';

// Translate komponenti
const ForTranslate: React.FC = () => {
  const { t } = useTranslation(); // Tarjima qilish uchun hook

  return (
    <div>
      <h1>{t('Welcome to React')}</h1>  // Tarjimani chiqarish
    </div>
  );
};

export default ForTranslate;
