import React from 'react'
import Stars from './Stars'
import Hashtags from './Hashtags'
import { useDispatch, useSelector } from 'react-redux'
import { actions } from '../store/data'

export default function Feedback({ closeModal }) {
  const dispatch = useDispatch();
  const score = useSelector(state => state.data.stars)
  const handleInput = (e) => {
    dispatch(actions.setReview(e.target.value))
  }
  return (
    <div className="feedback">
      <div className='quest'>
        <div className="main-text">How would you like to rate the Quest?</div>
        <div className="sub-text">- Uncovering Link</div>
        <div className='star-wrapper'>
          <Stars />
          <div className="score">{score}/5</div>
        </div>

      </div>
      <div className="horz-border" />
      <div className='hashtag'>
        <div className="main-text">What did you love?</div>
        <div className="sub-text">Express yourself with hashtags</div>
        <Hashtags />
      </div>
      <div className="horz-border" />
      <div className='review'>
        <div className="main-text" style={{ display: 'inline' }}>Write a review</div>
        <span className="sub-text" style={{ marginLeft: '10px' }}>{`(Optional)`}</span>
        <div className="sub-text">Tell us more about the experience, your opinion matters</div>
        <textarea type="text" placeholder='Write a review' onChange={handleInput} />
      </div>
      <button className="submit" disabled={score === 0} onClick={closeModal}>Submit Rating</button>
    </div>
  )
}
