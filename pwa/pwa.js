const registerServiceWorker = async () => {
    if ('serviceWorker' in navigator) {
      try {
        const registration = await navigator.serviceWorker.register(
          '/sw.js',
          {
            scope: '/',
          }
        );
        console.info('Registering service worker')
      } catch (error) {
        console.error(`Registration failed with ${error}`);
      }
    }
  };

registerServiceWorker();