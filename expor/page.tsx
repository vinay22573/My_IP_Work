import { main } from 'framer-motion/client'
import React from 'react'

function page() {
    return (
        <main>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full border-2 border-gray-500 p-4">
                <div className="col-span-1 lg:col-span-2 h-full min-h-[400px] bg-pink-800 border border-yellow-500">
                    {/* Wider box */}
                </div>
                <div className="col-span-1 min-h-[400px] bg-blue-900 border border-green-500">
                    {/* Smaller box */}
                </div>
            </div>

        </main>
    )
}

export default page