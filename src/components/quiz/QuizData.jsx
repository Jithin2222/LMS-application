import React from 'react'

const QuizData = () => {
  return (
    <>
        
        <div className="flex justify-center items-center p-6">
              <div className="w-full max-w-3x1 rounded-2x1 shadow-lg overflow-hidden">
                <iframe 
                  src="https://docs.google.com/forms/d/e/1FAIpQLSe0FqVDDMjbLs3tmKsWHYJ9KtU-4TLJmqqLfKsjs9Mo_E5V5Q/viewform?embedded=true" 
                  width="640" 
                  height="3428" 
                  frameborder="0" 
                  marginheight="0" 
                  marginwidth="0"
                  className="rounded-2x1"
                  title="quiz-form"
                >
                  Loading…
                </iframe>
              </div>
            </div>
    </>
  )
}

export default QuizData