import { Storage } from "aws-amplify";

export const s3Upload = async (file) => {
  // temporary method to create unique name
  const filename = `${Date.now()}-${file.name}`;
  const storageConfig = {
    contentType: file.type,
  };

  /* 
    Alternatively, if we were uploading publicly you can use following  method:
    Storage.put().
  */
  const stored = await Storage.vault.put(filename, file, storageConfig);

  return stored.key;
};
