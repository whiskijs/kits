var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, copyDefault, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toCommonJS = /* @__PURE__ */ ((cache) => {
  return (module2, temp) => {
    return cache && cache.get(module2) || (temp = __reExport(__markAsModule({}), module2, 1), cache && cache.set(module2, temp), temp);
  };
})(typeof WeakMap !== "undefined" ? /* @__PURE__ */ new WeakMap() : 0);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  deno: () => DenoPlugin,
  github: () => GithubPlugin
});

// src/deno.ts
function DenoPlugin() {
  return {
    name: "whiski-plugin-deno",
    transformImportUrl(url) {
      if (url.match(/^https?:\/\/deno\.land\//)) {
        let path = url.replace(/^https?:\/\/deno\.land\//, "");
        if (path.startsWith("x")) {
          path = path.replace("x/", "");
          const slices = path.split("/");
          const module2 = slices[0].split("@")[0];
          const version = slices[0].split("@")[1];
          const packageUrl = slices.slice(1).join("/");
          const raw = `https://cdn.deno.land/${module2}/versions/${version}/raw/${packageUrl}`;
          return raw;
        }
        if (path.startsWith("std")) {
          const slices = path.split("/");
          const version = slices[0].split("@")[1];
          const packageUrl = slices.slice(1).join("/");
          const raw = `https://cdn.deno.land/std/versions/${version}/raw/${packageUrl}`;
          return raw;
        }
        throw new Error(`Unknown path: ${path}`);
      }
      return url;
    }
  };
}

// src/github.ts
function GithubPlugin() {
  return {
    name: "whiski-plugin-github",
    transformImportUrl(url) {
      if (url.match(/^https?:\/\/github\.com\//)) {
        return url.replace(/^https?:\/\/github\.com\//, "https://raw.githubusercontent.com/");
      }
      return url;
    }
  };
}
module.exports = __toCommonJS(src_exports);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  deno,
  github
});
