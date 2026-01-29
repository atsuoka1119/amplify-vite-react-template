import { Authenticator } from '@aws-amplify/ui-react';
import { AIConversation } from '@aws-amplify/ui-react-ai';
import { useAIConversation } from './client';
import '@aws-amplify/ui-react/styles.css';

function App() {
  const [
    {
      data: { messages },
      isLoading,
    },
    sendMessage,
  ] = useAIConversation('chat');

  return (
    <Authenticator>
      {({ signOut }) => (
        <main style={{ padding: '20px' }}>
          <button onClick={signOut} style={{ marginBottom: '20px' }}>Sign out</button>
          <AIConversation
            messages={messages}
            isLoading={isLoading}
            handleSendMessage={sendMessage}
          />
        </main>
      )}
    </Authenticator>
  );
}

export default App;
