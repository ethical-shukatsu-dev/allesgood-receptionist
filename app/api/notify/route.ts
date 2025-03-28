import { NextResponse } from 'next/server'
import { IncomingWebhook } from '@slack/webhook'
import { teamMap } from '@/lib/team'

// In a real app, this would be an environment variable
const SLACK_WEBHOOK_URL = process.env.SLACK_WEBHOOK_URL || 'https://hooks.slack.com/services/your/webhook/url'

export async function POST(request: Request) {
  try {
    const { name, company, team, purpose } = await request.json()

    // Validate required fields
    if (!name || !team || !purpose) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    const webhook = new IncomingWebhook(SLACK_WEBHOOK_URL)
    
    // Format the Slack message
    const teamInfo = teamMap[team] 
    const teamName = teamInfo ? (teamInfo.nameEn) : team
    const mention = teamInfo?.mention || ''
    const companyText = company ? `• Company: ${company}\n` : ''
    
    await webhook.send({
      text: `${mention ? `<@${mention}>` : ''} 👋 New guest has arrived!`,
      blocks: [
        {
          type: 'section',
          text: {
            type: 'mrkdwn',
            text: `${mention ? `<@${mention}>` : ''}*👋 New guest has arrived!*\n• Name: ${name}\n${companyText}• Visiting: ${teamName}\n• Purpose: ${purpose}`
          }
        }
      ]
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error sending Slack notification:', error)
    return NextResponse.json(
      { error: 'Failed to send notification' },
      { status: 500 }
    )
  }
} 