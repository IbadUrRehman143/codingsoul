import React from 'react'

const Copywrite = () => {
  return (
    <>
      <div className='tw-bg-slate-800 tw-rounded-tl-full tw-rounded-br-full ' >
        <div className='bcontainer tw-text-center '>
          <footer className="tw-footer  tw-text-neutral-content tw-justify-evenly  tw-p-4">
            <aside className="grid-flow-col ">
              <p className='tw-text-center md:tw-text-xl tw-text-sm tw-ml-8 md:tw-ml-0 '>Copyright © {new Date().getFullYear()} - All right reserved - Coding Souls (Private) Limited</p>
            </aside>
          </footer>
        </div>
      </div>
    </>
  )
}

export default Copywrite