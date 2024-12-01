import Button from '@/components/common/button'
import React from 'react'
import { twMerge } from 'tailwind-merge'

export const CollaborateSection = () => {
  const items: CollaborateSectionItem[] = [
    {
      title: 'Level 1',
      description: 'Tim kami akan melakukan analisis mendalam terhadap game Anda dan memberikan laporan terperinci yang dapat mengidentifikasi peluang pertumbuhan serta rekomendasi yang dapat diimplementasikan pada games Anda. Ini semua akan didasarkan pada:',
      perks: [
        'Metrik kinerja pendapatan IAP dan iklan',
        'Strategi penempatan iklan',
        'Optimasi format iklan',
        'Analisis pengaturan waterfall setup',
        'Evaluasi ad networks',
      ]
    },
    {
      title: 'Level 2',
      description: 'Setelah audit dan presentasi dari tim AdQuest mengenai rekomendasi beserta langkah-langkah yang kami usulkan, kami akan menyusun rencana implementasi terperinci yang mencakup:',
      perks: [
        'Prioritas perubahan yang direkomendasikan',
        'Pengaturan jaringan iklan dan platform mediasi',
        'Integrasi format iklan baru',
        'Optimasi strategi jaringan iklan dan mediasi',
        'Penambahan penempatan iklan baru'
      ]
    },
    {
      title: 'Level 3',
      description: 'Tanpa manajemen dan optimasi yang berkelanjutan, pendapatan bisa mulai menurun dengan cepat. Kami memastikan game Anda tetap teroptimasi dan tumbuh secara konsisten dengan cara:',
      perks: [
        'Melakukan A/B testing',
        'Merancang penempatan iklan untuk fitur baru',
        'Mengelola konfigurasi waterfall dan mediasi',
        'Mengawasi hubungan mitra dengan jaringan iklan',
        'Menangani masalah terkait konten iklan baru',
        'Mengidentifikasi dan mengamankan peluang bisnis baru yang menguntungkan'
      ],
      type: 'full'
    },
  ]


  return (
    <div className='bg-main-black-2'>
      <div className='bg-white section-rounded__top px-[24px] md:px-[48px]'>
        <div className='py-[100px] max-w-7xl mx-auto flex flex-col items-center'>
          <div className='mb-[48px]' data-aos="fade-down">
            <h2 className='h2 text-center'><span>Kolaborasi</span> Sekarang</h2>
          </div>

          <div className={twMerge(
            'md:grid md:grid-cols-2 gap-[40px] mb-[48px]',
            'flex flex-col',
          )}
            data-aos="fade-down"
          >
            {items.map((item, index) => (
              <CollaborateSectionItem data-aos="fade-down" data-aos-delay={index * 400} key={index} item={item} />
            ))}
          </div>

          {/* <Button>Discover</Button> */}
        </div>
      </div>
    </div>
  )
}

interface CollaborateSectionItem {
  title: string
  description: string
  perks: string[]
  type?: 'full' | 'half'
}

interface CollaborateSectionItemProps {
  item: CollaborateSectionItem
}

const CollaborateSectionItem: React.FC<CollaborateSectionItemProps> = ({
  item: { type = 'half', ...item }
}) => {
  return (
    <div className={twMerge(
      'border-2 border-main-gray p-[36px] md:p-[56px] rounded-[30px] shadow-lg',
      'flex gap-[36px] items-center',
      type === 'full' ? 'md:col-span-2' : 'md:col-span-1',
      type === 'half' ? 'flex-col md:flex-col' : 'flex-col md:flex-row md:items-center',
    )}>
      <div className={twMerge(type === 'full' ? 'flex-1' : '', 'font-semibold text-main-gray')}>
        <h3 className={twMerge('h3 mb-6 text-main-green', type === 'full' ? 'text-center md:text-left' : 'text-center md:text-center')}>{item.title}</h3>
        <p>{item.description}</p>
      </div>

      <ul className='flex-1 w-full font-semibold text-main-gray'>
        {item.perks.map((perk, index) => (
          <li key={index} className='flex items-start gap-4 mb-8 last:mb-0'>
            <div className='w-[16px] h-[16px] aspect-square bg-main-green rounded-full'></div>
            <p className='leading-none text-[16px]'>{perk}</p>
          </li>
        ))}
      </ul>
    </div >
  )
}