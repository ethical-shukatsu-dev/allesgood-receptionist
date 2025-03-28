'use client'

import { useState } from 'react'

type Team = {
  id: string
  name: string
  mention?: string
}

type Config = {
  team: Team[]
  purposes: string[]
  slackWebhookUrl: string
  branding: {
    logoUrl: string
    welcomeMessage: string
  }
}

// This would typically be loaded from a backend service or local storage
const defaultConfig: Config = {
  team: [
    { id: 'engineering', name: 'Engineering', mention: '@engineering' },
    { id: 'product', name: 'Product', mention: '@product' },
    { id: 'design', name: 'Design', mention: '@design' },
    { id: 'marketing', name: 'Marketing', mention: '@marketing' },
    { id: 'sales', name: 'Sales', mention: '@sales' },
    { id: 'support', name: 'Support', mention: '@support' },
  ],
  purposes: ['Meeting', 'Interview', 'Delivery', 'Other'],
  slackWebhookUrl: process.env.NEXT_PUBLIC_SLACK_WEBHOOK_URL || 'https://hooks.slack.com/services/your/webhook/url',
  branding: {
    logoUrl: '',
    welcomeMessage: 'Welcome to Our Office'
  }
}

export default function AdminConfig() {
  const [config, setConfig] = useState<Config>(defaultConfig)
  const [newTeam, setNewTeam] = useState({ id: '', name: '', mention: '' })
  const [newPurpose, setNewPurpose] = useState('')
  const [saved, setSaved] = useState(false)

  const handleTeamChange = (index: number, field: keyof Team, value: string) => {
    const updatedTeam = [...config.team]
    updatedTeam[index] = { ...updatedTeam[index], [field]: value }
    setConfig({ ...config, team: updatedTeam })
  }

  const handleAddTeam = () => {
    if (newTeam.id && newTeam.name) {
      setConfig({
        ...config,
        team: [...config.team, { ...newTeam }]
      })
      setNewTeam({ id: '', name: '', mention: '' })
    }
  }

  const handleRemoveTeam = (index: number) => {
    const updatedTeam = [...config.team]
    updatedTeam.splice(index, 1)
    setConfig({ ...config, team: updatedTeam })
  }

  const handleAddPurpose = () => {
    if (newPurpose) {
      setConfig({
        ...config,
        purposes: [...config.purposes, newPurpose]
      })
      setNewPurpose('')
    }
  }

  const handleRemovePurpose = (index: number) => {
    const updatedPurposes = [...config.purposes]
    updatedPurposes.splice(index, 1)
    setConfig({ ...config, purposes: updatedPurposes })
  }

  const handleSave = () => {
    // In a real application, this would save to a database or API
    // For now, we'll just save to localStorage
    if (typeof window !== 'undefined') {
      localStorage.setItem('receptionist-config', JSON.stringify(config))
    }
    setSaved(true)
    setTimeout(() => setSaved(false), 3000)
  }

  return (
    <div className="container max-w-4xl px-4 py-8 mx-auto">
      <h1 className="mb-8 text-3xl font-bold text-primary">Admin Configuration</h1>
      
      <div className="p-6 mb-8 bg-white rounded-lg shadow-md">
        <h2 className="mb-4 text-xl font-semibold">Slack Integration</h2>
        <div className="mb-4">
          <label htmlFor="webhookUrl" className="block mb-2 text-sm font-medium text-gray-700">
            Slack Webhook URL
          </label>
          <input
            type="text"
            id="webhookUrl"
            value={config.slackWebhookUrl}
            onChange={(e) => setConfig({ ...config, slackWebhookUrl: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
          <p className="mt-1 text-sm text-gray-500">
            You can get this from the Slack App configuration page.
          </p>
        </div>
      </div>
      
      <div className="p-6 mb-8 bg-white rounded-lg shadow-md">
        <h2 className="mb-4 text-xl font-semibold">Team Configuration</h2>
        
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                <th className="px-4 py-2">ID</th>
                <th className="px-4 py-2">Display Name</th>
                <th className="px-4 py-2">Slack Mention</th>
                <th className="px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {config.team.map((team, index) => (
                <tr key={index} className="bg-white border-b">
                  <td className="px-4 py-2">
                    <input
                      type="text"
                      value={team.id}
                      onChange={(e) => handleTeamChange(index, 'id', e.target.value)}
                      className="w-full px-2 py-1 border border-gray-300 rounded-md"
                    />
                  </td>
                  <td className="px-4 py-2">
                    <input
                      type="text"
                      value={team.name}
                      onChange={(e) => handleTeamChange(index, 'name', e.target.value)}
                      className="w-full px-2 py-1 border border-gray-300 rounded-md"
                    />
                  </td>
                  <td className="px-4 py-2">
                    <input
                      type="text"
                      value={team.mention || ''}
                      onChange={(e) => handleTeamChange(index, 'mention', e.target.value)}
                      className="w-full px-2 py-1 border border-gray-300 rounded-md"
                      placeholder="e.g. @channel"
                    />
                  </td>
                  <td className="px-4 py-2">
                    <button
                      onClick={() => handleRemoveTeam(index)}
                      className="text-red-600 hover:text-red-800"
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="grid grid-cols-1 gap-4 mt-4 md:grid-cols-3">
          <input
            type="text"
            placeholder="ID (e.g. finance)"
            value={newTeam.id}
            onChange={(e) => setNewTeam({ ...newTeam, id: e.target.value })}
            className="px-3 py-2 border border-gray-300 rounded-md"
          />
          <input
            type="text"
            placeholder="Display Name (e.g. Finance)"
            value={newTeam.name}
            onChange={(e) => setNewTeam({ ...newTeam, name: e.target.value })}
            className="px-3 py-2 border border-gray-300 rounded-md"
          />
          <input
            type="text"
            placeholder="Slack Mention (e.g. @finance)"
            value={newTeam.mention}
            onChange={(e) => setNewTeam({ ...newTeam, mention: e.target.value })}
            className="px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>
        
        <button
          onClick={handleAddTeam}
          disabled={!newTeam.id || !newTeam.name}
          className="px-4 py-2 mt-4 text-white rounded-md bg-primary disabled:bg-gray-300"
        >
          Add Team
        </button>
      </div>
      
      <div className="p-6 mb-8 bg-white rounded-lg shadow-md">
        <h2 className="mb-4 text-xl font-semibold">Visit Purposes</h2>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {config.purposes.map((purpose, index) => (
            <div key={index} className="flex items-center px-3 py-1 bg-gray-100 rounded-full">
              <span>{purpose}</span>
              <button
                onClick={() => handleRemovePurpose(index)}
                className="ml-2 text-gray-500 hover:text-red-600"
              >
                &times;
              </button>
            </div>
          ))}
        </div>
        
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="New purpose (e.g. Workshop)"
            value={newPurpose}
            onChange={(e) => setNewPurpose(e.target.value)}
            className="flex-1 px-3 py-2 border border-gray-300 rounded-md"
          />
          <button
            onClick={handleAddPurpose}
            disabled={!newPurpose}
            className="px-4 py-2 text-white rounded-md bg-primary disabled:bg-gray-300"
          >
            Add
          </button>
        </div>
      </div>
      
      <div className="p-6 mb-8 bg-white rounded-lg shadow-md">
        <h2 className="mb-4 text-xl font-semibold">Branding</h2>
        
        <div className="mb-4">
          <label htmlFor="logoUrl" className="block mb-2 text-sm font-medium text-gray-700">
            Logo URL (optional)
          </label>
          <input
            type="text"
            id="logoUrl"
            value={config.branding.logoUrl}
            onChange={(e) => setConfig({ 
              ...config, 
              branding: { ...config.branding, logoUrl: e.target.value } 
            })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>
        
        <div className="mb-4">
          <label htmlFor="welcomeMessage" className="block mb-2 text-sm font-medium text-gray-700">
            Welcome Message
          </label>
          <input
            type="text"
            id="welcomeMessage"
            value={config.branding.welcomeMessage}
            onChange={(e) => setConfig({ 
              ...config, 
              branding: { ...config.branding, welcomeMessage: e.target.value } 
            })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>
      </div>
      
      <div className="flex justify-end">
        <button
          onClick={handleSave}
          className="px-6 py-3 font-medium text-white rounded-md bg-primary hover:bg-opacity-90"
        >
          Save Configuration
        </button>
      </div>
      
      {saved && (
        <div className="fixed p-4 text-green-700 bg-green-100 border-l-4 border-green-500 rounded shadow-md bottom-4 right-4">
          Configuration saved successfully!
        </div>
      )}
    </div>
  )
} 