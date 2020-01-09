# 积分商城

## 积分商城接口(API网关接入)文档

> 1.接口请求路径说明：PC/小程序 发送请求到 API_Service服务，再由API_Service服务解析权限和必要参数请求商城（jdk_integral_mall）服务
>
>
>
> 2.PC/小程序 登录状态下不需要前端传递group_id和user_id字段，API_Service服务会从session和相关请求头种获取
>
>
>
> 3.小程序未登录状态下在请求头种添加加密appId，由API_Service服务解密获取group_id


### 积分课程
#### 1.添加积分课程 （可调试）
> 添加课程到积分课程列表

**请求地址：**

**前端请求地址：**/mall/addCourse

**请求方式：**GET

**参数：**

| 参数     | 必选 | 类型 | 参数说明 |
| -------- | ---- | ---- | -------- |
| course_id | 是   | long | 课程id   |


**返回：**

```json
{
  "data": [
    {
      "id": 5,
      "course_id": 59278,
      "course_name": "(复制)小程序创建",
      "course_type": 0,
      "course_owner": "robot5.2",
      "integral_project_count": 0, // 项目积分数
      "integral_limit": 0,         // 积分数上限
      "state": 0,         // 是否在积分列表里
      "integral_state":0, // 是否开启积分
    }
  ],
 "count":10,
  "err_code": 0,
  "err_msg": "success"
}

```
