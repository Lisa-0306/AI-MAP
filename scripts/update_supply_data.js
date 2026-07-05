#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";

const inputPath = process.argv[2];
const outputPath = process.argv[3] || path.resolve("data/default_supply.json");

if (!inputPath) {
  console.error("Usage: node scripts/update_supply_data.js <input.json> [output.json]");
  process.exit(1);
}

const payload = JSON.parse(fs.readFileSync(inputPath, "utf8"));
const now = new Date().toISOString().slice(0, 10);
const normalized = {
  updatedAt: payload.updatedAt || now,
  sourceType: payload.sourceType || "用户导入数据",
  regions: payload.regions || [],
  complianceNote: payload.complianceNote || "只读取用户合法导出的本地数据；真实数据缺失时标注示例估算。"
};

fs.mkdirSync(path.dirname(outputPath), { recursive: true });
fs.writeFileSync(outputPath, `${JSON.stringify(normalized, null, 2)}\n`, "utf8");
console.log(`Updated ${outputPath}`);
