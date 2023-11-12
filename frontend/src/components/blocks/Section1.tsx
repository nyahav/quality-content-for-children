'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function Section1() {
  const t = useTranslations();

  return (
    <div className='relative w-full h-[50vw] min-w-[900px] min-h-[730px]'>
      <Image className='absolute z-0 w-auto h-auto left-0 top-0 object-cover' alt='' src='/section-1-background.png' fill />
      <div
        className='absolute z-1 w-full h-full left-0 top-0'
        style={{ background: 'linear-gradient(284deg, rgba(0, 0, 0, 0.50) 28%, rgba(0, 0, 0, 0) 97%)' }}
      />
      <div className='absolute z-2 rtl:w-[450px] ltr:w-[475px] rtl:right-[11.97vw] ltr:left-[11.97vw] top-[10.468vw]'>
        <div className='w-full text-[54px]/[81px] font-black text-white'>{t('section-1-title')}</div>
        <div
          className='w-full h-[168px]
                  text-[20px]/[28px] font-normal text-white break-words'
        >
          {t('section-1-body')}
        </div>
      </div>
    </div>
  );
}
