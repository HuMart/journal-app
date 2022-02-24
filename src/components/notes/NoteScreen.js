import React from 'react'
import { NotesAppBar } from './NotesAppBar'

export const NoteScreen = () => {
  return (
    <div className='notes__main-content'>
        <NotesAppBar />
        <div className='notes__content'>
            
            <input
                type="text"
                placeholder="Enter your story title"
                className="notes__title-input"
                autoComplete='off'
            />

            <textarea
                placeholder='Enter your story'
                className='notes__textarea'
            />

            <div className='notes__image'>
                <img 
                    src='https://axaltaracing.com/wp-content/uploads/2022/02/W13TrackHeader-1024x448.jpg'
                    alt='image'
                />
            </div>

        </div>
    </div>
  )
}
