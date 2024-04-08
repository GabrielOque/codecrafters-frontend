import React from 'react'

const TerminalComponent = ({ consoleOutput }) => {
    return (
        <div className="text-white bg-gray-800 w-1/2 text-xl p-2 max-h-[300px] overflow-auto " style={{
            scrollbarWidth: "thin",
            scrollbarColor: "#4A5568 #2D3748",

        }}>
            <pre>
                {!consoleOutput ? ">> outpuat: " :
                    typeof consoleOutput === 'object' ?
                        `>>: output ${JSON.stringify(consoleOutput, null, 2)}` :
                        `>>: output ${consoleOutput}`
                }
            </pre>
        </div>
    )
}

export default TerminalComponent