import { NextResponse } from 'next/server'
import { IncomingWebhook } from '@slack/webhook'

// In a real app, this would be an environment variable
const SLACK_WEBHOOK_URL = process.env.SLACK_WEBHOOK_URL || 'https://hooks.slack.com/services/your/webhook/url'

// Map team IDs to team names and optional @ mentions
const teamMap: Record<string, { name: string; mention?: string }> = {
  engineering: { name: 'Engineering', mention: '@engineering' },
  product: { name: 'Product', mention: '@product' },
  design: { name: 'Design', mention: '@design' },
  marketing: { name: 'Marketing', mention: '@marketing' },
  sales: { name: 'Sales', mention: '@sales' },
  support: { name: 'Support', mention: '@support' },
}

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
    const teamInfo = teamMap[team] || { name: team }
    const companyText = company ? `• Company: ${company}\n` : ''
    const mention = teamInfo.mention ? `${teamInfo.mention} ` : ''
    
    await webhook.send({
      text: `${mention}👋 New guest has arrived!`,
      blocks: [
        {
          type: 'section',
          text: {
            type: 'mrkdwn',
            text: `${mention}*👋 New guest has arrived!*\n• Name: ${name}\n${companyText}• Visiting: ${teamInfo.name}\n• Purpose: ${purpose}`
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