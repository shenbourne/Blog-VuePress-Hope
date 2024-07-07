import {
  flowRendererV2,
  flowStyles
} from "./chunk-JJBGCFJE.js";
import {
  flowDb,
  parser$1
} from "./chunk-4YAM4QV6.js";
import "./chunk-UAWQK7WZ.js";
import "./chunk-ZV7HUMNI.js";
import "./chunk-PMFBDNZC.js";
import "./chunk-Y2TAJ6P5.js";
import "./chunk-LF2UIW5Y.js";
import {
  require_dayjs_min,
  require_dist,
  setConfig
} from "./chunk-CDZVJO2Y.js";
import "./chunk-KQ2CUASX.js";
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
//# sourceMappingURL=flowDiagram-v2-49332944-SA3SQJ7Y.js.map
