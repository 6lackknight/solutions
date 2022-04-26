import * as sdk from 'botpress/sdk'
import numberPicker from './numberPicker'

export const MODULE_NAME = 'number-picker'

const skills: sdk.Skill[] = [
  {
    id: 'NumberPicker',
    name: 'Number Picker',
    icon: 'numerical',
    flowGenerator: numberPicker.generateFlow
  }
]

const entryPoint: sdk.ModuleEntryPoint = {
  skills,
  definition: {
    name: MODULE_NAME,
    menuIcon: 'numerical',
    fullName: 'Number Picker',
    homepage: 'https://botpress.io',
    noInterface: true,
    experimental: true
  }
}

export default entryPoint
