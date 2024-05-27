import React from 'react'

const Find = () => {
  return (
    <div>
        <section class="bg-blue-50 py-4">
            <div class="container mx-auto px-4">
            <div class="relative">
                <input
                type="text"
                class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
                placeholder="Search for the template..."
                />
            </div>
            </div>
        </section>
    </div>
  )
}

export default Find
