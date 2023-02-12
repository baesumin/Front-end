import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ApiErrorBoundary } from './components/ApiErrorBoundary';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
      useErrorBoundary: true,
      refetchOnMount: false,
      refetchOnReconnect: false,
      refetchOnWindowFocus: false
    },
    mutations: {
      useErrorBoundary: true
    }
  }
});

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <QueryClientProvider client={queryClient}>
        <SafeAreaProvider>
          <ApiErrorBoundary>
            <Navigation colorScheme={colorScheme} />
          </ApiErrorBoundary>
          <StatusBar />
        </SafeAreaProvider>
      </QueryClientProvider>
    );
  }
}
