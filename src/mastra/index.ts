
import { Mastra } from "@mastra/core/mastra";
import { createLogger } from "@mastra/core/logger";
import { weatherWorkflow } from "./workflows";
import { weatherAgent } from "./agents";
import { stockAgent } from "./agents/stockAgent";


export const mastra = new Mastra({
  workflows: { weatherWorkflow },
  agents: { weatherAgent, stockAgent },
  logger: createLogger({
    name: 'Mastra',
    level: 'info',
  }),
});
