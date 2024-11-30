

import { Button } from "./ui/button";



const Pricing = ()=>{
    return(
        <section className="bg-white dark:bg-gray-900 w-full">
  <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
      <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Pricing For Students</h2>
          
      </div>
      <div className="space-y-8 lg:grid lg:grid-cols-2 sm:gap-6 xl:gap-10 lg:space-y-0 px-4">
    
          <div className="flex flex-col  mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow-lg shadow-[#0A57FF] dark:border-gray-600 xl:px-8 dark:bg-gray-800 dark:text-white px-4">
              <h3 className="mb-4 bg-[#0A57FF]  self-center justify-self-start text-2xl font-semibold text-white md:max-w-[40%] px-2 py-2 rounded-b-sm shadow-lg">Free Trail</h3>
          
              <div className="flex justify-center items-baseline my-8">
                  <span className="mr-2 text-5xl font-extrabold">₹ 29</span>
                  <span className="text-gray-500 dark:text-gray-400">/week</span>
              </div>
          
              <ul role="list" className="mb-8 space-y-4 text-left">
                  <li className="flex items-center space-x-3">
                
                      <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                      <span>Get reading passages <span className="font-semibold"> from Mon to Fri</span></span>
                  </li>
                  <li className="flex items-center space-x-3">
                  
                      <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                      <span>No setup, <span className="font-semibold"> or hidden fees</span></span>
                  </li>
                  <li className="flex items-center space-x-3">
           
                      <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                      <span>Use it<span className="font-semibold"> up to 5 days</span></span>
                  </li>
                  
              </ul>
              <Button className="bg-[#0A57FF] mb-3" >Get started</Button>
          </div>
        
          <div className="flex flex-col  mx-auto max-w-lg text-center text-gray-900 bg-[#0A57FF]  rounded-lg border border-gray-100 shadow-lg shadow-gray-500 dark:border-gray-600 xl:px-8 dark:bg-gray-800 dark:text-white px-4">
              <h3 className="mb-4 bg-white  self-center justify-self-start text-2xl font-semibold text-black md:max-w-[40%] px-2 py-2 rounded-b-sm shadow-lg">Paid Plan</h3>
            
              <div className="flex justify-center items-baseline my-8">
                  <span className="mr-2 text-5xl text-white font-extrabold">₹ 29</span>
                  <span className="text-white dark:text-gray-400">/month</span>
              </div>
          
              <ul role="list" className="mb-8 space-y-4 text-left">
                  <li className="flex items-center space-x-3 text-white">
                
                      <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                      <span>Get reading passages from  <span className="font-semibold"> Mon to Fri </span></span>
                  </li>
                  <li className="flex items-center space-x-3">
                  
                      <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                      <span> <span className="font-semibold text-white border-b-2">for 1 month</span></span>
                  </li>
                  <li className="flex items-center space-x-3 text-white">
           
                      <svg className="flex-shrink-0  w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                      <span>Use it<span className="font-semibold text-white"> up to  25 days</span></span>
                  </li>
                  
              </ul>
              <Button className="bg-white hover:text-white hover:bg-black text-black mb-3" >Get started</Button>
          </div>
          

          
      </div>
  </div>
</section>
    )
}

export default Pricing;