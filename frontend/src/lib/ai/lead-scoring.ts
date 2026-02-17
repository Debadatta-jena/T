// AI Lead Scoring System
// This module implements intelligent lead scoring based on user behavior,
// engagement metrics, and predictive analytics

export interface LeadScore {
  userId: string;
  score: number;
  grade: 'A' | 'B' | 'C' | 'D' | 'F';
  confidence: number;
  factors: LeadFactor[];
  lastCalculated: Date;
  recommendedActions: string[];
}

export interface LeadFactor {
  name: string;
  weight: number;
  value: number;
  impact: 'positive' | 'negative' | 'neutral';
  category: 'engagement' | 'behavior' | 'demographic' | 'intent';
}

export interface UserBehavior {
  userId: string;
  pageViews: number;
  timeOnSite: number;
  pagesVisited: string[];
  downloads: string[];
  formSubmissions: number;
  emailInteractions: number;
  socialShares: number;
  lastActivity: Date;
  deviceType: string;
  location: string;
  referralSource: string;
}

export interface LeadIntent {
  topic: string;
  confidence: number;
  keywords: string[];
  sentiment: 'positive' | 'negative' | 'neutral';
  urgency: 'high' | 'medium' | 'low';
}

class LeadScoringEngine {
  private weights = {
    engagement: {
      pageViews: 0.15,
      timeOnSite: 0.20,
      formSubmissions: 0.25,
      emailInteractions: 0.15,
      downloads: 0.10,
      socialShares: 0.10,
      returnVisits: 0.05,
    },
    behavior: {
      intentSignals: 0.30,
      contentDepth: 0.20,
      navigationPath: 0.15,
      searchQueries: 0.15,
      errorPages: -0.10,
      bounceRate: -0.10,
    },
    demographic: {
      jobTitle: 0.25,
      companySize: 0.20,
      industry: 0.20,
      location: 0.15,
      seniority: 0.20,
    },
    temporal: {
      recency: 0.30,
      frequency: 0.25,
      sessionLength: 0.20,
      timeToConversion: 0.25,
    },
  };

  /**
   * Calculate comprehensive lead score based on user behavior and demographics
   */
  async calculateLeadScore(
    userId: string,
    behavior: UserBehavior,
    demographics: any = {},
    intentSignals: LeadIntent[] = []
  ): Promise<LeadScore> {
    const factors: LeadFactor[] = [];

    // Engagement Factors
    factors.push(this.calculatePageViewsFactor(behavior.pageViews));
    factors.push(this.calculateTimeOnSiteFactor(behavior.timeOnSite));
    factors.push(this.calculateFormSubmissionsFactor(behavior.formSubmissions));
    factors.push(this.calculateEmailInteractionsFactor(behavior.emailInteractions));
    factors.push(this.calculateDownloadsFactor(behavior.downloads.length));
    factors.push(this.calculateSocialSharesFactor(behavior.socialShares));

    // Behavior Factors
    factors.push(this.calculateIntentSignalsFactor(intentSignals));
    factors.push(this.calculateContentDepthFactor(behavior.pagesVisited));
    factors.push(this.calculateNavigationPathFactor(behavior.pagesVisited));
    factors.push(this.calculateRecencyFactor(behavior.lastActivity));

    // Demographic Factors
    factors.push(this.calculateJobTitleFactor(demographics.jobTitle));
    factors.push(this.calculateCompanySizeFactor(demographics.companySize));
    factors.push(this.calculateIndustryFactor(demographics.industry));

    // Calculate weighted score
    let totalScore = 0;
    let totalWeight = 0;

    factors.forEach(factor => {
      const weight = this.getFactorWeight(factor);
      totalScore += factor.value * weight;
      totalWeight += weight;
    });

    const finalScore = totalWeight > 0 ? (totalScore / totalWeight) * 100 : 0;
    const grade = this.calculateGrade(finalScore);
    const confidence = this.calculateConfidence(factors);
    const recommendedActions = this.generateRecommendations(factors, grade);

    return {
      userId,
      score: Math.round(finalScore),
      grade,
      confidence,
      factors,
      lastCalculated: new Date(),
      recommendedActions,
    };
  }

  private calculatePageViewsFactor(pageViews: number): LeadFactor {
    let value = 0;
    if (pageViews >= 10) value = 100;
    else if (pageViews >= 5) value = 75;
    else if (pageViews >= 3) value = 50;
    else if (pageViews >= 1) value = 25;
    else value = 0;

    return {
      name: 'Page Views',
      weight: this.weights.engagement.pageViews,
      value,
      impact: value > 50 ? 'positive' : 'neutral',
      category: 'engagement',
    };
  }

  private calculateTimeOnSiteFactor(timeOnSite: number): LeadFactor {
    // timeOnSite in minutes
    let value = 0;
    if (timeOnSite >= 30) value = 100;
    else if (timeOnSite >= 15) value = 80;
    else if (timeOnSite >= 5) value = 60;
    else if (timeOnSite >= 2) value = 40;
    else value = 20;

    return {
      name: 'Time on Site',
      weight: this.weights.engagement.timeOnSite,
      value,
      impact: value > 60 ? 'positive' : 'neutral',
      category: 'engagement',
    };
  }

  private calculateFormSubmissionsFactor(submissions: number): LeadFactor {
    let value = 0;
    if (submissions >= 3) value = 100;
    else if (submissions >= 2) value = 80;
    else if (submissions >= 1) value = 60;
    else value = 0;

    return {
      name: 'Form Submissions',
      weight: this.weights.engagement.formSubmissions,
      value,
      impact: value > 50 ? 'positive' : 'neutral',
      category: 'engagement',
    };
  }

  private calculateIntentSignalsFactor(intents: LeadIntent[]): LeadFactor {
    if (intents.length === 0) {
      return {
        name: 'Purchase Intent',
        weight: this.weights.behavior.intentSignals,
        value: 20,
        impact: 'neutral',
        category: 'intent',
      };
    }

    const avgConfidence = intents.reduce((sum, intent) => sum + intent.confidence, 0) / intents.length;
    const highIntentCount = intents.filter(intent => intent.urgency === 'high').length;
    const positiveSentimentCount = intents.filter(intent => intent.sentiment === 'positive').length;

    let value = (avgConfidence * 0.4) + (highIntentCount * 20) + (positiveSentimentCount * 15);

    return {
      name: 'Purchase Intent',
      weight: this.weights.behavior.intentSignals,
      value: Math.min(value, 100),
      impact: value > 60 ? 'positive' : 'neutral',
      category: 'intent',
    };
  }

  private calculateContentDepthFactor(pagesVisited: string[]): LeadFactor {
    const highValuePages = ['pricing', 'contact', 'demo', 'services', 'solutions'];
    const visitedHighValue = pagesVisited.some(page =>
      highValuePages.some(keyword => page.toLowerCase().includes(keyword))
    );

    const value = visitedHighValue ? 80 : pagesVisited.length > 3 ? 60 : 30;

    return {
      name: 'Content Depth',
      weight: this.weights.behavior.contentDepth,
      value,
      impact: value > 50 ? 'positive' : 'neutral',
      category: 'behavior',
    };
  }

  private calculateNavigationPathFactor(pagesVisited: string[]): LeadFactor {
    // Analyze navigation flow - premium services -> pricing -> contact = high intent
    const hasPremiumFlow = pagesVisited.some(page =>
      page.includes('enterprise') || page.includes('premium')
    ) && pagesVisited.some(page => page.includes('pricing'));

    const value = hasPremiumFlow ? 90 : 50;

    return {
      name: 'Navigation Path',
      weight: this.weights.behavior.navigationPath,
      value,
      impact: value > 70 ? 'positive' : 'neutral',
      category: 'behavior',
    };
  }

  private calculateRecencyFactor(lastActivity: Date): LeadFactor {
    const daysSinceActivity = Math.floor((Date.now() - lastActivity.getTime()) / (1000 * 60 * 60 * 24));

    let value = 100;
    if (daysSinceActivity > 30) value = 30;
    else if (daysSinceActivity > 14) value = 60;
    else if (daysSinceActivity > 7) value = 80;

    return {
      name: 'Activity Recency',
      weight: this.weights.temporal.recency,
      value,
      impact: value > 70 ? 'positive' : value < 40 ? 'negative' : 'neutral',
      category: 'behavior',
    };
  }

  private calculateJobTitleFactor(jobTitle?: string): LeadFactor {
    if (!jobTitle) return { name: 'Job Title', weight: this.weights.demographic.jobTitle, value: 50, impact: 'neutral', category: 'demographic' };

    const decisionMakers = ['ceo', 'cto', 'cfo', 'cio', 'cdo', 'vp', 'director', 'head', 'chief', 'president'];
    const isDecisionMaker = decisionMakers.some(title =>
      jobTitle.toLowerCase().includes(title.toLowerCase())
    );

    const value = isDecisionMaker ? 90 : 60;

    return {
      name: 'Job Title',
      weight: this.weights.demographic.jobTitle,
      value,
      impact: value > 70 ? 'positive' : 'neutral',
      category: 'demographic',
    };
  }

  private calculateCompanySizeFactor(companySize?: number): LeadFactor {
    if (!companySize) return { name: 'Company Size', weight: this.weights.demographic.companySize, value: 50, impact: 'neutral', category: 'demographic' };

    let value = 50;
    if (companySize >= 1000) value = 90;
    else if (companySize >= 500) value = 80;
    else if (companySize >= 100) value = 70;
    else if (companySize >= 50) value = 60;

    return {
      name: 'Company Size',
      weight: this.weights.demographic.companySize,
      value,
      impact: value > 70 ? 'positive' : 'neutral',
      category: 'demographic',
    };
  }

  private calculateIndustryFactor(industry?: string): LeadFactor {
    if (!industry) return { name: 'Industry', weight: this.weights.demographic.industry, value: 50, impact: 'neutral', category: 'demographic' };

    const highValueIndustries = ['technology', 'finance', 'healthcare', 'manufacturing', 'energy', 'government'];
    const isHighValue = highValueIndustries.some(ind =>
      industry.toLowerCase().includes(ind.toLowerCase())
    );

    const value = isHighValue ? 80 : 50;

    return {
      name: 'Industry',
      weight: this.weights.demographic.industry,
      value,
      impact: value > 60 ? 'positive' : 'neutral',
      category: 'demographic',
    };
  }

  private calculateEmailInteractionsFactor(interactions: number): LeadFactor {
    let value = 0;
    if (interactions >= 5) value = 100;
    else if (interactions >= 3) value = 75;
    else if (interactions >= 1) value = 50;
    else value = 25;

    return {
      name: 'Email Interactions',
      weight: this.weights.engagement.emailInteractions,
      value,
      impact: value > 50 ? 'positive' : 'neutral',
      category: 'engagement',
    };
  }

  private calculateDownloadsFactor(downloads: number): LeadFactor {
    let value = 0;
    if (downloads >= 3) value = 100;
    else if (downloads >= 2) value = 75;
    else if (downloads >= 1) value = 50;
    else value = 0;

    return {
      name: 'Content Downloads',
      weight: this.weights.engagement.downloads,
      value,
      impact: value > 40 ? 'positive' : 'neutral',
      category: 'engagement',
    };
  }

  private calculateSocialSharesFactor(shares: number): LeadFactor {
    let value = 0;
    if (shares >= 3) value = 100;
    else if (shares >= 2) value = 75;
    else if (shares >= 1) value = 50;
    else value = 0;

    return {
      name: 'Social Shares',
      weight: this.weights.engagement.socialShares,
      value,
      impact: value > 40 ? 'positive' : 'neutral',
      category: 'engagement',
    };
  }

  private getFactorWeight(factor: LeadFactor): number {
    switch (factor.category) {
      case 'engagement':
        return this.weights.engagement[factor.name.toLowerCase().replace(/\s+/g, '') as keyof typeof this.weights.engagement] || 0.1;
      case 'behavior':
        return this.weights.behavior[factor.name.toLowerCase().replace(/\s+/g, '') as keyof typeof this.weights.behavior] || 0.1;
      case 'demographic':
        return this.weights.demographic[factor.name.toLowerCase().replace(/\s+/g, '') as keyof typeof this.weights.demographic] || 0.1;
      case 'intent':
        return this.weights.behavior.intentSignals;
      default:
        return 0.1;
    }
  }

  private calculateGrade(score: number): 'A' | 'B' | 'C' | 'D' | 'F' {
    if (score >= 90) return 'A';
    if (score >= 80) return 'B';
    if (score >= 70) return 'C';
    if (score >= 60) return 'D';
    return 'F';
  }

  private calculateConfidence(factors: LeadFactor[]): number {
    // Calculate confidence based on number of data points and consistency
    const dataPoints = factors.length;
    const avgImpact = factors.reduce((sum, factor) => {
      if (factor.impact === 'positive') return sum + 1;
      if (factor.impact === 'negative') return sum - 1;
      return sum;
    }, 0) / dataPoints;

    return Math.min(Math.max((dataPoints * 10 + avgImpact * 20), 0), 100);
  }

  private generateRecommendations(factors: LeadFactor[], grade: string): string[] {
    const recommendations: string[] = [];

    const lowEngagement = factors.filter(f => f.category === 'engagement' && f.value < 50);
    const highIntent = factors.find(f => f.category === 'intent' && f.value > 70);
    const recentActivity = factors.find(f => f.name === 'Activity Recency' && f.value > 80);

    if (lowEngagement.length > 2) {
      recommendations.push('Send educational content to increase engagement');
    }

    if (highIntent) {
      recommendations.push('High purchase intent - schedule immediate sales call');
    }

    if (recentActivity) {
      recommendations.push('Recent activity - send personalized follow-up');
    }

    if (grade === 'A') {
      recommendations.push('Priority lead - assign to senior sales representative');
    }

    if (recommendations.length === 0) {
      recommendations.push('Continue nurturing with relevant content');
    }

    return recommendations;
  }
}

// CRM Integration Module
export class CRMIntegration {
  private crmApiUrl: string;
  private apiKey: string;

  constructor(crmApiUrl: string, apiKey: string) {
    this.crmApiUrl = crmApiUrl;
    this.apiKey = apiKey;
  }

  async syncLeadScore(leadScore: LeadScore): Promise<void> {
    try {
      const response = await fetch(`${this.crmApiUrl}/leads/${leadScore.userId}/score`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.apiKey}`,
        },
        body: JSON.stringify({
          score: leadScore.score,
          grade: leadScore.grade,
          confidence: leadScore.confidence,
          factors: leadScore.factors,
          recommendations: leadScore.recommendedActions,
          calculatedAt: leadScore.lastCalculated,
        }),
      });

      if (!response.ok) {
        throw new Error(`CRM sync failed: ${response.statusText}`);
      }
    } catch (error) {
      console.error('CRM sync error:', error);
      // Implement retry logic or queue for later sync
    }
  }

  async createLeadActivity(userId: string, activity: {
    type: string;
    description: string;
    metadata?: any;
  }): Promise<void> {
    try {
      const response = await fetch(`${this.crmApiUrl}/leads/${userId}/activities`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.apiKey}`,
        },
        body: JSON.stringify({
          type: activity.type,
          description: activity.description,
          metadata: activity.metadata,
          timestamp: new Date(),
        }),
      });

      if (!response.ok) {
        throw new Error(`Activity creation failed: ${response.statusText}`);
      }
    } catch (error) {
      console.error('Activity creation error:', error);
    }
  }
}

// Export singleton instance
export const leadScoringEngine = new LeadScoringEngine();

// Real-time scoring processor
export class RealTimeLeadProcessor {
  private scoringEngine: LeadScoringEngine;
  private crmIntegration: CRMIntegration | null = null;
  private scoreCache = new Map<string, LeadScore>();

  constructor(crmIntegration?: CRMIntegration) {
    this.scoringEngine = leadScoringEngine;
    this.crmIntegration = crmIntegration ?? null;
  }

  async processUserActivity(userId: string, activity: Partial<UserBehavior>): Promise<LeadScore> {
    // Get existing behavior data (would come from database in real implementation)
    const existingBehavior: UserBehavior = {
      userId,
      pageViews: 0,
      timeOnSite: 0,
      pagesVisited: [],
      downloads: [],
      formSubmissions: 0,
      emailInteractions: 0,
      socialShares: 0,
      lastActivity: new Date(),
      deviceType: 'desktop',
      location: 'Unknown',
      referralSource: 'direct',
      ...activity,
    };

    // Calculate new score
    const leadScore = await this.scoringEngine.calculateLeadScore(
      userId,
      existingBehavior,
      {}, // demographics would come from user profile
      [] // intent signals would be calculated separately
    );

    // Cache the score
    this.scoreCache.set(userId, leadScore);

    // Sync to CRM if configured
    if (this.crmIntegration) {
      await this.crmIntegration.syncLeadScore(leadScore);
    }

    return leadScore;
  }

  async getLeadScore(userId: string): Promise<LeadScore | null> {
    // Check cache first
    const cached = this.scoreCache.get(userId);
    if (cached && Date.now() - cached.lastCalculated.getTime() < 5 * 60 * 1000) {
      return cached;
    }

    // Would fetch from database/cache in real implementation
    return null;
  }

  async triggerLeadNurture(userId: string, score: LeadScore): Promise<void> {
    if (score.grade === 'A' || score.grade === 'B') {
      // Trigger high-priority nurturing
      console.log(`High-priority nurture triggered for user ${userId}`);

      if (this.crmIntegration) {
        await this.crmIntegration.createLeadActivity(userId, {
          type: 'nurture_triggered',
          description: `Automated nurture campaign triggered for ${score.grade} grade lead`,
          metadata: { score: score.score, grade: score.grade },
        });
      }
    }
  }
}

