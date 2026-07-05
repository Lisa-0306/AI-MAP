# 恢复报告

## 结论

截至 2026-07-05，本机未找到原始 `ai-compute-map` Codex Git 工程，也未找到可确认的原 GitHub remote。

已找到一个此前从公开页面恢复的快照目录：`D:\4-codex\projects\ai-compute-map-recovered`。本次按用户指定路径整理为：`D:\4-codex\ai-compute-map-recovered`。

## 本机溯源

已检查：

- `D:\4-codex`
- `/mnt/d/4-codex` 对应的 Windows 路径
- `~/projects`
- `~/.codex`
- 当前用户 Downloads / Documents / Desktop

关键词包括：`ai-compute-map`、`AI MAP`、`AI 算力产业链长页面投研应用`、`Token → FLOPs`、`GB300 NVL72`、`供需比例`、`update_supply_data`、`PROMPTS.md`。

发现：

- 没有原始 `.git` 工程目录。
- `.codex` 会话记录显示 2026-07-05 早些时候曾从公开页面做过一次恢复。
- 该恢复目录无 `.git`，属于公开快照，不是原始 Git 仓库。

## GitHub 核查

公开仓库 `freshtemp-labs/ai-compute-map` 已检查：它是 React 19 + Vite 的全球 AI 基础设施地图项目，包含地图、晶圆厂、数据中心、供应链 Dashboard、多语言与 API 文档等模块。它不是当前线上页面的“AI 算力产业链长页面投研应用”，不应直接覆盖。

当前公开页面和恢复文件未暴露 GitHub 仓库 URL。

## Vercel 核查

尝试通过 Vercel 连接读取 `ai-compute-map.vercel.app` 的部署信息，但 `freshtemp-labs` 团队返回未授权。当前本机也未发现 `.vercel/project.json`，所以无法确认线上 Production Deployment 的 branch、commit SHA 或 GitHub 绑定仓库。

## 已恢复内容

- `index.html`：公开页面主体，包含内联样式与交互脚本。
- `README.md`：项目说明、模块、使用和部署方式。
- `PROMPTS.md`：公开提示词记录。
- `CHANGELOG.md`：公开变更记录。
- `data/default_supply.json`：供给侧示例数据。
- `data/bom_items.json`：机柜 BOM 与产业链节点示例。
- `data/company_opportunities.json`：A股/中国公司机会排序示例。
- `scripts/update_supply_data.js`：供给侧 JSON 更新脚本。
- `vercel.json`：静态部署配置。
- `.gitignore`：常规静态项目忽略规则。

## 无法保证完全一致的内容

- 原始 Codex 工程的文件拆分、提示词上下文和中间生成记录。
- 原始 GitHub 仓库、默认分支和 commit 历史。
- Vercel Production Deployment 的真实 Source、branch、commit SHA。
- 页面内嵌数据以外的真实供给侧数据源。

## 重新绑定 Vercel

1. 将本目录推送到新的或已确认的 GitHub 仓库。
2. 在 Vercel Dashboard 新建/导入项目，选择该仓库。
3. Framework 选择 Other / Static，Build Command 留空或使用默认静态部署。
4. Output Directory 使用项目根目录。
5. 将域名 `ai-compute-map.vercel.app` 或自定义域名绑定到新项目。
