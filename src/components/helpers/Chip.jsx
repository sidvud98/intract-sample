import React from 'react'
import { actions } from '../../store/data'
import { useDispatch } from 'react-redux';

export default function Chip({ text, freq, isSelected, id }) {
  const dispatch = useDispatch();


  const clickHandler = (e, id) => {
    e.stopPropagation();
    dispatch(actions.setTagIdActive(id))
  }


  return (
    <div className={`chip ${isSelected ? 'active' : null}`} onClick={e => clickHandler(e, id)}>
      <span className='text'>#{text}</span>{' '}<span className='freq'>({freq})</span>
    </div>
  )
}
