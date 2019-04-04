# 项目结构
* 当前日期dailytask
* 查看昨天dailytask
    - 查看完成情况
    - 标注备注，没完成的原因
    - 日常记录
* 查看本周dailytask
    - 查看完成情况
    - 标注备注，没完成的原因
    - 日常记录
* 统计历史完成情况


# 数据库设计

##  清单列表 list
> 作用：清单列表用于记录各个版本的清单详情。
> 目的：清单本身是用于展示每条的任务目标的

字段 | 类型 | 说明
---|---|---
id | Int  | 自增长的清单id
name | String | 清单名称
note | String | 清单备注，及时说明
content | JSON | 清单内容，JSON字符串
----
## 历史记录 record
> 作用：记录每天的完成。
> 目的：

字段 | 类型 | 说明
---|---|---
id | Int  | 自增长的清单id
date | String | 清单名称
list_id | Int | 关联清单id
completion | Array | 清单完成度
note | String | 当前清单备注

