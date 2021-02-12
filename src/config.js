const config = {
  MAX_ATTACHMENT_SIZE: 5000000,
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-upload-0001",
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://qkf6pcg8q3.execute-api.us-east-1.amazonaws.com/prod",
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_8y5VcFLDo",
    APP_CLIENT_ID: "5hrs2cen254tf7scdh0o6rjnb6",
    IDENTITY_POOL_ID: "us-east-1:1d0efe93-bcd7-46a6-b0b0-5640bac1696a",
  },
};

export default config;
