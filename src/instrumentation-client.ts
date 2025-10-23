import * as Sentry from "@sentry/nextjs";

Sentry.init({
    dsn: "https://2633415e9e95654659b98159466fdc88@o56953.ingest.us.sentry.io/4510238731337728",
    sendDefaultPii: true,
});

export const onRouterTransitionStart = Sentry.captureRouterTransitionStart;
