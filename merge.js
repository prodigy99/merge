#!/usr/bin/env node
const fs = require('fs')

const convert = (from, to) => str => Buffer.from(str, from).toString(to)
const utf8ToHex = convert('utf8', 'hex')

//Combine Array
const merge =  intervals => {

    if (intervals.length === 0) return []
    let res = []
    intervals.sort((a, b) => a[0] > b[0] ? 1 : -1) //数组首位排序函数sort
    let candidate = intervals[0] //排序后选择第一个数组  (临时空间)

    for (let i = 1; i < intervals.length; i++) {
        let cur = intervals[i] //从第二个开始取cur

        if (Number(utf8ToHex(candidate[1])) >= Number(utf8ToHex(cur[0])) - 1) { // 有重合 能合并
            candidate[1] = cur[1] > candidate[1] ? cur[1] : candidate[1] // 左端不变 右端取大的
        } else { // 不重合 不能合并
            res.push(candidate)
            candidate = cur //把cur放进去临时控件
        }
    }

    res.push(candidate)
    return res
};

let filePath = process.argv[2];

fs.readFile(filePath, (err, data) => {
    data = data.toString().split("\n");
    let intervals = data.map(item => item.split(":"));
    let result = merge(intervals)
    
    result.forEach(item => {
        console.log(`${item[0]}:${item[1]}`)
    })
})