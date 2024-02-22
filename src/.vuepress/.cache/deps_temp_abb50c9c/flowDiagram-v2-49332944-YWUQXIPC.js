import {
  flowRendererV2,
  flowStyles
} from "./chunk-DEP7J4WR.js";
import "./chunk-NCZHUYSL.js";
import {
  flowDb,
  parser$1
} from "./chunk-A74AZ2OC.js";
import "./chunk-LQMGFHS6.js";
import "./chunk-2L4J2DFQ.js";
import "./chunk-HHTRX73G.js";
import "./chunk-EMUKHXV3.js";
import {
  require_dayjs_min,
  require_dist,
  setConfig
} from "./chunk-SGZR4BS6.js";
import {
  __toESM
} from "./chunk-3EJPJMEH.js";

// node_modules/mermaid/dist/flowDiagram-v2-49332944.js
var import_dayjs = __toESM(require_dayjs_min(), 1);
var import_sanitize_url = __toESM(require_dist(), 1);
var diagram = {
  parser: parser$1,
  db: flowDb,
  renderer: flowRendererV2,
  styles: flowStyles,
  init: (cnf) => {
    if (!cnf.flowchart) {
      cnf.flowchart = {};
    }
    cnf.flowchart.arrowMarkerAbsolute = cnf.arrowMarkerAbsolute;
    setConfig({ flowchart: { arrowMarkerAbsolute: cnf.arrowMarkerAbsolute } });
    flowRendererV2.setConf(cnf.flowchart);
    flowDb.clear();
    flowDb.setGen("gen-2");
  }
};
export {
  diagram
};
//# sourceMappingURL=flowDiagram-v2-49332944-YWUQXIPC.js.map
