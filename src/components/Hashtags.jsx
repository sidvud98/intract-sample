import React from 'react'
import Chip from './helpers/Chip'
import { useSelector } from 'react-redux'


export default function Hashtags() {
  const tags = [
    {
      id: 1,
      title: 'Yah',
      frequency: 30
    },
    {
      id: 2,
      title: 'Amazing',
      frequency: 89
    },
    {
      id: 3,
      title: 'Worth it',
      frequency: 75
    },
    {
      id: 4,
      title: 'Good',
      frequency: 40
    },
    {
      id: 5,
      title: 'Damn!',
      frequency: 55
    },
    {
      id: 6,
      title: 'Rewarding',
      frequency: 56
    },
  ]


  const activeStatus = useSelector(state => state.data.tags)

  return (
    <div className='hashtags'>
      {tags.map(tag => <Chip text={tag.title} freq={tag.frequency} key={tag.id} isSelected={activeStatus[tag.id]} id={tag.id} />)}
    </div>
  )
}
