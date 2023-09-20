import React from 'react';

// export type LiquorSelectionProps = {

// }

const liquors = ['gin', 'vodka', 'whiskey', 'tequila', 'rum', 'brandy'];

export const LiquorSelection = () => {
  return (
    <div className='p-4 rounded-lg bg-slate-300 border-solid border-slate-900'>
      <h3 className='mb-2 text-xl font-semibold text-center'>
        What liquors do you have available to you?
      </h3>
      <div className='flex flex-row flex-wrap p-4'>
        {liquors.map((liquor, index) => (
          <div className='px-2 block' key={`${liquor}${index}`}>
            <input type='checkbox' id={liquor} name={liquor} />
            <label className='pl-1' htmlFor={liquor}>
              {liquor}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};
