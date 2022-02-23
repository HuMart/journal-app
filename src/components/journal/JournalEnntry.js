import React from 'react'

export const JournalEnntry = () => {
  return (
    <div className='journal__entry'>
      <div 
        className='journal__entry-picture'
        style={{
          backgroundSize: 'cover',
          backgroundImage: 'url(https://www.bignews24.it/wp-content/uploads/2022/02/george-russell-mercedes-w13-1-VvTedh.jpeg)'
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
