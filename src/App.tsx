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
        <main>
          <button onClick={signOut}>Sign out</button>
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
