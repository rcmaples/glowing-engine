import React, { useState } from 'react'
import { Card, Stack, Text, TextInput, Button, Box, Code } from '@sanity/ui'
import { SearchIcon } from '@sanity/icons'

export default function GroqAssistantTool() {
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [generatedQuery, setGeneratedQuery] = useState('')
  const [error, setError] = useState('')

  async function generate() {
    if (!input.trim()) return
    
    setLoading(true)
    setError('')

    try {
      // Use environment variable to determine API endpoint
      const apiEndpoint = process.env.SANITY_STUDIO_API_URL || 'http://localhost:3000'
      
      const res = await fetch(`${apiEndpoint}/api/groq-inference`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ prompt: input }),
      })

      if (!res.ok) {
        throw new Error('Failed to generate query')
      }

      const data = await res.json()
      setGeneratedQuery(data.query)
    } catch (error) {
      console.error('Error generating GROQ query:', error)
      setError('Failed to generate query. Make sure your web app is running.')
    } finally {
      setLoading(false)
    }
  }

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(generatedQuery)
      // Could add a toast notification here
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  return (
    <Card padding={4} height="fill">
      <Stack space={4}>
        <Stack space={2}>
          <Text size={3} weight="semibold">
            GROQ Assistant
          </Text>
          <Text size={1} muted>
            Generate GROQ queries from natural language descriptions
          </Text>
        </Stack>

        <Stack space={3}>
          <TextInput
            icon={SearchIcon}
            placeholder="Describe your query in natural language (e.g., 'Get all published posts with their authors')"
            value={input}
            onChange={(event) => setInput(event.currentTarget.value)}
            onKeyDown={(event) => {
              if (event.key === 'Enter' && !loading) {
                generate()
              }
            }}
          />
          
          <Button
            tone="primary"
            loading={loading}
            disabled={!input.trim() || loading}
            onClick={generate}
            text={loading ? 'Generating...' : 'Generate GROQ Query'}
          />
        </Stack>

        {error && (
          <Card tone="critical" padding={3} radius={2}>
            <Text size={1}>{error}</Text>
          </Card>
        )}

        {generatedQuery && (
          <Card padding={3} radius={2} tone="primary">
            <Stack space={3}>
              <Text size={2} weight="semibold">
                Generated Query:
              </Text>
              
              <Box style={{ fontFamily: 'monospace' }}>
                <Code size={1}>{generatedQuery}</Code>
              </Box>
              
              <Button
                mode="ghost"
                tone="primary"
                text="Copy to Clipboard"
                onClick={copyToClipboard}
              />
              
              <Card padding={2} tone="caution" radius={1}>
                <Text size={1}>
                  💡 Copy this query and paste it into the Vision tool to test it
                </Text>
              </Card>
            </Stack>
          </Card>
        )}
      </Stack>
    </Card>
  )
}
