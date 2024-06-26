'use client'

import Image from 'next/image'
import { useChat } from 'ai/react'

import { Chat } from '@/components/chat'
import { ArtifactView } from '@/components/artifact-view'

export default function Home() {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: '/api/chat',
  })

  const latestMessageWithToolInvocation = [...messages].reverse().find(message => message.toolInvocations && message.toolInvocations.length > 0)

  return (
    <main className="flex min-h-screen max-h-screen">
      <div className="fixed top-0 left-0 right-0 py-4 pl-8">
        <Image src="/logo.svg" alt="logo" width={30} height={30} />
      </div>
      <div className="flex-1 flex space-x-8 w-full pt-16 pb-8 px-4">
        <Chat
          messages={messages}
          input={input}
          handleInputChange={handleInputChange}
          handleSubmit={handleSubmit}
        />
        <ArtifactView toolInvocation={latestMessageWithToolInvocation?.toolInvocations[0]} />
      </div>
    </main>
  )
}
