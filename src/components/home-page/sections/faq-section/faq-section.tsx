import React from 'react'
import FAQCard from './faq-card'

export interface FAQ {
  question: string
  answer: string
}

const FaqSection = () => {
  const faqs: FAQ[] = [
    {
      question: 'Berapa lama Eggs akan diterima di akun AdQuest setelah menyelesaikan misi games?',
      answer: 'Pada umumnya, Eggs akan segera kamu terima setelah kamu menyelesaikan misi. Namun penerimaan Eggs dapat tertunda sampai maksimum 30 hari dikarenakan verifikasi. Tentunya informasi penundaan Eggs sudah diberitahukan sebelumnya sebelum kamu menginstall games yang bersangkutan.'
    },
    {
      question: 'Apakah main games dari AdQuest harus download lagi di Google Play Store?',
      answer: 'Betul, untuk mendapatkan Eggs dari bermain games, kamu harus mendownload games dari Google Play Store. Namun, sebelumnya kamu harus mulai dulu dari AdQuest, lalu cari games yang ingin kamu mainkan, dan kamu akan diarahkan otomatis langsung ke Google Play Store oleh sistem AdQuest. Jadi tidak boleh langsung download dari Google Play Store ya.'
    },
    {
      question: 'Saya sudah selesaikan misi games sesuai syarat, namun status games terkait tidak mengalami perubahan, dimana warna status tidak berubah menjadi warna biru?',
      answer: 'Terkadang ada penundaan dari sistem untuk mengubah warna status rewards dari abu-abu ke warna biru. Namun tidak perlu khawatir, hal ini akan berubah secara otomatis.'
    },
  ]

  return (
    <div className='bg-white'>
      <div className='max-w-7xl mx-auto pt-[100px] pb-[150px] flex flex-col items-center px-[24px] lg:px-[48px]'>
        <h2 data-aos="fade-down" className='h2 max-w-[800px] text-balance !text-center !mb-[100px]'><span>Frequently</span> Asked Questions</h2>

        <div className='flex flex-col gap-[20px] w-full'>
          {faqs.map((faq, index) => (
            <FAQCard key={index} faq={faq} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default FaqSection