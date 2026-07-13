import * as Sentry from '@sentry/nuxt'

const { public: { sentryDsn } } = useRuntimeConfig()

if (!sentryDsn) {
  console.info('Sentry DSN not configured, skipping initialization')
}
else {
  Sentry.init({
    dsn: sentryDsn,
    integrations: [
      Sentry.replayIntegration({
        maskAllText: false,
        blockAllMedia: false,
      }),
    ],
    tracesSampleRate: 0.1,
    replaysOnErrorSampleRate: 1.0,
    replaysSessionSampleRate: 0.01,
    enableLogs: true,
  })
}
