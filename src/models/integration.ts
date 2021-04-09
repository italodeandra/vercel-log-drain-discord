import mongoose, { Document } from "mongoose"

export interface IIntegration extends Document {
  code: string
  configurationId: string
  accessToken: string
  tokenType: string
  installationId: string
  userId: string
  teamId: string
}

export interface IIntegrationReqBody {
  code: string
  configurationId: string
  accessToken: string
  tokenType: string
  installationId: string
  userId: string
  teamId: string
}

const integrationSchema = new mongoose.Schema<IIntegration>({
  code: String,
  configurationId: String,
  accessToken: String,
  tokenType: String,
  installationId: String,
  userId: String,
  teamId: String,
})

const Integration =
  mongoose.models.Integration ||
  mongoose.model("Integration", integrationSchema)

export default Integration
