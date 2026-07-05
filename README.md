# AI Compute Map

AI 算力产业链长页面投研应用。从公开线上页面 `https://ai-compute-map.vercel.app` 恢复为可本地打开、可静态部署的项目快照。

## 模块

- 核心结论
- 假设参数滑块区：Token、模型占比、训练/推理占比、评分权重
- 需求推导：Token -> FLOPs -> GPU-hour -> GPU 数 -> IT 负载 -> 电力 -> HBM -> NVL72 -> Capex
- AI 机柜价值解剖图
- 真实供给侧数据面板，支持全球/中国切换
- 利润分配矩阵
- 中国资源管制牌
- 国产替代与供应紧缺热力图
- 先进技术路线
- A股/中国公司机会排序
- 配置建议区
- GitHub / Vercel / 静态导出说明

## 使用

直接打开 `index.html` 即可浏览。页面主体为单文件 HTML，CSS 与 JavaScript 内联，适合静态托管。

```powershell
cd D:\4-codex\ai-compute-map-recovered
start .\index.html
```

## 数据文件

- `data/default_supply.json`：供给侧示例数据，所有默认值均标注为“示例估算，待导入真实数据”。
- `data/bom_items.json`：机柜 BOM 与产业链节点。
- `data/company_opportunities.json`：A股/中国公司机会排序示例。

## 部署

可直接部署到 Vercel 静态站点。当前恢复版本没有发现原始 Vercel Git 绑定信息，需在 Vercel Dashboard 中重新导入 GitHub 仓库或用 Vercel CLI 重新部署。

## 合规边界

本项目只基于公开网页快照与本机可读文件恢复；不绕过登录、验证码、付费墙或平台风控。真实数据缺失时明确标注“示例估算，待导入真实数据”。
