const dev = {
  STRIPE_KEY:
    "pk_test_51IHSQdJcwj87T6xHTtnvIJiMWKMcfpyWn2Lnlp7SD4hALmFgPHUwbx1AWMZiiczlNyF4aSMEGwpJ7eErm3Y54A6L000k4vVt2s",
  s3: {
    REGION: "us-east-1",
    BUCKET: "dev-notes-infra-s3-uploads4f6eb0fd-16wgh7hf18zp0",
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://1pyjozn1z7.execute-api.us-east-1.amazonaws.com/dev",
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_M6ev28n5g",
    APP_CLIENT_ID: "4kk2g9efhjhc3bhjr46n4am58m",
    IDENTITY_POOL_ID: "us-east-1:cfdd87c0-e001-4475-a126-a25051f32026",
  },
};

const prod = {
  STRIPE_KEY:
    "pk_test_51IHSQdJcwj87T6xHTtnvIJiMWKMcfpyWn2Lnlp7SD4hALmFgPHUwbx1AWMZiiczlNyF4aSMEGwpJ7eErm3Y54A6L000k4vVt2s",
  s3: {
    REGION: "us-east-1",
    BUCKET: "prod-notes-infra-s3-uploads4f6eb0fd-m343xfk3ni7e",
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://qkf6pcg8q3.execute-api.us-east-1.amazonaws.com/prod",
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_UTYFGYXgc",
    APP_CLIENT_ID: "2dsqbok0j59qo0ksenc2e9k0mo",
    IDENTITY_POOL_ID: "us-east-1:ad0179b1-dae2-4f3b-9299-5fba1939a90e",
  },
};

const config = {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  // Default to dev if not set
  ...(process.env.REACT_APP_STAGE === "prod" ? prod : dev),
};

export default config;
