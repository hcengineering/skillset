import { SkillCategory } from './types'

import backend from './sets/backend'
import bussinesAnalytics from './sets/bussines-analytics'
import dataStructures from './sets/data-structures'
import design from './sets/design'
import devops from './sets/devops'
import frontend from './sets/frontend'
import hard from './sets/hard'
import management from './sets/management'
import marketing from './sets/marketing'
import mobile from './sets/mobile'
import networking from './sets/networking'
import languages from './sets/programming-lang'
import quality from './sets/quality'
import sales from './sets/sales'
import soft from './sets/soft'

/**
 * Return a set of usefull categories.
 * @returns
 */
export function getCategories (): SkillCategory[] {
  return [
    backend,
    bussinesAnalytics,
    dataStructures,
    design,
    devops,
    frontend,
    hard,
    management,
    marketing,
    mobile,
    networking,
    languages,
    quality,
    sales,
    soft,
    sales,
    soft
  ]
}
