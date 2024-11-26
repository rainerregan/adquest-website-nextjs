import React from 'react';

const LangSelector: React.FC = () => {
  return (
    <div className='p-2 bg-gray-50 rounded-lg border'>
      <select name="select-lang" className='bg-transparent' id="select-lang">
        <option value="id">Indonesian</option>
        <option value="en">English</option>
      </select>
    </div>
  );
};

export default LangSelector;