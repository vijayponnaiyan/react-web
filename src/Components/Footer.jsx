import React from 'react'

export default function Footer() {
  return (
    <>
      <div>
      <footer class="px-4 py-6    lg:px-10 bg-blue-700 text-white border-t-2 border-blue-800">
  <div class="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
    <div class="sm:col-span-2">
      <a href="#" class="inline-flex items-center">
        <img src="https://mcqmate.com/public/images/logos/60x60.png" alt="logo" class="h-10 w-10"/>
        <span class="ml-3 text-xl font-bold tracking-wide text-white">Company Name</span>
      </a>
      <div class="mt-6 lg:max-w-xl">
        <p class="text-sm text-gray-200 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi felis mi, faucibus dignissim lorem id, imperdiet interdum mauris. Vestibulum ultrices sed libero non porta. Vivamus malesuada urna eu nibh malesuada, non finibus massa laoreet.
        </p>
      </div>
    </div>

    <div class="flex flex-col gap-3 text-sm">
      <p class="text-base font-bold tracking-wide text-white">Popular Courses</p>
      <a href="#" class="hover:text-yellow-300 transition-colors duration-300">UPSC - Union Public Service Commission</a>
      <a href="#" class="hover:text-yellow-300 transition-colors duration-300">General Knowledge</a>
      <a href="#" class="hover:text-yellow-300 transition-colors duration-300">MBA</a>
      <p class="mt-4 text-base font-bold tracking-wide text-white">Popular Topics</p>
      <a href="#" class="hover:text-yellow-300 transition-colors duration-300">Human Resource Management</a>
      <a href="#" class="hover:text-yellow-300 transition-colors duration-300">Operations Management</a>
      <a href="#" class="hover:text-yellow-300 transition-colors duration-300">Marketing Management</a>
    </div>

    <div>
      <p class="text-base font-bold tracking-wide text-white">Company Is Also Available On</p>
      <div class="flex items-center gap-4 mt-2">
        <a href="#" class="w-1/2">
          <img src="https://mcqmate.com/public/images/icons/playstore.svg" alt="Playstore Button" class="h-12"/>
        </a>
        <a href="https://www.youtube.com/channel/UCo8tEi6SrGFP8XG9O0ljFgA" class="w-1/2">
          <img src="https://mcqmate.com/public/images/icons/youtube.svg" alt="Youtube Button" class="h-12"/>
        </a>
      </div>
      <p class="mt-6 text-base font-bold tracking-wide text-white">Contacts</p>
      <div class="flex">
        <p class="mr-2 text-gray-300">Email:</p>
        <a href="mailto:admin@company.com" class="hover:text-yellow-300 transition-colors duration-300">admin@company.com</a>
      </div>
    </div>
  </div>

  <div class="flex flex-col-reverse justify-between pt-5 pb-6 border-t border-gray-600 lg:flex-row">
    <p class="text-sm text-gray-400">© 2023 Company. All rights reserved.</p>
    <ul class="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
      <li>
        <a href="#" class="text-sm text-gray-400 transition-colors duration-300 hover:text-yellow-300">Privacy & Cookies Policy</a>
      </li>
      <li>
        <a href="#" class="text-sm text-gray-400 transition-colors duration-300 hover:text-yellow-300">Disclaimer</a>
      </li>
    </ul>
  </div>
</footer>
 
      </div>      
    </>
  )
};
