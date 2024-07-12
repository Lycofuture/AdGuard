const fs = require('fs');
const path = require('path');

// 读取域名列表
const domainFilePath = path.join(__dirname, 'domains.txt');
const domains = fs.readFileSync(domainFilePath, 'utf-8').split('\n').filter(Boolean);

// 生成 RULE-SET 配置
const ruleSetName = 'AdBlock';
const rules = domains.map(domain => `DOMAIN-SUFFIX,${domain},REJECT`);
const ruleSetConfig = `# ${ruleSetName}\n${rules.join('\n')}`;

// 保存到文件
const outputFilePath = path.join(__dirname, 'adblock_ruleset.txt');
fs.writeFileSync(outputFilePath, ruleSetConfig);

console.log('RULE-SET 配置已生成并保存为 adblock_ruleset.txt');
