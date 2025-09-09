import React from 'react'

const CustomLegend = ( { payload } ) => {
  return (
    <div className='flex flex-wrap justify-center items-center gap-2 mt-4 space-x-6'>
        {payload.map((entry, index) => (
            <div key={`legend-${index}`} className='flex items-center gap-2'>
                <div className='w-4 h-4 rounded-full'
                style={{ backgroundColor: entry.color }}
                >
                    <div className={`w-4 h-4 rounded-full`} style={{ backgroundColor: entry.color }}></div>
                </div>
                <span className='text-sm text-gray-500'>{entry.value}</span>
            </div>
        ))}
    </div>
  )
}

export default CustomLegend