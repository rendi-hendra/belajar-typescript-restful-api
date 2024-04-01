import { web } from "./application/web";
import { logger } from "./application/logging";

web.listen(8080, () => {
  logger.info("Listening on port 8080");
});
