
import { Mastra } from "@mastra/core/mastra";
import { createLogger } from "@mastra/core/logger";
import { weatherWorkflow } from "./workflows";
import { weatherAgent, jokeAgent } from "./agents";

export const mastra = new Mastra({
  workflows: { weatherWorkflow },
  agents: { weatherAgent, jokeAgent },
  logger: createLogger({
    name: 'Mastra',
    level: 'info',
  }),
});
