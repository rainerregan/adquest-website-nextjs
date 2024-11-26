import Button from '@/components/common/button'
import React from 'react'
import { twMerge } from 'tailwind-merge'

const CollaborateSection = () => {
  const items: CollaborateSectionItem[] = [
    {
      title: 'Level 1',
      description: 'Our team of experts will conduct a comprehensive analysis of your game and provide a detailed report outlining growth opportunities and actionable recommendations. This will be based on:',
      perks: [
        'IAP and ad revenue performance metrics',
        'Ad placement strategies',
        'Ad format optimization',
        'Waterfall setup analysis',
        'User segmentation insights',
        'Evaluation of ad networks'
      ]
    },
    {
      title: 'Level 2',
      description: 'After the audit and a thorough presentation of our recommendations and proposed actions, we will create a detailed implementation plan that includes:',
      perks: [
        'Prioritization of recommended changes',
        'Setup of ad networks and mediation platforms',
        'Integration of new ad formats',
        'Optimization of ad networks and mediation strategies',
        'Introduction of additional ad placements'
      ]
    },
    {
      title: 'Level 3',
      description: 'Without continuous management and optimization, revenue can begin to decline quickly. We ensure your game stays optimized and grows consistently by:',
      perks: [
        'Conducting A/B testing',
        'Designing ad placements for new features',
        'Managing waterfall and mediation configurations',
        'Overseeing partner relationships with ad networks',
        'Addressing issues related to new content',
        'Identifying and securing new, profitable business opportunities'
      ],
      type: 'full'
    },
  ]


  return (
    <div className='bg-main-black-2'>
      <div className='bg-white section-rounded__top'>
        <div className='py-[100px] max-w-7xl mx-auto flex flex-col items-center'>
          <div className='mb-[48px]'>
            <h2 className='h2 text-center'>Let's <span>Collaborate</span></h2>
          </div>

          <div className='grid grid-cols-2 gap-[40px] mb-[48px]'>
            {items.map((item, index) => (
              <CollaborateSectionItem key={index} item={item} />
            ))}
          </div>

          <Button>Discover</Button>
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
      'border-2 border-main-gray p-[56px] rounded-[30px] shadow-lg',
      'flex gap-[36px] items-center',
      type === 'full' ? 'col-span-2' : 'col-span-1',
      type === 'half' ? 'flex-col' : 'flex-row'
    )}>
      <div className={twMerge(type === 'full' ? 'flex-1' : '', 'font-semibold text-main-gray')}>
        <h3 className={twMerge('h3 mb-8 text-main-green', type === 'full' ? 'text-left' : 'text-center')}>{item.title}</h3>
        <p>{item.description}</p>
      </div>

      <ul className='flex-1 w-full font-semibold text-main-gray'>
        {item.perks.map((perk, index) => (
          <li key={index} className='flex items-start gap-4 mb-8'>
            <div className='w-[16px] h-[16px] bg-main-green rounded-full'></div>
            <p className='leading-none text-[16px]'>{perk}</p>
          </li>
        ))}
      </ul>
    </div >
  )
}

export default CollaborateSection