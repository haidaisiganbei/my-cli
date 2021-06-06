#!/usr/bin/env node

// 引入commander
const program = require("commander")

// 设置版本号
program.version(require('../package.json').version)

// 设置init命令
program.command("init <name>")
        .description("init project")
        .option("-s ,--session","session param")
        .action(require('../lib/init'))

program.parse(process.argv)