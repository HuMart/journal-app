import React from 'react'

export const JournalEnntry = () => {
  return (
    <div className='journal__entry'>
      <div 
        className='journal__entry-picture'
        style={{
          backgroundSize: 'cover',
          backgroundImage: 'url(https://images.hgmsites.net/hug/2022-ferrari-f1-75-formula-one-race-car_100829457_h.jpg'
        }}
      >
      </div>
      <div className='journal__entry-body'>
        <p className='Journal__entry-title'>
          A new season start
        </p>
        <p className='Journal__entry-content'>
          Irure nisi mollit quis cupidatat non nulla id esse velit aute irure ea minim.
        </p>
      </div>
      <div className='journal__entry-date-box'>
        <span>Wednesday</span>
        <h4>23</h4>
      </div>
    </div>
  )
}
