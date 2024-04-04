import { UploadFile } from '@/scripts/actions';
import React from 'react';

function FileUpload() {
  return (
    <>
      <form action={UploadFile}>
        <input type='file' name='file' />
        <button
          type='submit'
          className='border border-slate-200 shadow-md hover:bg-slate-100 px-4 py-2 rounded-md'
        >
          Upload
        </button>
      </form>
    </>
  );
}

export default FileUpload;