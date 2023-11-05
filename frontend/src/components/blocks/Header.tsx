'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';

import Link from '@/components/atoms/Link';

import { Language } from '@/translation';

interface Props {
  currentLanguage: Language;
}

export default function Header({ currentLanguage }: Props) {
  const t = useTranslations();

  return (
    <div className='relative w-full h-[8.22vw]'>
      <div className='absolute w-[13vw] h-[35vw] top-[1.82vw] right-[2.7vw]'>
        <div className='flex ltr:flex-row-reverse'>
          <Image
            className='w-[1.822vw] h-[1.822vw] ml-[1.875vw]'
            alt={t('choose-language')}
            src={'/choose-language.svg'}
            width='35'
            height='35'
          />
          <div className='h-[1.25vw] ml-[1.875vw] my-auto text-right text-[16px]/[24px] font-normal'>
            <Link href='/he' label='עברית' active={currentLanguage.locale == 'he'} />
          </div>
          <div className='h-[1.25vw] ml-[1.875vw] my-auto text-right text-[16px]/[24px] font-normal'>
            <Link href='/en' label='English' active={currentLanguage.locale == 'en'} />
          </div>
          <div className='h-[1.25vw] my-auto text-right text-[16px]/[24px] font-normal'>
            <Link href='/ar' label='عربي' active={currentLanguage.locale == 'ar'} />
          </div>
        </div>
      </div>
      <Image
        className='absolute w-[14.58vw] h-[5.05vw] top-[1.5625vw] left-[calc(50%_-_7.29vw)]'
        alt=''
        src='/full-logo.svg'
        width='280'
        height='97'
      />
    </div>
  );
}
