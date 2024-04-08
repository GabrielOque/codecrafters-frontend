import React from 'react'

const RunButtonComponent = ({ handleRunCode, topic, isCorrectTest }) => {
    return (
        <>
            {
                isCorrectTest ? (<button
                    className="bg-amber-500 rounded-lg px-3 py-1 text-xl font-bold my-5 opacity-50 cursor-not-allowed"
                >
                    {topic}
                </button>) : <button onClick={handleRunCode}
                    className="bg-amber-500 rounded-lg px-3 py-1 text-xl font-bold my-5 "
                >
                    Ejecutar
                </button>
            }
        </>
    )
}

export default RunButtonComponent