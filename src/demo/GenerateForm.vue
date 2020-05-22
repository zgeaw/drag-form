<template>
  <div>
    <fm-generate-form ref="generateFormRef" :data="jsonData" />
    <el-button @click="init">初始化</el-button>
    <el-button @click="reset">复位</el-button>
  </div>
</template>

<script>
export default {
  data(){
    return {
      jsonData: {
        "list": [
          {
            "type": "input",
            "icon": "icon-input",
            "options": {
              "width": "100%",
              "defaultValue": "",
              "required": true,
              "dataType": "string",
              "pattern": "",
              "placeholder": "请输入",
              "disabled": false,
              "halfLine": false,
              "remoteFunc": "func_1590119129000_76485"
            },
            "name": "电话",
            "key": "1590119129000_76485",
            "model": "phone",
            "rules": [
              {
                "type": "string",
                "message": "电话格式不正确"
              },
              {
                "required": true,
                "message": "电话必须填写"
              }
            ],
            "sort": 1
          },
          {
            "type": "radio",
            "icon": "icon-radio-active",
            "options": {
              "inline": true,
              "defaultValue": "1",
              "showLabel": true,
              "options": [
                {
                  "value": "0",
                  "label": "保密"
                },
                {
                  "value": "1",
                  "label": "男"
                },
                {
                  "value": "2",
                  "label": "女"
                }
              ],
              "required": true,
              "width": "",
              "remote": false,
              "remoteOptions": [],
              "props": {
                "value": "value",
                "label": "label"
              },
              "remoteFunc": "func_1590119256000_1784",
              "disabled": false,
              "halfLine": false
            },
            "name": "性别",
            "key": "1590119256000_1784",
            "model": "sex",
            "rules": [
              {
                "required": true,
                "message": "性别必须填写"
              }
            ],
            "sort": 2
          },
          {
            "type": "input",
            "icon": "icon-input",
            "options": {
              "width": "100%",
              "defaultValue": "1",
              "required": true,
              "dataType": "string",
              "pattern": "",
              "placeholder": "请输入",
              "disabled": false,
              "halfLine": false,
              "remoteFunc": "func_1590119207000_86383"
            },
            "name": "统计",
            "key": "1590119207000_86383",
            "model": "count",
            "rules": [
              {
                "type": "string",
                "message": "统计格式不正确"
              },
              {
                "required": true,
                "message": "统计必须填写"
              }
            ],
            "sort": 3
          }
        ]
      }
    }
  },
  mounted () {  
    this.init()
  },
  methods: {
    // 初始化
    init () {
      // 设置表单数据
      this.$refs.generateFormRef.setData({
        count: '5'
      })
    },
    // 复位
    reset () {
      this.$refs.generateFormRef.reset()
    }
  }
}
</script>
