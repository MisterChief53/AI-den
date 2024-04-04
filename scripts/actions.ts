'use server';
import { Storage } from '@google-cloud/storage';

export const UploadToGcs = async (file: File) => {
  if (!file) throw new Error('No file provided');
  if (file.size < 1) throw new Error('File is empty');

  const buffer = await file.arrayBuffer();
  const storage = new Storage(/*{ keyFilename: 'keys.json'}*/);
  const cache_control = "no-cache, no-store, max-age=0"

  await storage.bucket('test-aiden-user-upload').file('test.jpg').save(Buffer.from(buffer));

  console.log('File uploaded');

  return true;
}

export const UploadFile = async (form: FormData) => {
  try {  
    const file = form.get('file') as File;
    await UploadToGcs(file);
  } catch (error) {
    console.error(error);
    return false;
  }
}

export const GetSignedUrl = async (fileName: string) => {
  const storage = new Storage({ keyFilename: 'cred.json'});

  const [url] = await storage.bucket('scriptbytes-storagedemo')
    .file(fileName)
    .getSignedUrl(
      { 
        action: 'write', 
        version: 'v4',
        expires: Date.now() + 15 * 60 * 1000,
        contentType: 'application/octet-stream',
      }
    );

  return url;
}


// Example of how to run CORS from code - if needed
export const SetCors = async () => {
  const storage = new Storage({ keyFilename: 'storage-demo-key.json' });
  await storage.bucket('scriptbytes-storagedemo').setCorsConfiguration([
    {
      maxAgeSeconds: 3600,
      method: ['GET', 'PUT'],
      origin: ['*'],
      responseHeader: ['Content-Type'],
    },
  ]);
}