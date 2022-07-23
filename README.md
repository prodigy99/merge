# SYNOPSIS
    merge FILE
# DESCRIPTION
    合并FILE中的重叠区间。
    区间表示法：
    区间左闭右开，记法为start:end,以\n分隔。
    start和end指明区间起始与结束，用16进制数字表示，类型为uint64。
    如 A000:A004 表示[A000,A004)。
    合并后的区间输出到stdout。

    EXAMPLE
        FILE:
        A000:A002
        A002:A004
        A004:A006
        A00A:A00B
        A00B:A00E
        A003:A005
        
        merge FILE > out
        out:
        A000:A006
        A00A:A00E
        解释：{A000:A002, A002:A004, A004:A006, A003:A005}可合并为A000:A006,
        {A00A:A00B, A00B:A00E}可合并为A00A,A00E。

# usage
``` bash
# 1.确保系统中有node执行环境
# 2.给予merge执行权限
chmod 755 ./merge.js
# 3.使用
# ex
./merge.js ./test/info.txt > result.txt
```

# development
```bash
# 1.安装node,npm,yarn环境
# 2.安装依赖
yarn
# 3.开发
yarn dev [filePath]
#ex: yarn dev ./test/info.txt
```