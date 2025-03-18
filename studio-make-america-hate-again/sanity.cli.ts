import {defineCliConfig, getStudioEnvironmentVariables} from 'sanity/cli'

// Get dataset
const dataset_ = getStudioEnvironmentVariables().SANITY_STUDIO_DATA_SET || "production"

export default defineCliConfig({
  api: {
    projectId: 'qfsk5hf2',
    dataset: dataset_
  },
  /**
   * Enable auto-updates for studios.
   * Learn more at https://www.sanity.io/docs/cli#auto-updates
   */
  autoUpdates: true,
})
